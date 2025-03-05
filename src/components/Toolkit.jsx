import React from "react";

const Toolkit = () => {
  return (
    <div className="bg-[#0f1629]">
      <div className="w-11/12 mx-auto">
        <div className="container flex gap-2 w-9/12  px-12">
          <a
            href="#"
            className="skill bg-[#1f2c4e4e] aspect-square border border-red-200 p-4 rounded-md group"
          >
            <img
              className="h-full my-auto group-hover:scale-110 transition-transform"
              src="https://i.ibb.co.com/Jw7WCxrf/download.png"
              alt=""
            />
          </a>
          <a
            href="#"
            className="skill bg-[#1f2c4e4e]  border border-red-200  aspect-square p-5 rounded-md group"
          >
            <img
              className="h-full my-auto group-hover:scale-110 transition-transform"
              src="https://i.ibb.co.com/RkTqhwbb/download-1.png"
              alt=""
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Toolkit;
