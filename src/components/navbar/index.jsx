import React, { useState, useEffect } from "react";

export default function Navbar() {
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false); // State untuk mengatur warna background navbar

  const controlNavbar = () => {
    if (typeof window !== "undefined") {
      if (window.scrollY > lastScrollY) {
        setShowNavbar(false);
      } else {
        setShowNavbar(true);
      }
      setLastScrollY(window.scrollY);

      // Set isScrolled berdasarkan posisi scroll
      setIsScrolled(window.scrollY > 0);
    }
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", controlNavbar);
      return () => {
        window.removeEventListener("scroll", controlNavbar);
      };
    }
  }, [lastScrollY]);

  useEffect(() => {
    if (sidebarOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [sidebarOpen]);

  return (
    <>
      <nav
        className={`fixed w-full top-0 left-0 z-40 transition-transform duration-300 ${
          showNavbar ? "transform translate-y-0" : "transform -translate-y-full"
        } ${isScrolled ? "bg-black" : "bg-transparent"}`} // Berubah dari transparent ke hitam
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-32">
            <div className="">
              <a className="text-4xl font-playfair text-white" href="/">
                Qaycoffee
              </a>
            </div>
            <ul className="hidden md:flex space-x-8 font-poppins">
              <li className="relative group">
                <a href="/" className="text-white text-2xl">
                  Home
                  <span className="absolute left-0 bottom-0 w-full h-1 bg-white transition-transform transform scale-x-0 group-hover:scale-x-100 origin-left"></span>
                </a>
              </li>
              <li className="relative group">
                <a href="/menu" className="text-white text-2xl">
                  Menu
                  <span className="absolute left-0 bottom-0 w-full h-1 bg-white transition-transform transform scale-x-0 group-hover:scale-x-100 origin-left"></span>
                </a>
              </li>
              <li className="relative group">
                <a href="/about" className="text-white text-2xl">
                  About
                  <span className="absolute left-0 bottom-0 w-full h-1 bg-white transition-transform transform scale-x-0 group-hover:scale-x-100 origin-left"></span>
                </a>
              </li>
              <li className="relative group">
                <a href="/contact" className="text-white text-2xl">
                  Contact
                  <span className="absolute left-0 bottom-0 w-full h-1 bg-white transition-transform transform scale-x-0 group-hover:scale-x-100 origin-left"></span>
                </a>
              </li>
              <li className="relative group">
                <a href="/facility" className="text-white text-2xl">
                  Facility
                  <span className="absolute left-0 bottom-0 w-full h-1 bg-white transition-transform transform scale-x-0 group-hover:scale-x-100 origin-left"></span>
                </a>
              </li>
            </ul>
            <div className="md:hidden">
              <button
                className="text-white focus:outline-none"
                onClick={() => setSidebarOpen(true)}
              >
                <svg
                  viewBox="-2.4 -2.4 28.80 28.80"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  transform="rotate(0)matrix(1, 0, 0, 1, 0, 0)"
                  width="44"
                  height="44"
                >
                  <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    <g id="Menu / Menu_Alt_01">
                      <path
                        id="Vector"
                        d="M12 17H19M5 12H19M5 7H19"
                        stroke="white"
                        strokeWidth="2.4"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                    </g>
                  </g>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 z-50 bg-black bg-opacity-50"
          onClick={() => setSidebarOpen(false)}
        ></div>
      )}

      {/* Sidebar */}
      <div
        className={`fixed inset-y-0 right-0 z-50 w-[400px] bg-gradient-to-br bg-black transition-transform duration-300 ease-in-out ${
          sidebarOpen ? "transform translate-x-0" : "transform translate-x-full"
        } md:hidden`}
      >
        <div className="flex flex-col p-4 space-y-4 text-center items-center justify-center min-h-screen">
          <button
            className="absolute top-4 right-4 text-white text-4xl z-10"
            onClick={() => setSidebarOpen(false)}
          >
            &times;
          </button>
          <a
            href="/"
            className="text-white text-2xl"
            onClick={() => setSidebarOpen(false)}
          >
            Home
          </a>
          <a
            href="/menu"
            className="text-white text-2xl"
            onClick={() => setSidebarOpen(false)}
          >
            Menu
          </a>
          <a
            href="/about"
            className="text-white text-2xl"
            onClick={() => setSidebarOpen(false)}
          >
            About
          </a>
          <a
            href="/contact"
            className="text-white text-2xl"
            onClick={() => setSidebarOpen(false)}
          >
            Contact
          </a>
        </div>
      </div>
    </>
  );
}
