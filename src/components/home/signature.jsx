import React, { useState, useEffect } from "react";

export default function Signature() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const convertToIDR = (usdPrice) => {
    // Kurs ini sebaiknya diperbarui secara berkala atau diambil dari API kurs mata uang
    const exchangeRate = 15000; // Contoh kurs: 1 USD = 15000 IDR
    return usdPrice * exchangeRate;
  };

  useEffect(() => {
    fetch("https://fake-coffee-api.vercel.app/api")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Network response was not ok");
        }
        return res.json();
      })
      .then((data) => {
        setData(data); // The API returns an array directly, so we don't need to access a 'products' property
      })
      .catch((error) => setError(error.message));
  }, []);

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="font-playfair text-6xl text-center mb-8">
        Signature Coffee
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6 mx-12">
        {data.map((coffee) => (
          <div
            key={coffee.id}
            className="bg-transparent shadow-lg rounded-lg overflow-hidden"
          >
            <img
              src={coffee.image_url}
              alt={coffee.name}
              className="w-full h-2/4 object-contain bg-white blur-0 transition-transform duration-300 ease-in-out transform hover:scale-150 md:transform-none scale-100"
            />
            <div className="p-4">
              <h2 className="font-poppins font-semibold text-2xl mb-4">
                {coffee.name}
              </h2>
              <p>
                {convertToIDR(coffee.price).toLocaleString("id-ID", {
                  style: "currency",
                  currency: "IDR",
                })}
              </p>
              <p className=" font-poppins text-white">From: {coffee.region}</p>
              <p className="font-poppins text-white">
                {typeof coffee.flavor_profile === "string"
                  ? coffee.flavor_profile.replace(/([a-z])([A-Z])/g, "$1 $2")
                  :String(coffee.flavor_profile)
                  }
              </p>
              <p className=" font-poppins text-white">{coffee.weight} gram</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
