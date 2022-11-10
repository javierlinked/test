// States
import { useState, useEffect } from "react";
// Import useFetch
import UseFetch from "../components/UseFetch";

const colorOptions = ["red", "blue", "green"];
const orientationOptions = ["portrait", "landscape", "squarish"];
const mockImageLink =
  "https://images.unsplash.com/photo-1640509717176-5bfe48c626e2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNzkzOTN8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NjgwMjY3NDY&ixlib=rb-4.0.3&q=80&w=200";
const apiRoot = "https://api.unsplash.com/";
const accessKey = "s9rQFfC38sp0xQJQiK4DOs-tAifpX2FEJL8BGaZQgXI";
// const accessKey = process.env.REACT_APP_ACCESS_KEY;

const baseUri = `${apiRoot}/photos/random?count=1`;

const SearchComponent = () => {
  const [searchValue, setSearchValue] = useState("");

  const [color, setColor] = useState("blue");
  const [orientation, setOrientation] = useState("squarish");

  const [imgLink, setImgLink] = useState(mockImageLink);

  const handleInputChange = (e) => {
    setSearchValue(e.target.value);
  };

  // console.log(searchValue);

  const handleButtonSearch = () => {
    setSearchValue("");
  };

  const handleEnterSearch = () => {
    if (e.key === "Enter") {
      // Fetch data
    }
  };

  function downloadLinks() {
    const uri = `${baseUri}&query=${color}&orientation=${orientation}&client_id=${accessKey}`;

    fetch(uri)
      .then((response) => response.json())
      .then((jsonResponse) => {
        // console.log('REQUEST');
        const imgNewLink = jsonResponse[0].urls.thumb;
        setImgLink(imgNewLink);
      });
  }

  useEffect(() => {
    downloadLinks();
  }, [color, orientation]);

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
        {/* Optional Selectors */}
        <div className="absolute flex top-[10px] right-[10px]">
          <Selector label="Color" />
          <Selector label="Orientation" />
        </div>
      </div>

      <button
        onClick={handleButtonSearch}
        onKeyDown={handleEnterSearch}
        disabled={!searchValue}
        className="px-[1rem] py-[.5rem] border rounded-tr-md rounded-br-md hover:bg-slate-700 font-medium active:scale-[.98] transition-all justify-items-center disabled:bg-gray-400 "
      >
        Search
      </button>
    </div>
  );
};

export default SearchComponent;
