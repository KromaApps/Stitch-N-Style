import React, { useState } from "react";
import "./Banner.css";
import img1 from "../assets/img.jpeg";
import img2 from "../assets/img1.jpeg";

const img = [
  "https://static3.azafashions.com/tr:w-1500/uploads/banner_templates/masaba-top-0819602001721982955.jpg",
  img1,
  img2,
];

function Banner() {
  const [counter, setCounter] = useState(1);
  return (
    <>
      <div className="flex  h-[70vh] overflow-hidden relative items-center p-2 mb-5">
        <button
          className="pre-btn"
          onClick={() => setCounter((i) => (i - 1 + img.length) % img.length)}
        >
          <p>&lt;</p>
        </button>

        <button
          className="next-btn"
          onClick={() => setCounter((i) => (i + 1) % img.length)}
        >
          <p>&gt;</p>
        </button>

        <img src={img[counter]} className="w-screen h-[500px]" />
      </div>
    </>
  );
}

export default Banner;
