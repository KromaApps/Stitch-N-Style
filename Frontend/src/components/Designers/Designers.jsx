import React, { useState } from "react";
import { Link } from "react-router-dom";
import designers from "../../data/designersData"; // Import the designer data

const Designers = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredDesigners = designers.filter((designer) =>
    designer.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="bg-gray-900 text-white min-h-screen p-8">
      <div className="container mx-auto">
        <h2 className="text-3xl font-extrabold text-center mb-12">
          Meet Our Designers
        </h2>

        {/* Search Bar */}
        <div className="mb-8 flex justify-center">
          <input
            type="text"
            placeholder="Search for a designer..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="p-2 w-full md:w-1/2 lg:w-1/3 border rounded-md bg-gray-800 text-white placeholder-gray-400"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredDesigners.map((designer) => (
            <div
              key={designer.id}
              className="bg-gray-800 p-6 rounded-lg shadow-lg text-center"
            >
              <img
                src={designer.image}
                alt={designer.name}
                className="w-32 h-32 mx-auto rounded-full object-cover mb-4 border-4 border-gray-700"
              />
              <h3 className="text-xl font-semibold mb-4">{designer.name}</h3>
              <Link
                to={`/designers/${designer.id}`}
                className="text-green-500 hover:text-green-400"
              >
                View Profile
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Designers;
