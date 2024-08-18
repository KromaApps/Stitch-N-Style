import React from "react";
import Item from "../components/item";
import Banner from "../components/Banner";
import { Link } from "react-router-dom";
import designers from "../data/designersData";

const Home = () => {
  const featuredDesigners = designers.slice(0, 3);

  return (
    <div className="bg-black/80">
      <Banner />

      <div className="p-6">
        <h2 className="text-3xl font-extrabold text-white mb-8 text-center">
          Featured Designers
        </h2>
        <div className="flex flex-wrap justify-center gap-6 mb-8">
          {featuredDesigners.map((designer) => (
            <Link
              key={designer.id}
              to={`/designers/${designer.id}`}
              className="bg-gray-800 text-white p-6 rounded-lg shadow-lg hover:bg-gray-700 transform hover:scale-105 transition-transform duration-300 ease-in-out"
            >
              <div className="flex flex-col items-center">
                <img
                  src={designer.image}
                  alt={designer.name}
                  className="w-20 h-20 rounded-full mb-4 object-cover"
                />
                <span className="text-xl font-semibold">{designer.name}</span>
              </div>
            </Link>
          ))}
        </div>
        <div className="flex justify-center mb-8">
          <Link
            to="/designers"
            className="text-white bg-gradient-to-r from-gray-600 to-gray-800 hover:from-gray-500 hover:to-gray-700 py-2 px-6 rounded-full shadow-md transition-colors duration-300 ease-in-out"
          >
            See More Designers
          </Link>
        </div>
      </div>

      <Item />
    </div>
  );
};

export default Home;
