import React, { useState, useEffect } from "react";
import Item from "../components/item";
import Banner from "../components/Banner";
import CustomizationForm from "./Customization-Form";

const Home = () => {
  const [customForm, setCustomForm] = useState(() => {
    const savedState = localStorage.getItem("customForm");
    return savedState === "true";
  });

  useEffect(() => {
    localStorage.setItem("customForm", customForm);
  }, [customForm]);

  useEffect(() => {
    const savedState = localStorage.getItem("customForm");
    if (savedState === "true") {
      alert("The customization form will be reset after refreshing the page.");
    }
  }, []);

  return (
    <div>
      <div className="flex justify-evenly bg-red-500">
        <button onClick={() => setCustomForm(false)} className="bg-white">
          Ready-fit
        </button>
        <button onClick={() => setCustomForm(true)} className="bg-white">
          Design Yours
        </button>
      </div>
      {customForm && (
        <div>
          <CustomizationForm />
        </div>
      )}
      {!customForm && (
        <div className="bg-white ">
          <Banner />
          <Item />
        </div>
      )}
    </div>
  );
};

export default Home;
