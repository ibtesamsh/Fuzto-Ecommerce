import React, { useState } from "react";
import banner1 from "../assets/Images/banner1.jpg";
import banner2 from "../assets/Images/banner2.jpg";
import banner3 from "../assets/Images/banner3.jpg";
import { ChevronLeft, ChevronRight } from "react-feather";
import Cards from "./Cards";
import data from "../assets/Data/CardImage.json";

const images = [banner1, banner2, banner3];

function Home() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const next = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <>
    <div className="flex overflow-hidden relative">
      <div
        className="flex transition-transform duration-500"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((item, i) => (
          <div key={i} className="min-w-full">
            <img
              src={item}
              alt={`Slide ${i}`}
              className="w-full h-[750px] object-cover"
            />
          </div>
        ))}
      </div>
      <div className="absolute inset-0 flex items-center justify-between px-2">
        <button className="rounded-full shadow bg-white p-2" onClick={prev}>
          <ChevronLeft />
        </button>
        <button className="rounded-full shadow bg-white p-2" onClick={next}>
          <ChevronRight />
        </button>
      </div>
      {/* -------------------------------------------------Card------------------------------------------------------ */}
      
       
     
    </div>
    
 
      <Cards data={data} />
    
  
  


    </>
  );
}

export default Home;
