import React, { useEffect, useState } from "react";
import MenuHeader from "../components/menu/menu";

export default function Menu() {
  const [hotMenu, setHotMenu] = useState([]);
  const [coldMenu, setColdMenu] = useState([]); // State untuk menyimpan data cold menu

  useEffect(() => {
    // Fetch the JSON file from public directory
    fetch("/menu/hot.json")
      .then(response => response.json())
      .then(data => setHotMenu(data.items)) // Assuming the JSON format has "items"
      .catch(error => console.error("Error fetching menu:", error));
  }, []);

  useEffect(() => {
    // Fetch the JSON file from public directory
    fetch("/menu/cold.json")
      .then(response => response.json())
      .then(data => setColdMenu(data.items)) // Assuming the JSON format has "items"
      .catch(error => console.error("Error fetching menu:", error));
  }, []);

  return (
    <div className="w-full pt-40">
      <div>
        <MenuHeader />
        <div className="flex justify-center">
          <div className="text-5xl font-playfair text-center px-12 pt-28 pb-12">
            Drinks
            <div id="cold" className="text-5xl font-playfair px-24">Cold</div>
          </div>
        </div>

        {/* Menampilkan List Menu Cold */}
        <div className="flex justify-center">
          <div className="max-w-7xl w-full px-4 sm:px-6 lg:px-8">
            {coldMenu.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                {coldMenu.map((item, index) => (
                  <div key={index} className="flex justify-between items-start">
                    <div>
                      <h2 className="text-3xl font-playfair">{item.name}</h2>
                      <p className="text-lg font-poppins text-gray-400">{item.description}</p>
                    </div>
                    <span className="text-xl font-poppins">{item.price}</span>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-center text-lg">Loading menu...</p>
            )}
          </div>
        </div>
        <div id="hot" className="flex justify-center text-5xl font-playfair px-24 py-24">Hot</div>
        <div className="flex justify-center">
          <div className="max-w-7xl w-full px-4 sm:px-6 lg:px-8">
            {hotMenu.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                {hotMenu.map((item, index) => (
                  <div key={index} className="flex justify-between items-start">
                    <div>
                      <h2 className="text-3xl font-playfair">{item.name}</h2>
                      <p className="text-lg font-poppins text-gray-400">{item.description}</p>
                    </div>
                    <span className="text-xl font-poppins">{item.price}</span>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-center text-lg">Loading menu...</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
