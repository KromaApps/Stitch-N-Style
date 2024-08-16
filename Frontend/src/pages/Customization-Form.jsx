import React from "react";

const womenTop = [
  {
    size: "XS",
    bust: "34.0",
    frontlength: "46.0",
    sleevelength: "17.0",
    waist: "32.0",
    hips: "36.0",
  },
  {
    size: "S",
    bust: "36.0",
    frontlength: "46.0",
    sleevelength: "17",
    waist: "34.0",
    hips: "38.0",
  },
  {
    size: "M",
    bust: "38.0",
    frontlength: "46.0",
    sleevelength: "17.0",
    waist: "36.0",
    hips: "40.0",
  },
  {
    size: "L",
    bust: "40.0",
    frontlength: "46.0",
    sleevelength: "17.0",
    waist: "38.0",
    hips: "42.0",
  },
  {
    size: "XL",
    bust: "42.0",
    frontlength: "46.0",
    sleevelength: "17.0",
    waist: "40.0",
    hips: "44.0",
  },
  {
    size: "XXL",
    bust: "44.0",
    frontlength: "46.0",
    sleevelength: "17.0",
    waist: "42.0",
    hips: "46.0",
  },
];
const WomenBottom = [
  {
    size: "26",
    brandsize: "XS",
    waist: "26.0",
    inseamlength: "28.5",
    outseamlength: "41.0",
  },
  {
    size: "28",
    brandsize: "S",
    waist: "28.0",
    inseamlength: "29.0",
    outseamlength: "41.0",
  },
  {
    size: "30",
    brandsize: "M",
    waist: "30.0",
    inseamlength: "29.5",
    outseamlength: "41.0",
  },
  {
    size: "32",
    brandsize: "L",
    waist: "32.0",
    inseamlength: "30.0",
    outseamlength: "41.0",
  },
  {
    size: "34",
    brandsize: "XL",
    waist: "34.0",
    inseamlength: "30.5",
    outseamlength: "41.0",
  },
  {
    size: "36",
    brandsize: "XS",
    waist: "36.0",
    inseamlength: "31.0",
    outseamlength: "41.0",
  },
];
const mensUpperWear = [
  {
    size: "39",
    chest: "41.3",
    frontlength: "30.1",
    acrossshoulder: "18.2",
  },
  {
    size: "40",
    chest: "42.5",
    frontlength: "30.3",
    acrossshoulder: "18.5",
  },
  {
    size: "42",
    chest: "44.9",
    frontlength: "30.7",
    acrossshoulder: "19.1",
  },
  {
    size: "44",
    chest: "47.2",
    frontlength: "31.1",
    acrossshoulder: "19.7",
  },
];
const mensBottom = [
  {
    size: "28",
    waist: "28.0",
    inseamlength: "30.0",
  },
  {
    size: "30",
    waist: "30.0",
    inseamlength: "30.0",
  },
  {
    size: "32",
    waist: "32.0",
    inseamlength: "30.0",
  },
  {
    size: "34",
    waist: "34.0",
    inseamlength: "30.0",
  },
  {
    size: "36",
    waist: "36.0",
    inseamlength: "30.0",
  },
];
const boysUpperWear = [
  {
    size: "8-9Y",
    chest: "27.0",
    frontlength: "22.0",
    acrossshoulder: "12.9",
  },
  {
    size: "9-10Y",
    chest: "28.5",
    frontlength: "23.0",
    acrossshoulder: "13.3",
  },
  {
    size: "11-12Y",
    chest: "30.0",
    frontlength: "24.0",
    acrossshoulder: "13.6",
  },
  {
    size: "13-14Y",
    chest: "32.0",
    frontlength: "25.0",
    acrossshoulder: "14.1",
  },
];
const boysBottom = [
  {
    size: "4-5Y",
    waist: "22.8",
    inseamlength: "14.0",
  },
  {
    size: "5-6Y",
    waist: "23.6",
    inseamlength: "15.5",
  },
  {
    size: "7-8Y",
    waist: "24.8",
    inseamlength: "17.0",
  },
];
const girlsTop = [
  {
    size: "4-5Y",
    chest: "25.0",
    frontlength: "15.0",
    waist: "23.0",
    acrossshoulder: "9.5",
  },
  {
    size: "6-7Y",
    chest: "27.0",
    frontlength: "16.0",
    waist: "25.0",
    acrossshoulder: "10.3",
  },
  {
    size: "7-8Y",
    chest: "29.0",
    frontlength: "17.0",
    waist: "27.0",
    acrossshoulder: "11.0",
  },
  {
    size: "9-10Y",
    chest: "31.0",
    frontlength: "18.0",
    waist: "29.0",
    acrossshoulder: "11.8",
  },
];
const girlsBottom = [
  {
    size: "4-5Y",
    waist: "18.0",
    inseamlength: "25.0",
  },
  {
    size: "5-6Y",
    waist: "19.0",
    inseamlength: "26.0",
  },
  {
    size: "6-7Y",
    waist: "20.0",
    inseamlength: "28.0",
  },
];

function CustomizationForm() {
  return (
    <div>
      <h1>
        We Believe that fashion should be as unique as you are. Our bespoke
        cloth customization services are designed to bring your vision to life,
        offering endless possibilities to personalize your wardrobe.
      </h1>
      <div>
        <p>Select: </p>
        <select>
          <option value="male">Men</option>
          <option value="female">Women</option>
          <option value="female">Girl</option>
          <option value="female">Boy</option>
        </select>
      </div>
      <div>
        <p>Select Occasion: </p>
        <select>
          <option value="wedding-wear">Wedding Wear</option>
          <option value="casual-wear">Casual Wear</option>
          <option value="office-wear">Office Wear</option>
          <option value="party-wear">Party Wear</option>
        </select>
      </div>
      <div>
        <h2 className="women-top">Size Chart:</h2>
        <table>
          <thead>
            <tr>
              <th></th>
              <th>Size</th>
              <th>Bust (in)</th>
              <th>Front-Length (in)</th>
              <th>Sleeve-Length (in)</th>
              <th>Waist (in)</th>
              <th>Hips (in)</th>
            </tr>
          </thead>
          <tbody>
            {womenTop.map((row, index) => (
              <tr>
                <td>
                  <input type="checkbox" />
                </td>
                <td>{row.size}</td>
                <td>{row.bust}</td>
                <td>{row.frontlength}</td>
                <td>{row.sleevelength}</td>
                <td>{row.waist}</td>
                <td>{row.hips}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <h2 className="women-bottom">Size Chart:</h2>
        <table>
          <thead>
            <tr>
              <th></th>
              <th>Size</th>
              <th>Brand-Size</th>
              <th>Waist(in)</th>
              <th>Inseam-Length (in)</th>
              <th>Outseam-Length (in)</th>
            </tr>
          </thead>
          <tbody>
            {WomenBottom.map((row, index) => (
              <tr>
                <td>
                  <input type="checkbox" />
                </td>
                <td>{row.size}</td>
                <td>{row.brandsize}</td>
                <td>{row.waist}</td>
                <td>{row.inseamlength}</td>
                <td>{row.outseamlength}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <h2 className="mens-upperwear">Size Chart:</h2>
        <table>
          <thead>
            <tr>
              <th></th>
              <th>Size</th>
              <th>Chest(in)</th>
              <th>Front-Length (in)</th>
              <th>Across Shoulder (in)</th>
            </tr>
          </thead>
          <tbody>
            {mensUpperWear.map((row, index) => (
              <tr>
                <td>
                  <input type="checkbox" />
                </td>
                <td>{row.size}</td>
                <td>{row.chest}</td>
                <td>{row.frontlength}</td>
                <td>{row.acrossshoulder}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <h2 className="mens-bottom">Size Chart:</h2>
        <table>
          <thead>
            <tr>
              <th></th>
              <th>Size</th>
              <th>Waist (in)</th>
              <th>Inseam-Length (in)</th>
            </tr>
          </thead>
          <tbody>
            {mensBottom.map((row, index) => (
              <tr>
                <td>
                  <input type="checkbox" />
                </td>
                <td>{row.size}</td>
                <td>{row.waist}</td>
                <td>{row.inseamlength}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <h2 className="boys-upperwear">Size Chart:</h2>
        <table>
          <thead>
            <tr>
              <th></th>
              <th>Size</th>
              <th>chest (in)</th>
              <th>Front-Length (in)</th>
              <th>Across Shoulder (in)</th>
            </tr>
          </thead>
          <tbody>
            {boysUpperWear.map((row, index) => (
              <tr>
                <td>
                  <input type="checkbox" />
                </td>
                <td>{row.size}</td>
                <td>{row.chest}</td>
                <td>{row.frontlength}</td>
                <td>{row.acrossshoulder}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <h2 className="boys-bottom">Size Chart:</h2>
        <table>
          <thead>
            <tr>
              <th></th>
              <th>Size</th>
              <th>Waist (in)</th>
              <th>Inseam-Length (in)</th>
            </tr>
          </thead>
          <tbody>
            {boysBottom.map((row, index) => (
              <tr>
                <td>
                  <input type="checkbox" />
                </td>
                <td>{row.size}</td>
                <td>{row.waist}</td>
                <td>{row.inseamlength}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <h2 className="girls-top">Size Chart:</h2>
        <table>
          <thead>
            <tr>
              <th></th>
              <th>Size</th>
              <th>Chest (in)</th>
              <th>Front-Length (in)</th>
              <th>Waist (in)</th>
              <th>Across Shoulder (in)</th>
            </tr>
          </thead>
          <tbody>
            {girlsTop.map((row, index) => (
              <tr>
                <td>
                  <input type="checkbox" />
                </td>
                <td>{row.size}</td>
                <td>{row.chest}</td>
                <td>{row.frontlength}</td>
                <td>{row.waist}</td>
                <td>{row.acrossshoulder}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <h2 className="girls-bottom">Size Chart:</h2>
        <table>
          <thead>
            <tr>
              <th></th>
              <th>Size</th>
              <th>Waist (in)</th>
              <th>Inseam-Length (in)</th>
            </tr>
          </thead>
          <tbody>
            {girlsBottom.map((row, index) => (
              <tr>
                <td>
                  <input type="checkbox" />
                </td>
                <td>{row.size}</td>
                <td>{row.bust}</td>
                <td>{row.frontlength}</td>
                <td>{row.sleevelength}</td>
                <td>{row.waist}</td>
                <td>{row.hips}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default CustomizationForm;
