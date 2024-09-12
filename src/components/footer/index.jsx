import React, { useState, useEffect } from "react";

export default function Footer() {
  const [locations, setLocations] = useState([]);

  useEffect(() => {
    // Fetching the location data from the JSON file
    fetch("/shopLocation.json")
      .then((response) => response.json())
      .then((data) => setLocations(data))
      .catch((error) => console.error("Error fetching locations:", error));
  }, []);

  return (
    <footer className="bg-black text-white py-8 font-poppins">
      <div className="container mx-auto grid grid-cols-3 gap-8">
        <div className="container mx-auto flex justify-center items-center h-full">
          <a className="text-7xl font-playfair" href="/">
            Qaycoffee
          </a>
        </div>

        {/* Locations Section */}
        <div>
          <h2 className="text-xl font-bold mb-4">Locations</h2>
          <ul>
            {locations.length > 0 ? (
              locations.map((location, index) => (
                <li key={index} className="mb-2">
                  <p className="text-lg ">{location.name}</p>
                  <p className="text-lg mb-4">{location.address}</p>
                </li>
              ))
            ) : (
              <p>Loading locations...</p>
            )}
          </ul>
        </div>

        {/* Info Section */}
        <div>
          <h2 className="text-xl font-bold mb-4">Info</h2>
          <ul>
            <li className="mb-2">
              <a href="/about" className="hover:text-yellow-400">
                About
              </a>
            </li>
            <li className="mb-2">
              <a href="/faq" className="hover:text-yellow-400">
                FAQ
              </a>
            </li>
            <li className="mb-2">
              <a href="/terms" className="hover:text-yellow-400">
                Terms & Condition
              </a>
            </li>
            <li className="mb-2">
              <a href="/contact" className="hover:text-yellow-400">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
