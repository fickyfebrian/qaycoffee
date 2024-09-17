import React, { useEffect, useState } from "react";
import MenuHeader from "../components/menu/menu";

export default function Menu() {
  const [coldMenu, setColdMenu] = useState([]);
  const [hotMenu, setHotMenu] = useState([]);
  const [cocktailsMenu, setCocktailsMenu] = useState([]);
  const [smoothiesMenu, setSmoothiesMenu] = useState([]);
  const [matchaMenu, setMatchaMenu] = useState([]);

  const fetchMenu = (url, setMenuState) => {
    fetch(url)
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then(data => setMenuState(data.items))
      .catch(error => {
        console.error(`Error fetching menu from ${url}:`, error);
        setMenuState([]); // Set empty array on error to avoid undefined issues
      });
  };

  useEffect(() => {
    fetchMenu("/menu/cold.json", setColdMenu);
    fetchMenu("/menu/hot.json", setHotMenu);
    fetchMenu("/menu/cocktails.json", setCocktailsMenu);
    fetchMenu("/menu/smoothies.json", setSmoothiesMenu);
    fetchMenu("/menu/matcha.json", setMatchaMenu);

  }, []);

  const renderMenuSection = (title, menuItems, id) => (
    <>
      <div id={id} className="flex justify-center text-5xl font-playfair px-24 py-24">{title}</div>
      <div className="flex justify-center">
        <div className="max-w-7xl w-full px-4 sm:px-6 lg:px-8">
          {menuItems.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
              {menuItems.map((item, index) => (
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
    </>
  );

  return (
    <div className="w-full pb-40 bg-transparent">
      <div>
        <MenuHeader />
        <div className="flex justify-center">
          <div className="text-5xl font-playfair text-center px-12 pt-28 pb-12">
            Drinks
          </div>
        </div>
        {renderMenuSection("Cold", coldMenu, "cold")}
        {renderMenuSection("Hot", hotMenu, "hot")}
        {renderMenuSection("Cocktails", cocktailsMenu, "cocktails")}
        {renderMenuSection("Smoothies", smoothiesMenu, "smoothies")}
        {renderMenuSection("Matcha Series", matchaMenu , "matcha")}

      </div>
    </div>
  );
}