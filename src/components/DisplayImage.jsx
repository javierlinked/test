import React from "react";

const DisplayImage = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <img
        className="w-[800px]   object-cover"
        src="https://images.unsplash.com/photo-1667892063532-2a39a634acef?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1750&q=80"
      ></img>
    </div>
  );
};

export default DisplayImage;
