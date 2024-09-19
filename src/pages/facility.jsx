import React, { useState } from 'react';
import { motion } from 'framer-motion';

const facilities = [
  {
    name: "WiFi",
    icon: "📡",
    description: "High-speed internet available at all locations",
  },
  {
    name: "Power Outlets",
    icon: "🔌",
    description: "Convenient charging stations at every table",
  },
  {
    name: "Meeting Rooms",
    icon: "🏢",
    description: "Private spaces for your business needs",
  },
  {
    name: "Outdoor Seating",
    icon: "🌳",
    description: "Enjoy your coffee in our garden area",
  },
  {
    name: "Bike Parking",
    icon: "🚲",
    description: "Secure parking for your bicycles",
  },
  {
    name: "Pet Friendly",
    icon: "🐾",
    description: "Bring your furry friends along",
  },
];

export default function Facility() {
  return (
    <div className="bg-gray-100">
      <HeroSection />
      <WiFiSection />
      <FacilitiesGrid />
    </div>
  );
}

const HeroSection = () => (
  <motion.div 
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 1 }}
    className="relative h-[60vh] flex items-center justify-center"
    style={{
      backgroundImage: "url('https://images.unsplash.com/photo-1579369917097-49a8444a091d?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
      backgroundSize: "cover",
      backgroundPosition: "center",
    }}
  >
    <div className="absolute inset-0 bg-black opacity-60" />
    <h1 className="relative z-10 font-playfair text-5xl md:text-7xl text-white text-center px-4">
      Facilities for Your Comfort
    </h1>
  </motion.div>
);

const WiFiSection = () => {
  const locations = [
    { name: "Bandung, Jakarta, Bali", wifi: "Qay Coffee", password: "Qayemi2024" },
    { name: "Yogyakarta, Surabaya, Semarang", wifi: "Qay Coffee", password: "apapun2024" },
  ];

  return (
    <div className="py-16 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-playfair text-center mb-12">WiFi Access</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {locations.map((location, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="border bg-transparent p-6 rounded-lg shadow-md"
            >
              <h3 className="font-bold text-white font-poppins text-xl mb-2">{location.name}</h3>
              <p className="text-lg text-white font-poppins"><strong>WiFi:</strong> {location.wifi}</p>
              <p className="text-lg text-white font-poppins"><strong>Password:</strong> {location.password}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

const FacilitiesGrid = () => (
  <div className="py-16 bg-black">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl font-playfair text-center mb-12">Our Amenities</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {facilities.map((facility, index) => (
          <FacilityCard key={index} facility={facility} index={index} />
        ))}
      </div>
    </div>
  </div>
);

const FacilityCard = ({ facility, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    whileHover={{ scale: 1.05 }}
    className="border bg-transparent p-6 rounded-lg shadow-md"
  >
    <div className="text-4xl mb-4">{facility.icon}</div>
    <h3 className="font-bold text-xl mb-2">{facility.name}</h3>
    <p className="text-gray-500">{facility.description}</p>
  </motion.div>
);