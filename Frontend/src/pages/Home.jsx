import React, { useEffect, useState } from "react";
import Item from "../components/item";
import Banner from "../components/Banner";
import CustomizationForm from "./Customization-Form";

const Home = ({ customForm }) => {
  const [showForm, setShowForm] = useState(customForm);

  useEffect(() => {
    const handleBeforeUnload = (event) => {
      if (customForm) {
        const confirmationMessage =
          "The form is already open. Refreshing will reset it. Do you want to continue?";
        event.returnValue = confirmationMessage;
        s;
        return confirmationMessage;
      }
    };

    window.addEventListener("beforeunload", handleBeforeUnload);

    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, [customForm]);

  useEffect(() => {
    setShowForm(customForm);
  }, [customForm]);

  return (
    <div className="container mx-auto z-[-1] p-4">
      {showForm ? (
        <div className="bg-white rounded-lg shadow-lg">
          <CustomizationForm />
        </div>
      ) : (
        <div className=" bg-white rounded-lg shadow-lg">
          <Banner />
          <Item />
        </div>
      )}
    </div>
  );
};

export default Home;
