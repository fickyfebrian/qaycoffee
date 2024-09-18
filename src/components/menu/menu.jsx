import React from "react";

export default function MenuHeader() {
  return (
    <div className="relative h-auto mx-auto">
      <div className="flex flex-col items-center justify-center">
        <div className="text-6xl font-playfair px-12 py-28 sm:py-28 md:py-36 lg:py-52">Menu</div>
        <div className="text-5xl font-playfair px-12 pb-12">Drinks</div>
        <div className="mt-4 border-t border-gray-300 pt-4 w-full max-w-[1700px] flex flex-col items-center">
        <div className="py-2 flex flex-wrap justify-center gap-8 sm:gap-10 md:gap-24 lg:gap-40">
            <a href="#cold" className="text-2xl font-poppins hover:uppercase">
              Cold
            </a>
            <a href="#hot" className="text-3xl font-poppins hover:uppercase">
              Hot
            </a>
            <a href="#cocktails" className="text-3xl font-poppins hover:uppercase">
              Cocktails
            </a>
            <a href="#smoothies" className="text-3xl font-poppins hover:uppercase">
              Smoothies
            </a>
            <a href="#matcha" className="text-3xl font-poppins hover:uppercase">
              Matcha Series
            </a>
          </div>
        </div>
        <div className="text-5xl font-playfair px-12 pt-28 pb-12">Food</div>
        <div className="mt-4 border-t border-gray-300 pt-4 w-full max-w-[1700px] flex flex-col items-center"></div>
        <div className="py-2 flex flex-wrap justify-center gap-8 sm:gap-10 md:gap-24 lg:gap-40">
          <a href="#bread" className="text-3xl font-poppins hover:uppercase">
            Breads
          </a>
          <a href="#indonesian" className="text-3xl font-poppins hover:uppercase">
            Indonesian
          </a>
          <a href="#western" className="text-3xl font-poppins hover:uppercase">
            Western
          </a>
          <a href="#desserts" className="text-3xl font-poppins hover:uppercase">
            Desserts
          </a>
          <a href="#snacks" className="text-2xl font-poppins hover:uppercase">
            Snacks
          </a>
        </div>
      </div>
    </div>
  );
}
