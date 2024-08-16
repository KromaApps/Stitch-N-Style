import React, { useState } from "react";
import sizeCharts from "../services/sizeapi";

function CustomizationChat() {
  const [step, setStep] = useState(0);
  const [gender, setGender] = useState("");
  const [occasion, setOccasion] = useState("");
  const [clothingType, setClothingType] = useState("");
  const [selectedSizes, setSelectedSizes] = useState({ top: "", bottom: "" });

  const handleGenderChange = (e) => {
    setGender(e.target.value);
    setStep(step + 1);
  };

  const handleOccasionChange = (e) => {
    setOccasion(e.target.value);
    setStep(step + 1);
  };

  const handleClothingTypeChange = (e) => {
    setClothingType(e.target.value);
    setStep(step + 1);
  };

  const handleSizeSelect = (type, size) => {
    setSelectedSizes((prevSizes) => ({
      ...prevSizes,
      [type]: size,
    }));
  };

  const handleBack = () => {
    if (step > 0) {
      setStep(step - 1);
    }
  };

  const handleReset = () => {
    setStep(0);
    setGender("");
    setOccasion("");
    setClothingType("");
    setSelectedSizes({ top: "", bottom: "" });
  };

  const getSizeChartData = () => {
    switch (gender) {
      case "men":
        return {
          top: sizeCharts.men.mensUpperWear,
          bottom: sizeCharts.men.mensBottom,
        };
      case "women":
        return {
          top: sizeCharts.women.womenTop,
          bottom: sizeCharts.women.WomenBottom,
        };
      case "boys":
        return {
          top: sizeCharts.boys.boysUpperWear,
          bottom: sizeCharts.boys.boysBottom,
        };
      case "girls":
        return {
          top: sizeCharts.girls.girlsTop,
          bottom: sizeCharts.girls.girlsBottom,
        };
      default:
        return { top: [], bottom: [] };
    }
  };

  const { top, bottom } = getSizeChartData();

  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center p-4">
      <div className="bg-white w-full max-w-lg p-6 rounded-lg shadow-md">
        <div className="flex justify-between mb-4">
          <button
            className="px-4 py-2 bg-gray-300 text-gray-800 rounded-md"
            onClick={handleBack}
            disabled={step === 0}
          >
            Back
          </button>
          <button
            className="px-4 py-2 bg-red-500 text-white rounded-md"
            onClick={handleReset}
          >
            Reset
          </button>
        </div>
        <div className="space-y-4">
          <div className="text-center">
            <p className="text-lg font-semibold text-gray-700">
              Welcome to the Fashion Customization Chat!
            </p>
          </div>
          {step === 0 && (
            <div className="space-y-2">
              <p className="text-gray-600">Hi there! Who is this for?</p>
              <select
                value={gender}
                onChange={handleGenderChange}
                className="w-full px-3 py-2 border rounded-md"
              >
                <option value="">Select Gender</option>
                <option value="men">Men</option>
                <option value="women">Women</option>
                <option value="girls">Girls</option>
                <option value="boys">Boys</option>
              </select>
            </div>
          )}

          {step === 1 && (
            <div className="space-y-2">
              <p className="text-gray-600">Great! What's the occasion?</p>
              <select
                value={occasion}
                onChange={handleOccasionChange}
                className="w-full px-3 py-2 border rounded-md"
              >
                <option value="">Select Occasion</option>
                <option value="wedding-wear">Wedding Wear</option>
                <option value="casual-wear">Casual Wear</option>
                <option value="office-wear">Office Wear</option>
                <option value="party-wear">Party Wear</option>
              </select>
            </div>
          )}

          {step === 2 && (
            <div className="space-y-2">
              <p className="text-gray-600">
                What type of clothing are you looking for?
              </p>
              <select
                value={clothingType}
                onChange={handleClothingTypeChange}
                className="w-full px-3 py-2 border rounded-md"
              >
                <option value="">Select Clothing Type</option>
                <option value="both">Both</option>
                <option value="top">Top</option>
                <option value="bottom">Bottom</option>
              </select>
            </div>
          )}

          {step === 3 && clothingType && (
            <div className="space-y-4">
              {(clothingType === "top" || clothingType === "both") && (
                <div>
                  <p className="text-gray-600 font-semibold">
                    Select a Top Size:
                  </p>
                  <div className="overflow-x-auto">
                    <table className="min-w-full bg-white">
                      <thead>
                        <tr>
                          <th className="px-4 py-2 border-b-2 border-gray-300 text-left text-xs leading-4 text-gray-800">
                            Size
                          </th>
                          {gender !== "boys" && gender !== "girls" && (
                            <th className="px-4 py-2 border-b-2 border-gray-300 text-left text-xs leading-4 text-gray-800">
                              Bust (in)
                            </th>
                          )}
                          {gender === "boys" || gender === "girls" ? (
                            <th className="px-4 py-2 border-b-2 border-gray-300 text-left text-xs leading-4 text-gray-800">
                              Chest (in)
                            </th>
                          ) : null}
                          <th className="px-4 py-2 border-b-2 border-gray-300 text-left text-xs leading-4 text-gray-800">
                            Front-Length (in)
                          </th>
                          {gender !== "men" && (
                            <>
                              <th className="px-4 py-2 border-b-2 border-gray-300 text-left text-xs leading-4 text-gray-800">
                                Sleeve-Length (in)
                              </th>
                              <th className="px-4 py-2 border-b-2 border-gray-300 text-left text-xs leading-4 text-gray-800">
                                Waist (in)
                              </th>
                              {gender === "women" && (
                                <th className="px-4 py-2 border-b-2 border-gray-300 text-left text-xs leading-4 text-gray-800">
                                  Hips (in)
                                </th>
                              )}
                            </>
                          )}
                          {gender !== "women" && (
                            <th className="px-4 py-2 border-b-2 border-gray-300 text-left text-xs leading-4 text-gray-800">
                              Across Shoulder (in)
                            </th>
                          )}
                          <th className="px-4 py-2 border-b-2 border-gray-300 text-left text-xs leading-4 text-gray-800">
                            Select
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {top.map((row, index) => (
                          <tr key={index} className="hover:bg-gray-100">
                            <td className="px-4 py-2 border-b border-gray-300">
                              {row.size}
                            </td>
                            {gender !== "boys" && gender !== "girls" && (
                              <td className="px-4 py-2 border-b border-gray-300">
                                {row.bust || row.chest}
                              </td>
                            )}
                            {gender === "boys" || gender === "girls" ? (
                              <td className="px-4 py-2 border-b border-gray-300">
                                {row.chest}
                              </td>
                            ) : null}
                            <td className="px-4 py-2 border-b border-gray-300">
                              {row.frontlength}
                            </td>
                            {gender !== "men" && (
                              <>
                                <td className="px-4 py-2 border-b border-gray-300">
                                  {row.sleevelength}
                                </td>
                                <td className="px-4 py-2 border-b border-gray-300">
                                  {row.waist}
                                </td>
                                {gender === "women" && (
                                  <td className="px-4 py-2 border-b border-gray-300">
                                    {row.hips}
                                  </td>
                                )}
                              </>
                            )}
                            {gender !== "women" && (
                              <td className="px-4 py-2 border-b border-gray-300">
                                {row.acrossshoulder}
                              </td>
                            )}
                            <td className="px-4 py-2 border-b border-gray-300">
                              <button
                                className={`px-2 py-1 rounded-md ${
                                  selectedSizes.top === row.size
                                    ? "bg-blue-500 text-white"
                                    : "bg-gray-300 text-gray-800"
                                }`}
                                onClick={() =>
                                  handleSizeSelect("top", row.size)
                                }
                              >
                                Select
                              </button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              )}

              {(clothingType === "bottom" || clothingType === "both") && (
                <div>
                  <p className="text-gray-600 font-semibold">
                    Select a Bottom Size:
                  </p>
                  <div className="overflow-x-auto">
                    <table className="min-w-full bg-white">
                      <thead>
                        <tr>
                          <th className="px-4 py-2 border-b-2 border-gray-300 text-left text-xs leading-4 text-gray-800">
                            Size
                          </th>
                          <th className="px-4 py-2 border-b-2 border-gray-300 text-left text-xs leading-4 text-gray-800">
                            Waist (in)
                          </th>
                          <th className="px-4 py-2 border-b-2 border-gray-300 text-left text-xs leading-4 text-gray-800">
                            Inseam (in)
                          </th>
                          <th className="px-4 py-2 border-b-2 border-gray-300 text-left text-xs leading-4 text-gray-800">
                            Select
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {bottom.map((row, index) => (
                          <tr key={index} className="hover:bg-gray-100">
                            <td className="px-4 py-2 border-b border-gray-300">
                              {row.size}
                            </td>
                            <td className="px-4 py-2 border-b border-gray-300">
                              {row.waist}
                            </td>
                            <td className="px-4 py-2 border-b border-gray-300">
                              {row.inseamlength}
                            </td>
                            <td className="px-4 py-2 border-b border-gray-300">
                              <button
                                className={`px-2 py-1 rounded-md ${
                                  selectedSizes.bottom === row.size
                                    ? "bg-blue-500 text-white"
                                    : "bg-gray-300 text-gray-800"
                                }`}
                                onClick={() =>
                                  handleSizeSelect("bottom", row.size)
                                }
                              >
                                Select
                              </button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              )}
            </div>
          )}

          {step === 4 && (
            <div className="space-y-2">
              <p className="text-gray-600">
                Thank you! Here's a summary of your selections:
              </p>
              <ul className="list-disc list-inside">
                <li>
                  <strong>Gender:</strong> {gender}
                </li>
                <li>
                  <strong>Occasion:</strong> {occasion}
                </li>
                <li>
                  <strong>Clothing Type:</strong> {clothingType}
                </li>
                <li>
                  <strong>Top Size:</strong> {selectedSizes.top}
                </li>
                <li>
                  <strong>Bottom Size:</strong> {selectedSizes.bottom}
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default CustomizationChat;
