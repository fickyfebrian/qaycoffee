import React, { useState } from "react";
import { motion } from "framer-motion";

export default function MenuHeader() {
  const [activeSection, setActiveSection] = useState("drinks");

  return (
    <div className="bg-black text-white min-h-screen">
      <HeroSection />
      <MenuNavigation 
        activeSection={activeSection} 
        setActiveSection={setActiveSection} 
      />
    </div>
  );
}

const HeroSection = () => (
  <motion.div 
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 1 }}
    className="relative h-[60vh] flex items-center justify-center"
  >
    <div 
      className="absolute inset-0 bg-cover bg-center opacity-50"
      style={{
        backgroundImage: "url('https://images.unsplash.com/photo-1610632380989-680fe40816c6?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
      }}
    />
    <h1 className="relative z-10 font-playfair text-5xl md:text-7xl text-white">
      Our Menu
    </h1>
  </motion.div>
);

const MenuNavigation = ({ activeSection, setActiveSection }) => {
  const sections = {
    drinks: ["Cold", "Hot", "Cocktails", "Smoothies", "Matcha"],
    food: ["Bread", "Indonesian", "Western", "Desserts", "Snacks"],
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="flex justify-center space-x-8 mb-12">
        <TabButton 
          active={activeSection === "drinks"} 
          onClick={() => setActiveSection("drinks")}
        >
          Drinks
        </TabButton>
        <TabButton 
          active={activeSection === "food"} 
          onClick={() => setActiveSection("food")}
        >
          Food
        </TabButton>
      </div>
      
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8"
      >
        {sections[activeSection].map((item) => (
          <CategoryButton key={item} href={`#${item.toLowerCase().replace(" ", "-")}`}>
            {item}
          </CategoryButton>
        ))}
      </motion.div>
    </div>
  );
};

const TabButton = ({ children, active, onClick }) => (
  <motion.button
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    className={`text-2xl sm:text-3xl font-playfair px-4 py-2 rounded-md transition-colors ${
      active ? "bg-white text-black" : "text-white hover:bg-white/10"
    }`}
    onClick={onClick}
  >
    {children}
  </motion.button>
);

const CategoryButton = ({ children, href }) => (
  <motion.a
    href={href}
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    className="text-lg sm:text-xl font-poppins text-center py-2 px-4 border border-white/20 rounded-lg hover:bg-white/10 transition-colors"
  >
    {children}
  </motion.a>
);