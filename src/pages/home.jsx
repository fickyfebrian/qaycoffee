import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Signature from "../components/signature";
import ShopDirection from "../components/shopDirection";
import Carousel from "../components/carousel";

export default function Home() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("/shopLocation.json")
      .then((Response) => Response.json())
      .then((data) => setData(data))
      .catch((error) => console.error("Fetching data Error tot !", error));
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="w-auto"
    >
      <Carousel />
      <div className="container mx-auto pt-20">
        <motion.div
          className="grid grid-cols-1 gap-4 md:grid-cols-3 sm:grid-cols-1"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, staggerChildren: 0.1 }}
        >
          {data.map((shop) => (
            <motion.div
              key={shop.id}
              className="bg-transparent rounded-lg shadow-md p-4"
              initial={{ opacity: 0, x: -90 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, ease: "easeInOut" }}
              viewport={{ once: true }}
            >
              <motion.img
                src={shop.image}
                alt="Foto Cofeeshop"
                className="object-cover w-full h-96 mb-4"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              />
              <div className="text-center">
                <h2 className="font-bold text-xl font-poppins">{shop.name}</h2>
                <p className="text-l font-poppins">{shop.hours}</p>
                <p className="text-l font-poppins">{shop.address}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
        <Signature />
      </div>
      <ShopDirection />
    </motion.div>
  );
}
