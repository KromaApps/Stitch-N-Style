import React, { useState, useEffect } from "react";
import sizeCharts from "../services/sizeapi";
import Back from "../components/CustomForm/Back";
import ClothingTypeChange from "../components/CustomForm/ClothingTypeChange";
import GenderChange from "../components/CustomForm/GenderChange";
import OccasionChange from "../components/CustomForm/OccasionChange";
import Reset from "../components/CustomForm/Reset";
import SizeSelect from "../components/CustomForm/SizeSelect";
import FabricTypeChange from "../components/CustomForm/FabricTypeChange";
import BudgetInput from "../components/CustomForm/BudgetInput";
import NoteAndFileUpload from "../components/CustomForm/NoteAndFileUpload";
import Next from "../components/CustomForm/Next";
import Review from "../components/CustomForm/Review";

const CustomizationForm = () => {
  const [step, setStep] = useState(0);
  const [gender, setGender] = useState("");
  const [clothingType, setClothingType] = useState("");
  const [occasion, setOccasion] = useState("");
  const [selectedSize, setSelectedSize] = useState({ top: "", bottom: "" });
  const [fabricType, setFabricType] = useState("");
  const [budget, setBudget] = useState("");
  const [note, setNote] = useState("");
  const [file, setFile] = useState(null);

  const handleGenderChange = (event) => setGender(event.target.value);
  const handleClothingTypeChange = (event) =>
    setClothingType(event.target.value);
  const handleOccasionChange = (event) => setOccasion(event.target.value);

  const handleSizeSelect = (type, size) => {
    console.log(`Selected Size Type: ${type}, Size: ${size}`); // checking the selected sizes
    setSelectedSize((prev) => ({
      ...prev,
      [type]: size,
    }));
  };

  // checking size changes
  useEffect(() => {
    console.log("Updated Selected Size:", selectedSize);
  }, [selectedSize]);

  const handleNext = () => {
    if (step === 0 && !gender) {
      alert("Please select a gender.");
    } else if (step === 1 && !clothingType) {
      alert("Please select a clothing type.");
    } else if (step === 2 && !occasion) {
      alert("Please select an occasion.");
    } else if (step === 3) {
      if (clothingType === "top" && !selectedSize.top) {
        alert("Please select a top size.");
      } else if (clothingType === "bottom" && !selectedSize.bottom) {
        alert("Please select a bottom size.");
      } else if (clothingType === "both") {
        if (!selectedSize.top || !selectedSize.bottom) {
          alert("Please select both top and bottom sizes.");
        } else {
          setStep((prevStep) => prevStep + 1);
        }
      } else {
        setStep((prevStep) => prevStep + 1);
      }
    } else if (step === 4 && !fabricType) {
      alert("Please select a fabric type.");
    } else if (step === 5 && !budget) {
      alert("Please enter your budget.");
    } else if (step === 6 && !note) {
      alert("Please add a note.");
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
    setFabricType("");
    setBudget("");
    setNote("");
    setFile(null);
  };

  const handleFabricTypeChange = (event) => setFabricType(event.target.value);
  const handleBudgetChange = (event) => setBudget(event.target.value);
  const handleNoteChange = (event) => setNote(event.target.value);
  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    setFile(selectedFile);
  };

  // Size Data
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
    <div className="min-h-screen bg-gray-50 flex items-center justify-center py-8 px-4">
      <div className="w-full max-w-lg bg-white shadow-lg rounded-xl p-6 overflow-hidden">
        <h1 className="text-2xl font-semibold text-gray-800 mb-6 text-center">
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
              selectedSize={selectedSize}
            />
          )}
          {step === 4 && (
            <FabricTypeChange
              fabricType={fabricType}
              handleFabricTypeChange={handleFabricTypeChange}
            />
          )}
          {step === 5 && (
            <BudgetInput
              budget={budget}
              handleBudgetChange={handleBudgetChange}
            />
          )}
          {step === 6 && (
            <NoteAndFileUpload
              note={note}
              file={file}
              handleNoteChange={handleNoteChange}
              handleFileChange={handleFileChange}
            />
          )}
          {step === 7 && (
            <Review
              gender={gender}
              clothingType={clothingType}
              occasion={occasion}
              selectedSize={selectedSize}
            />
          )}
        </div>

        <div className="mt-8 flex items-center justify-between">
          {step === 0 ? (
            <div className="flex-grow text-right">
              <Next handleNext={handleNext} />
            </div>
          ) : (
            <>
              <div className="flex-grow text-left">
                {step > 0 && <Back handleBack={handleBack} />}
              </div>
              <div className="flex-grow text-center">
                <Reset handleReset={handleReset} />
              </div>
              <div className="flex-grow text-right">
                {step < 7 && <Next handleNext={handleNext} />}
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default CustomizationForm;
