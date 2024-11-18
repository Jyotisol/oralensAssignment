/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import Image1 from "../assets/1.jpg";
import Image2 from "../assets/2.jpg";
import Image3 from "../assets/3.jpg";
import Image4 from '../assets/4.jpg';
import Image5 from '../assets/5.jpg';
import Image6 from '../assets/6.jpg';
import Image7 from '../assets/7.jpg';

const Gallery = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [Image1, Image2, Image3, Image4, Image5, Image6, Image7];

  // Function to go to the next image
  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  

  // Auto-scroll every 2 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      nextImage();
    }, 2000);

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  return (
    <section id="gallery" className="py-1 bg-gray-100">
      <h1 className="text-4xl text-center text-red-700 mb-8">OUR GALLERY</h1>
      <div className="relative  overflow-hidden">
        {/* Full-width container */}
        <div className="flex justify-center items-center w-[20px] transition-all duration-700 ease-in-out">
          {images.map((image, index) => (
            <div
              key={index}
              className={`gallery-item ${
                index === currentIndex ? 'block' : 'hidden'
              }`}
            >
              <img
                src={image}
                alt={`Gallery ${index + 1}`}
                className="w-[10px] h-[100px]  rounded-lg shadow-lg transition-transform transform hover:scale-105"
              />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Gallery;
