import React from "react";
import { motion } from "framer-motion";

export default function ShopDirection() {
  return (
    <div
      className="bg-yellow-500 w-full"
      style={{
        backgroundImage: `url('/assets/bg-beans.jpg')`,
        backgroundSize: "cover",
        backgroundPosition: "bottom",
        height: "auto", // Changed from fixed height to auto
        minHeight: "50vh", // Added minimum height
      }}
    >
      <div className="px-4 sm:px-8 md:px-16 lg:px-32 py-8 md:py-14 h-full grid grid-cols-1 md:grid-cols-3 items-center">
        <motion.div 
        className="items-center bg-black justify-left p-6 md:p-8 lg:p-12 w-full md:col-span-2 lg:col-span-1">
        <div className="mb-8">
            <p className="text-white text-xl md:text-2xl font-semibold font-poppins mb-2">
              Qay Bandung
            </p>
            <p className="text-white text-base md:text-xl font-poppins">
              Citarum, Kec. Bandung Wetan, Kota Bandung, Jawa Barat 40115
            </p>
            <p className="text-white text-base md:text-xl font-poppins mb-4">6 AM - 11 PM</p>
            <button className="group relative inline-flex h-12 md:h-14 items-center justify-center border border-slate-200 bg-black px-4 md:px-6 font-medium text-white transition-colors overflow-hidden w-full sm:w-auto">
              <span className="absolute inset-0 overflow-hidden rounded-md">
                <span className="absolute inset-0 animate-shimmer opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>
              </span>
              <span className="relative">
                <a
                  href="https://maps.app.goo.gl/BZqZ2farJbGvgBEU8"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white group-hover:text-white transition-colors"
                >
                  Get Directions
                </a>
              </span>
            </button>
          </div>

          <div>
            <p className="text-white text-xl md:text-2xl font-semibold font-poppins mb-2">
              Qay Jakarta
            </p>
            <p className="text-white text-base md:text-xl font-poppins">
              Jl. Sultan Hasanudin, Kuningan, Melawai, Kec. Kby. Baru, Kota
              Jakarta Selatan, Daerah Khusus Ibukota Jakarta 12160
            </p>
            <p className="text-white text-base md:text-xl font-poppins mb-4">
              Everyday, 24 Hours
            </p>
            <button className="group relative inline-flex h-12 md:h-14 items-center justify-center rounded-md border border-slate-200 bg-black px-4 md:px-6 font-medium text-white transition-colors overflow-hidden w-full sm:w-auto">
              <span className="absolute inset-0 overflow-hidden rounded-md">
                <span className="absolute inset-0 animate-shimmer opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>
              </span>
              <span className="relative">
                <a
                  href="https://maps.app.goo.gl/kFfPMMehmLfDXRjg9"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white group-hover:text-white transition-colors"
                >
                  Get Directions
                </a>
              </span>
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}