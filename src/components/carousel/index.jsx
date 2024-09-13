import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Autoplay, Pagination } from 'swiper/modules';
import "swiper/css";
import 'swiper/css/effect-fade';
import 'swiper/css/pagination';
import './Carousel.css';  // Import custom CSS

export default function Carousel() {
  const [images, setImages] = useState([]);

  // Fetch data from JSON file
  useEffect(() => {
    fetch("/carousel.json")
      .then((response) => response.json())
      .then((data) => setImages(data))
      .catch((error) => console.error("Error fetching images:", error));
  }, []);

  return (
    <div className="pt-24">
      {images.length > 0 ? (
        <Swiper
          spaceBetween={50}
          slidesPerView={1}
          loop={true}
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000 }}
          effect="fade"
          modules={[EffectFade, Autoplay, Pagination]}
        >
          {images.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="w-full h-[520px] sm:h-[400px] md:h-[550px] lg:h-[1000px] flex justify-center items-center overflow-hidden">
                <img
                  src={item.image}
                  alt={`Slide ${index}`}
                  className="w-full h-[520px] sm:h-[400px] md:h-[550px] lg:h-full object-cover"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      ) : (
        <p>Loading carousel...</p>
      )}
    </div>
  );
}
