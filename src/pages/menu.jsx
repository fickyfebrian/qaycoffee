import React, { useEffect, useState } from "react";
import MenuHeader from "../components/menu/menu";

export default function Menu() {
  const [coldMenu, setColdMenu] = useState([]);
  const [hotMenu, setHotMenu] = useState([]);
  const [cocktailsMenu, setCocktailsMenu] = useState([]);
  const [smoothiesMenu, setSmoothiesMenu] = useState([]);
  const [matchaMenu, setMatchaMenu] = useState([]);
  const [breadMenu, setBreadMenu] = useState([]);
  const [dessertsMenu, setDessertsMenu] = useState([]);
  const [indonesianMenu, setIndonesianMenu] = useState([]);
  const [snacksMenu, setSnacksMenu] = useState([]);
  const [westernMenu, setWesternMenu] = useState([]);
  const [showBackToTop, setShowBackToTop] = useState(false);

  const fetchMenu = (url, setMenuState) => {
    fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => setMenuState(data.items))
      .catch((error) => {
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
    fetchMenu("/menu/bread.json", setBreadMenu);
    fetchMenu("/menu/desserts.json", setDessertsMenu);
    fetchMenu("/menu/indonesian.json", setIndonesianMenu);
    fetchMenu("/menu/snacks.json", setSnacksMenu);
    fetchMenu("/menu/western.json", setWesternMenu);

    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const renderMenuSection = (title, menuItems, id) => (
    <>
      <div
        id={id}
        className="flex justify-center text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-playfair px-4 sm:px-8 md:px-16 lg:px-24 py-8 sm:py-12 md:py-16 lg:py-24"
      >
        {title}
      </div>
      <div className="flex justify-center">
        <div className="w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          {menuItems.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
              {menuItems.map((item, index) => (
                <div key={index} className="flex justify-between items-start">
                  <div className="pr-4">
                    <h2 className="text-xl sm:text-2xl md:text-3xl font-playfair">{item.name}</h2>
                    <p className="text-sm sm:text-base md:text-lg font-poppins text-gray-400">
                      {item.description}
                    </p>
                  </div>
                  <span className="text-lg sm:text-xl md:text-2xl font-poppins whitespace-nowrap">{item.price}</span>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-center text-base sm:text-lg">Loading menu...</p>
          )}
        </div>
      </div>
    </>
  );

  return (
    <div className="w-full pb-20 sm:pb-40 bg-transparent relative">
      <div>
        <MenuHeader />
        <div className="flex justify-center">
          <div className="border-b border-gray-300 w-full max-w-[1700px] text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-playfair text-center px-4 sm:px-44 md:px-52 pt-40 sm:pt-64 md:pt-80 lg:pt-28 pb-6 sm:pb-8 md:pb-10 lg:pb-12">
            Drinks
          </div>
        </div>
        {renderMenuSection("Cold", coldMenu, "cold")}
        {renderMenuSection("Hot", hotMenu, "hot")}
        {renderMenuSection("Cocktails", cocktailsMenu, "cocktails")}
        {renderMenuSection("Smoothies", smoothiesMenu, "smoothies")}
        {renderMenuSection("Matcha Series", matchaMenu, "matcha")}
        <div className="flex justify-center">
          <div className="border-b border-gray-300 w-full max-w-[1700px] text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-playfair text-center px-4 sm:px-8 md:px-12 pt-16 sm:pt-20 md:pt-24 lg:pt-28 pb-6 sm:pb-8 md:pb-10 lg:pb-12">
            Foods
          </div>
        </div>
        {renderMenuSection("Breads", breadMenu, "bread")}
        {renderMenuSection("Indonesian", indonesianMenu, "indonesian")}
        {renderMenuSection("Western", westernMenu, "western")}
        {renderMenuSection("Desserts", dessertsMenu, "desserts")}
        {renderMenuSection("Snacks", snacksMenu, "snacks")}
      </div>
      {showBackToTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 bg-white text-black p-4 rounded-full shadow-lg hover:bg-gray-400 transition-colors duration-200"
          aria-label="Back to top"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
          </svg>
        </button>
      )}
    </div>
  );
}