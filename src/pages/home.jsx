import React, { useEffect, useState } from 'react';
import Signature from '../components/signature';

export default function Home() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("/shopLocation.json")
      .then((Response) => Response.json())
      .then((data) => setData(data))
      .catch((error) => console.error("Fetching data Error tot !", error));
  }, []);

  return (
    <div className="container mx-auto pt-40">
      <div className="grid grid-cols-2 gap-4 md:grid-cols-3 sm:grid-cols-1">
        {data.map((shop) => (
          <div key={shop.id} className="bg-transparent rounded-lg shadow-md p-4">
            <img src={shop.image} alt="Foto Cofeeshop" className="object-cover w-full h-96 mb-4" />
            <div className="text-center">
              <h2 className="font-bold text-xl font-poppins">{shop.name}</h2>
              <p className="text-l font-poppins">{shop.hours}</p>
              <p className="text-l font-poppins">{shop.address}</p>
            </div>
          </div>
        ))}
      </div>
      <Signature />
    </div>
  );
}