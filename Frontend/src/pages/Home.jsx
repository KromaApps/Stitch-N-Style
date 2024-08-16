import React from "react";
import Item from "../components/item";
import Banner from "../components/Banner";
import CustomizationForm from "./Customization-Form";

const Home = ({ customForm }) => {
  return (
    <div className="container mx-auto p-4">
      {customForm ? (
        <div className="bg-white  rounded-lg shadow-lg">
          <CustomizationForm />
        </div>
      ) : (
        <div className="bg-white  rounded-lg shadow-lg">
          <Banner />
          <Item />
        </div>
      )}
    </div>
  );
};

export default Home;
