import React, { useState } from "react";

const SearchComponent = () => {
  const [searchValue, setSearchValue] = useState("");

  const handleInputChange = (e) => {
    setSearchValue(e.target.value);
  };

  return (
    <div className="mt-[3rem]">
      <form>
        <input
          className="w-[250px] py-[.5rem] px-[1rem] outline-none border rounded-tl-md rounded-bl-md text-slate-700 bg-slate-400 font-medium placeholder:text-sky-50"
          type="text"
          placeholder="Search.."
          value={searchValue}
          onChange={handleInputChange}
        ></input>
        <button className="px-[1rem] py-[.5rem] border rounded-tr-md rounded-br-md hover:bg-slate-700 font-medium active:scale-[.98] transition-all ">
          Search
        </button>
      </form>
    </div>
  );
};

export default SearchComponent;
