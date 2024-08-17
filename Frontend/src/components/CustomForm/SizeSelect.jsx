import React from "react";

const SizeSelect = ({
  clothingType,
  gender,
  top,
  bottom,
  handleSizeSelect,
}) => (
  <div className="space-y-4">
    {(clothingType === "top" || clothingType === "both") && (
      <div>
        <p className="text-gray-600 font-semibold">Select a Top Size:</p>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white">
            <thead>
              <tr>
                <th className="px-0.5 py-2 border-b-2 border-gray-300 text-left text-xs leading-4 text-gray-800">
                  Size
                </th>
                {gender !== "boys" && gender !== "girls" && (
                  <th className="px-0.5 py-2 border-b-2 border-gray-300 text-left text-xs leading-4 text-gray-800">
                    Bust (in)
                  </th>
                )}
                {gender === "boys" || gender === "girls" ? (
                  <th className="px-0.5 py-2 border-b-2 border-gray-300 text-left text-xs leading-4 text-gray-800">
                    Chest (in)
                  </th>
                ) : null}
                <th className="px-0.5 py-2 border-b-2 border-gray-300 text-left text-xs leading-4 text-gray-800">
                  Front-Length (in)
                </th>
                {gender !== "men" && (
                  <>
                    <th className="px-0.5 py-2 border-b-2 border-gray-300 text-left text-xs leading-4 text-gray-800">
                      Sleeve-Length (in)
                    </th>
                    <th className="px-0.5 py-2 border-b-2 border-gray-300 text-left text-xs leading-4 text-gray-800">
                      Waist (in)
                    </th>
                  </>
                )}
                {gender !== "women" && (
                  <th className="px-0.5 py-2 border-b-2 border-gray-300 text-left text-xs leading-4 text-gray-800">
                    Across Shoulder (in)
                  </th>
                )}
                <th className="px-0.5 py-2 border-b-2 border-gray-300 text-left text-xs leading-4 text-gray-800">
                  Select
                </th>
              </tr>
            </thead>
            <tbody>
              {top.map((row, index) => (
                <tr key={index} className="hover:bg-gray-100">
                  <td className="px-0.5 py-2 border-b border-gray-300">
                    {row.size}
                  </td>
                  {gender !== "boys" && gender !== "girls" && (
                    <td className="px-0.5 py-2 border-b border-gray-300">
                      {row.bust || row.chest}
                    </td>
                  )}
                  {gender === "boys" || gender === "girls" ? (
                    <td className="px-0.5 py-2 border-b border-gray-300">
                      {row.chest}
                    </td>
                  ) : null}
                  <td className="px-0.5 py-2 border-b border-gray-300">
                    {row.frontlength}
                  </td>
                  {gender !== "men" && (
                    <>
                      <td className="px-0.5 py-2 border-b border-gray-300">
                        {row.sleevelength}
                      </td>
                      <td className="px-0.5 py-2 border-b border-gray-300">
                        {row.waist}
                      </td>
                    </>
                  )}
                  {gender !== "women" && (
                    <td className="px-0.5 py-2 border-b border-gray-300">
                      {row.acrossshoulder}
                    </td>
                  )}
                  <td className="px-0.5 py-2 border-b border-gray-300">
                    <input
                      type="radio"
                      name="topSize"
                      value={row.size}
                      onChange={() => handleSizeSelect("top", row.size)}
                    />
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
        <p className="text-gray-600 font-semibold">Select a Bottom Size:</p>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white">
            <thead>
              <tr>
                <th className="px-0.5 py-2 border-b-2 border-gray-300 text-left text-xs leading-4 text-gray-800">
                  Size
                </th>
                {gender !== "boys" && gender !== "girls" && (
                  <th className="px-0.5 py-2 border-b-2 border-gray-300 text-left text-xs leading-4 text-gray-800">
                    Waist (in)
                  </th>
                )}
                <th className="px-0.5 py-2 border-b-2 border-gray-300 text-left text-xs leading-4 text-gray-800">
                  Hip (in)
                </th>
                <th className="px-0.5 py-2 border-b-2 border-gray-300 text-left text-xs leading-4 text-gray-800">
                  Inseam (in)
                </th>
                <th className="px-0.5 py-2 border-b-2 border-gray-300 text-left text-xs leading-4 text-gray-800">
                  Outseam (in)
                </th>
                <th className="px-0.5 py-2 border-b-2 border-gray-300 text-left text-xs leading-4 text-gray-800">
                  Select
                </th>
              </tr>
            </thead>
            <tbody>
              {bottom.map((row, index) => (
                <tr key={index} className="hover:bg-gray-100">
                  <td className="px-0.5 py-2 border-b border-gray-300">
                    {row.size}
                  </td>
                  {gender !== "boys" && gender !== "girls" && (
                    <td className="px-0.5 py-2 border-b border-gray-300">
                      {row.waist}
                    </td>
                  )}
                  <td className="px-0.5 py-2 border-b border-gray-300">
                    {row.hip}
                  </td>
                  <td className="px-0.5 py-2 border-b border-gray-300">
                    {row.inseam}
                  </td>
                  <td className="px-0.5 py-2 border-b border-gray-300">
                    {row.outseam}
                  </td>
                  <td className="px-0.5 py-2 border-b border-gray-300">
                    <input
                      type="radio"
                      name="bottomSize"
                      value={row.size}
                      onChange={() => handleSizeSelect("bottom", row.size)}
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    )}
  </div>
);

export default SizeSelect;
