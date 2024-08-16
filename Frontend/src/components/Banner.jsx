import React, { useState, useEffect } from "react";
import "./Banner.css";
import img1 from "../assets/img.jpeg";
import img2 from "../assets/img1.jpeg";

const img = [
  "https://static3.azafashions.com/tr:w-1500/uploads/banner_templates/masaba-top-0819602001721982955.jpg",
  img1,
  img2,
];

function Banner() {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCounter((prevCounter) => (prevCounter + 1) % img.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const handleNext = () => {
    setCounter((counter + 1) % img.length);
  };

  const handlePrev = () => {
    setCounter((counter - 1 + img.length) % img.length);
  };

  return (
    <div className="relative flex h-[70vh] overflow-hidden items-center p-2 mb-5">
      <button
        className="absolute left-2 z-10 bg-gray-700 text-white p-2 rounded-full"
        onClick={handlePrev}
      >
        &lt;
      </button>
      <img
        src={img[counter]}
        className="w-full h-full object-cover"
        alt="Banner"
      />
      <button
        className="absolute right-2 z-10 bg-gray-700 text-white p-2 rounded-full"
        onClick={handleNext}
      >
        &gt;
      </button>

      <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {img.map((_, index) => (
          <div
            key={index}
            className={`w-3 h-3 rounded-full ${
              index === counter ? "bg-white" : "bg-gray-500"
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
}

export default Banner;
