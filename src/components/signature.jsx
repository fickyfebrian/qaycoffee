import React, { useState, useEffect } from 'react';

export default function Signature() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://fake-coffee-api.vercel.app/api")
      .then((res) => {
        if (!res.ok) {
          throw new Error('Network response was not ok');
        }
        return res.json();
      })
      .then((data) => {
        setData(data.products || []); // Assuming 'products' is an array in the response
      })
      .catch((error) => setError(error.message));
  }, []);
  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!data || data.length === 0) {
    return <div>Loading...</div>; // Show loading state if data is still empty
  }


  return (
    <div className="flex justify-center px-12 py-12 ">
      <div className="font-playfair text-6xl">
        Signature
      </div>
      {data.map((item, index) => (
          <div key={index} className="p-4 bg-white shadow-lg rounded-lg">
            <img
              src={item.image_url}
              alt={item.name}
              className="w-full h-64 object-cover rounded-lg mb-4"
            />
            <h2 className="font-semibold text-xl">{item.name}</h2>
            <p className="text-gray-700">Price: ${item.price}</p>
            <p className="text-gray-500">Flavor Profile: {item.flavor_profile}</p>
          </div>
        ))}
    </div>
  );
}