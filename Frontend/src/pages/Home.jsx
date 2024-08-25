import React, { useEffect, useState } from "react";
import Item from "../components/item";
import Banner from "../components/Banner";
import CustomizationForm from "./Customization-Form";
import { FaSearch } from "react-icons/fa";

const Home = ({ customForm }) => {
  const [showForm, setShowForm] = useState(customForm);
  const [searchTerm, setSearchTerm] = useState("");
  const [search, setSearch] = useState("");

  useEffect(() => {
    const handleBeforeUnload = (event) => {
      if (customForm) {
        const confirmationMessage =
          "The form is already open. Refreshing will reset it. Do you want to continue?";
        event.returnValue = confirmationMessage;
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
          <div className="mb-8 flex justify-center">
            <input
              type="text"
              placeholder="Search for a designer..."
              value={searchTerm}
              onChange={(e) => {
                setSearchTerm(e.target.value);
              }}
              className="p-2 w-full md:w-1/2 lg:w-1/3 border border-black rounded-md bg-black/10  text-black "
            />
            <button
              onClick={(e) => {
                setSearch(searchTerm);
              }}
            >
              <FaSearch />
            </button>
          </div>
          <Banner />
          <Item searchItem={search} />
        </div>
      )}
    </div>
  );
};

export default Home;
