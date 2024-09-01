import React, { useState, useEffect } from "react";
import sizeCharts from "../services/sizeapi";
import Back from "../components/CustomForm/Back";
import ClothingTypeChange from "../components/CustomForm/ClothingTypeChange";
import GenderChange from "../components/CustomForm/GenderChange";
import OccasionChange from "../components/CustomForm/OccasionChange";
import Reset from "../components/CustomForm/Reset";
import SizeSelect from "../components/CustomForm/SizeSelect";
import Next from "../components/CustomForm/Next";
import Review from "../components/CustomForm/Review";

const CustomizationForm = () => {
  const [step, setStep] = useState(0);
  const [gender, setGender] = useState("");
  const [clothingType, setClothingType] = useState("");
  const [occasion, setOccasion] = useState("");
  const [selectedSize, setSelectedSize] = useState({ top: "", bottom: "" });

  const handleGenderChange = (event) => setGender(event.target.value);
  const handleClothingTypeChange = (event) =>
    setClothingType(event.target.value);
  const handleOccasionChange = (event) => setOccasion(event.target.value);
  const handleSizeSelect = (type, size) => {
    console.log(`Size selected: ${type} - ${size}`); // Debug log
    setSelectedSize((prev) => ({
      ...prev,
      [type]: size,
    }));
  };

  // In CustomizationForm
  useEffect(() => {
    console.log("Updated Selected Size:", selectedSize);
  }, [selectedSize]);

  const handleNext = () => {
    console.log("Selected size (top):", selectedSize.top);
    console.log("Selected size (bottom):", selectedSize.bottom);

    if (step === 0 && !gender) {
      alert("Please select a gender.");
    } else if (step === 1 && !clothingType) {
      alert("Please select a clothing type.");
    } else if (step === 2 && !occasion) {
      alert("Please select an occasion.");
    } else if (step === 3) {
      if (clothingType.includes("top") && !selectedSize.top) {
        alert("Please select a top size.");
      } else if (clothingType.includes("bottom") && !selectedSize.bottom) {
        alert("Please select a bottom size.");
      } else {
        setStep((prevStep) => prevStep + 1);
      }
    } else {
      setStep((prevStep) => prevStep + 1);
    }
  };

  const handleBack = () => setStep((prevStep) => prevStep - 1);
  const handleReset = () => {
    setStep(0);
    setGender("");
    setClothingType("");
    setOccasion("");
    setSelectedSize({ top: "", bottom: "" });
  };

  const getTopSizeData = () => {
    if (gender === "women") return sizeCharts.women.womenTop;
    if (gender === "men") return sizeCharts.men.mensUpperWear;
    if (gender === "boys") return sizeCharts.boys.boysUpperWear;
    if (gender === "girls") return sizeCharts.girls.girlsTop;
    return [];
  };

  const getBottomSizeData = () => {
    if (gender === "women") return sizeCharts.women.WomenBottom;
    if (gender === "men") return sizeCharts.men.mensBottom;
    if (gender === "boys") return sizeCharts.boys.boysBottom;
    if (gender === "girls") return sizeCharts.girls.girlsBottom;
    return [];
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center py-6 px-4">
      <div className="w-full max-w-lg bg-white shadow-md rounded-lg p-6">
        <h1 className="text-2xl font-bold text-gray-800 mb-4 text-center">
          Customize Your Apparel
        </h1>
        <div className="form-steps">
          {step === 0 && (
            <GenderChange
              gender={gender}
              handleGenderChange={handleGenderChange}
            />
          )}
          {step === 1 && (
            <ClothingTypeChange
              clothingType={clothingType}
              handleClothingTypeChange={handleClothingTypeChange}
            />
          )}
          {step === 2 && (
            <OccasionChange
              occasion={occasion}
              handleOccasionChange={handleOccasionChange}
            />
          )}
          {step === 3 && (
            <SizeSelect
              clothingType={clothingType}
              gender={gender}
              top={getTopSizeData()}
              bottom={getBottomSizeData()}
              handleSizeSelect={handleSizeSelect}
              selectedSize={selectedSize} // Make sure this is passed
            />
          )}
          {step === 4 && (
            <Review
              gender={gender}
              clothingType={clothingType}
              occasion={occasion}
              selectedSize={selectedSize}
            />
          )}
        </div>

        <div className="mt-6 flex items-center justify-between">
          {step === 0 ? (
            <div className="flex-grow text-right">
              <Next handleNext={handleNext} />
            </div>
          ) : (
            <>
              {step > 0 && (
                <div className="flex-grow text-left">
                  <Back handleBack={handleBack} />
                </div>
              )}
              <div className="flex-grow text-center">
                <Reset handleReset={handleReset} />
              </div>
              <div className="flex-grow text-right">
                {step < 4 && <Next handleNext={handleNext} />}
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default CustomizationForm;
