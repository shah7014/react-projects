import React, { useRef } from "react";

const MealSearch = ({ onSearchTermChange }) => {
  const searchRef = useRef();

  const handleSubmit = (event) => {
    event.preventDefault();
    onSearchTermChange(searchRef.current.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="max-w-[1280px] mx-auto px-10 py-8 flex space-x-4">
        <input
          placeholder="type favorite meal"
          className="px-3 py-1 rounded-md max-w-[200px] border border-gray-200 text-black bg-zinc-100"
          ref={searchRef}
        />
        <button
          className="px-3 py-2 text-xs text-white bg-indigo-500 rounded-md"
          type="submit"
        >
          Search
        </button>
        <button className="px-3 py-2 text-xs text-indigo-500 bg-indigo-100 rounded-md hover:bg-black hover:text-white">
          Surprise Me !
        </button>
      </div>
    </form>
  );
};

export default MealSearch;
