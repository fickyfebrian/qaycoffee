import React from "react";
import { motion } from "framer-motion";

export default function About() {
  return (
    <div className="">
      <Hero />
      <AboutUs />
      <Quote />
      <MenuCTA />
    </div>
  );
}

const Hero = () => (
  <motion.div 
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 1 }}
    className="relative h-[60vh] flex items-center justify-center"
  >
    <div 
      className="absolute inset-0 bg-cover bg-center"
      style={{
        backgroundImage: "url('https://images.unsplash.com/photo-1553292218-4892c2e7e1ae?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
      }}
    />
    <div className="absolute inset-0 bg-black opacity-50" />
    <h1 className="relative z-10 font-playfair text-4xl md:text-6xl text-white text-center px-4">
      Your daily dose of happiness.
    </h1>
  </motion.div>
);

const AboutUs = () => (
  <div className="container mx-auto px-4 py-16">
    <div className="flex flex-col md:flex-row items-center gap-8">
      <motion.div 
        initial={{ x: -50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="md:w-1/2"
      >
        <h2 className="font-playfair text-4xl md:text-5xl mb-4">
          <strong>QayCoffee</strong>
        </h2>
        <p className="text-white font-poppins leading-relaxed">
          We believe that coffee is more than just a beverage; it's an
          experience. Our skilled baristas craft each cup with passion, using
          only the finest beans. Come and savor the moment with us. Thank you
          for your continued support.
        </p>
      </motion.div>
      <motion.div 
        initial={{ x: 50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="md:w-1/2"
      >
        <img
          src="https://images.unsplash.com/photo-1519307558758-9fa05af823a1?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Coffee brewing"
          className="w-full h-auto object-cover object-center rounded-lg shadow-lg"
        />
      </motion.div>
    </div>
  </div>
);

const Quote = () => (
  <div className="bg-transparent py-16">
    <div className="container mx-auto px-4">
      <blockquote className="text-center">
        <p className="font-playfair text-2xl md:text-3xl text-white mb-4">
          "To me, the smell of fresh-made coffee is one of the greatest inventions."
        </p>
        <footer className="text-gray-600 italic">- Hugh Jackman</footer>
      </blockquote>
    </div>
  </div>
);

const MenuCTA = () => (
  <div className="container mx-auto px-4 py-16">
    <motion.div 
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="shadow-lg rounded-lg overflow-hidden cursor-pointer"
    >
      <a href="/menu" className="block">
        <div 
          className="h-72 bg-cover bg-center"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1432107294469-414527cb5c65?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
          }}
        >
          <div className="h-full flex items-center justify-center bg-black bg-opacity-40">
            <div className="text-center">
              <h2 className="text-2xl font-semibold text-white mb-2">Explore Our Menu</h2>
              <p className="text-gray-200">Check out our delicious coffee options!</p>
            </div>
          </div>
        </div>
      </a>
    </motion.div>
  </div>
);