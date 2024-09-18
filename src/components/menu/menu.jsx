import React from "react";

export default function MenuHeader() {
  return (
    <div className="">
      {/* Header Section */}
      <div
        className="flex h-auto w-full items-center justify-end px-24 py-24"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1610632380989-680fe40816c6?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
          backgroundSize: "110%",
          backgroundPosition: "center",
          height: "440px",
        }}
      >
        <p className="font-playfair text-5xl text-white">Our Menu</p>
      </div>

      {/* Menu Section */}
      <div className="relative mx-auto pt-28">
        <div className="flex flex-col items-center justify-center">
          {/* Drinks Section */}
          <div className="text-5xl font-playfair px-12 pb-12">Drinks</div>
          <div className="mt-4 border-t border-gray-300 pt-4 w-full max-w-[1700px] flex flex-col items-center">
            <div className="py-2 flex flex-wrap justify-center gap-8 sm:gap-10 md:gap-24 lg:gap-40">
              <a href="#cold" className="text-3xl font-poppins hover:uppercase">
                Cold
              </a>
              <a href="#hot" className="text-3xl font-poppins hover:uppercase">
                Hot
              </a>
              <a
                href="#cocktails"
                className="text-3xl font-poppins hover:uppercase"
              >
                Cocktails
              </a>
              <a
                href="#smoothies"
                className="text-3xl font-poppins hover:uppercase"
              >
                Smoothies
              </a>
              <a
                href="#matcha"
                className="text-3xl font-poppins hover:uppercase"
              >
                Matcha Series
              </a>
            </div>
          </div>

          {/* Food Section */}
          <div className="text-5xl font-playfair px-12 pt-28 pb-12">Food</div>
          <div className="mt-4 border-t border-gray-300 pt-4 w-full max-w-[1700px] flex flex-col items-center">
            <div className="py-2 flex flex-wrap justify-center gap-8 sm:gap-10 md:gap-24 lg:gap-40">
              <a
                href="#bread"
                className="text-3xl font-poppins hover:uppercase"
              >
                Breads
              </a>
              <a
                href="#indonesian"
                className="text-3xl font-poppins hover:uppercase"
              >
                Indonesian
              </a>
              <a
                href="#western"
                className="text-3xl font-poppins hover:uppercase"
              >
                Western
              </a>
              <a
                href="#desserts"
                className="text-3xl font-poppins hover:uppercase"
              >
                Desserts
              </a>
              <a href="#snacks" className="text-3xl font-poppins hover:uppercase">
                Snacks
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
