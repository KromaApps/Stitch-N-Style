import React from "react";

const Review = ({ gender, clothingType, occasion, selectedSize }) => {
  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Review Your Selections</h2>
      <div className="mb-4">
        <p className="font-semibold">Gender:</p>
        <p>{gender}</p>
      </div>
      <div className="mb-4">
        <p className="font-semibold">Clothing Type:</p>
        <p>{clothingType}</p>
      </div>
      <div className="mb-4">
        <p className="font-semibold">Occasion:</p>
        <p>{occasion}</p>
      </div>
      <div className="mb-4">
        <p className="font-semibold">Selected Size:</p>
        <p>Top: {selectedSize.top || "Not selected"}</p>
        <p>Bottom: {selectedSize.bottom || "Not selected"}</p>
      </div>
      <div className="text-center">
        <p className="text-gray-600">
          If everything looks correct, click 'Next' to proceed.
        </p>
      </div>
    </div>
  );
};

export default Review;
