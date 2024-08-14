import React, { useState } from "react";
import Item from "../components/item";
import Banner from "../components/Banner";
import CustomizationForm from "./Customization-Form";

const Home = () => {
  const [customForm, setCustomForm] = useState(false);
  return (
    <div>
      <div className="flex justify-evenly bg-red-500">
        <button onClick={() => setCustomForm(false)} className="bg-white">
          maria readymade aur designers cloth k liye naam bata
        </button>
        <button onClick={() => setCustomForm(true)} className="bg-white">
          maria custom form k liye naam bata
        </button>
      </div>
      {customForm && (
        <div>
          <CustomizationForm />
        </div>
      )}
      {!customForm && (
        <div className="bg-black/80 ">
          <Banner />
          <Item />
        </div>
      )}
    </div>
  );
};

export default Home;
