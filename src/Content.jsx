import React from "react";

function Content({ setSearchCity, searchCity, HandleSearch, handleonkeydown }) {
  return (
    <>
      <div className="text-white text-5xl mb-15 font-bold text-center">
        How's the sky looking today?
      </div>

      <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 px-4">
        <div className="relative flex-1 min-w-[250px] max-w-[600px]">
          <img
            src="/images/icon-search.svg"
            alt="searchicon"
            className="absolute top-1/2 left-3 transform -translate-y-1/2 w-4 h-4"
          />
          <input
            type="text"
            placeholder="Search for a place..."
            value={searchCity}
            onChange={(e) => setSearchCity(e.target.value)}
            onKeyDown={handleonkeydown}
            className="w-full text-white bg-[#3A3550] outline-none h-10 pl-10 pr-4 rounded-lg"
          />
        </div>

        <button
          type="submit"
          onClick={HandleSearch}
          className="bg-[#4753F0] flex items-center h-10 px-5 rounded-lg text-white cursor-pointer "
        >
          Search
        </button>
      </div>
    </>
  );
}

export default Content;
