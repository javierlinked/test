// States
import { useEffect, useState } from "react";

// Import components

import DisplayImage from "./components/DisplayImage";
import SearchComponent from "./components/SearchComponent";

// Import Axios
import axios from "axios";

function App() {
  const [image, setImage] = useState([]);

  const apiRoot = "https://api.unsplash.com/";
  // const accessKey = process.env.REACT_APP_ACCESS_KEY;
  const accessKey = "s9rQFfC38sp0xQJQiK4DOs-tAifpX2FEJL8BGaZQgXI";

  useEffect(() => {
    axios
      .get(`${apiRoot}/photos/random/?client_id=${accessKey}`)
      .then((res) => {
        console.log(res.data);
      });
  }, []);

  return (
    <div className="App bg-slate-300 ">
      <div className="flex flex-col w-full items-center justify-center py-[5rem] bg-slate-800 text-white">
        <span className="text-3xl">Search a random Unsplash Image</span>
        <SearchComponent />
      </div>
      <DisplayImage />
    </div>
  );
}

export default App;
