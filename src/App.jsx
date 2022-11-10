// States
import { useEffect, useState } from "react";

// Import components
import DisplayImage from "./components/DisplayImage";
import SearchComponent from "./components/SearchComponent";

function App() {
  return (
    <div className="App bg-slate-300 ">
      <div className="flex flex-col w-full items-center justify-center py-[2rem] bg-slate-800 text-white">
        <span className="text-3xl text-center">
          Search a random Unsplash Image
        </span>
        <SearchComponent />
      </div>
      <DisplayImage />
    </div>
  );
}

export default App;
