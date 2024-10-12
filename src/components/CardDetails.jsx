import React, { useState } from "react";
import Images from "../assets/Images/Card1.jpg";
import { FaHeart } from "react-icons/fa";

function CardDetails() {
  const [selectedSize, setSelectedSize] = useState("");

  const handleSizeClick = (size) => {
    setSelectedSize(size);
  };

  return (
    <div className="flex flex-wrap justify-center m-4">
      <div className="w-[500px] mx-12">
        <img className="w-[100%]" src={Images} alt="" />
      </div>
      <div>
        <div className="mx-12 mt-4">
          <h2 className="uppercase font-bold text-3xl">
            Blue Box Fit Plaid Shirt
          </h2>
          <p>INR 1,799</p>
          <p>(incl. of all taxes)</p>
        </div>
        <hr className="my-3 mx-12" />
        <div className="mx-12">
          <p>SELECT A SIZE</p>
          {["XS", "S", "M", "L", "XL", "XXL"].map((size) => (
            <button
              key={size}
              className={`border border-black p-3 m-2 rounded-lg hover:text-white  
                ${
                  selectedSize === size
                    ? "bg-black text-white"
                    : "hover:text-white hover:bg-black"
                }`}
              onClick={() => handleSizeClick(size)}
            >
              {size}
            </button>
          ))}
        </div>
        <div className="flex flex-col my-3 mx-12">
          <button
            className={`border m-2 p-2 ${
              selectedSize ? "bg-black text-white" : "border-gray-300"
            }`}
          >
            {selectedSize ? "ADD TO BAG" : "SELECT A SIZE"}
          </button>
          <button className="border border-black m-2 p-2 text-red-600 flex flex-row justify-center items-center">
            <FaHeart className="text-black hover:text-red-600 mx-2" />
            Add to Wishlist
          </button>
        </div>
      </div>
    </div>
  );
}

export default CardDetails;
