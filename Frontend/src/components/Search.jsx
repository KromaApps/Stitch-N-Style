import React from "react";
import { FaSearch } from "react-icons/fa";

function Search() {
  return (
    <div>
      <div>
        <input type="text" placeholder="Search Here...." />
        <button>
          <FaSearch />
        </button>
      </div>
    </div>
  );
}

export default Search;
