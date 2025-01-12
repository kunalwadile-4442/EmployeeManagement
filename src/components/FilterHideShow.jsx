import React from "react";
import { FaFilter } from "react-icons/fa";

const FilterToggle = ({ showFilters, setShowFilters }) => {
  return (
    <div className="flex items-center filter-button mb-1">
      <button
        className="flex items-center px-2 hover:bg-[#fcf2fe] border py-2 rounded ml-auto"
        onClick={() => setShowFilters(!showFilters)}
      >
        <FaFilter />
      </button>     
    </div>
  );
};

export default FilterToggle;
