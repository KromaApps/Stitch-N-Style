import React from "react";

const Review = ({
  gender,
  clothingType,
  occasion,
  selectedSize,
  fabricType,
  budget,
  note,
  file,
}) => {
  return (
    <div>
      <h2 className="text-xl font-semibold text-gray-800 mb-4">
        Review Your Selections
      </h2>
      <div className="mb-4">
        <p>
          <strong>Gender:</strong> {gender}
        </p>
        <p>
          <strong>Clothing Type:</strong> {clothingType}
        </p>
        <p>
          <strong>Occasion:</strong> {occasion}
        </p>
        <p>
          <strong>Top Size:</strong> {selectedSize.top}
        </p>
        <p>
          <strong>Bottom Size:</strong> {selectedSize.bottom}
        </p>
        <p>
          <strong>Fabric Type:</strong> {fabricType}
        </p>
        <p>
          <strong>Budget:</strong> ${budget}
        </p>
        <p>
          <strong>Note:</strong> {note}
        </p>
        {file && (
          <p>
            <strong>Uploaded File:</strong> {file.name}
          </p>
        )}
      </div>
    </div>
  );
};

export default Review;
