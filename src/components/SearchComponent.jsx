// States
import { useState } from "react";
// Import useFetch
import UseFetch from "../components/UseFetch";

const SearchComponent = () => {
  const [searchValue, setSearchValue] = useState("");

  const handleInputChange = (e) => {
    setSearchValue(e.target.value);
  };

  // console.log(searchValue);

  const handleButtonSearch = () => {
    setSearchValue("");
  };

  return (
    <div className="mt-[3rem] flex">
      <div className="relative">
        <input
          className=" w-[450px] py-[.5rem] px-[1rem] outline-none border rounded-tl-md rounded-bl-md text-slate-700 bg-slate-400 font-medium placeholder:text-slate-500"
          type="search"
          placeholder="Search.."
          value={searchValue}
          onChange={handleInputChange}
        ></input>
      </div>
      <div className="absolute right-0 ">
        <select className="text-black">
          <option>Orientation</option>
        </select>
        <select className="text-black">
          <option>Color</option>
        </select>
      </div>

      <button
        onClick={handleButtonSearch}
        className="px-[1rem] py-[.5rem] border rounded-tr-md rounded-br-md hover:bg-slate-700 font-medium active:scale-[.98] transition-all justify-items-center "
      >
        Search
      </button>
    </div>
  );
};

export default SearchComponent;
