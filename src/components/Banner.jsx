import React from "react";

const Banner = () => {
  return (
    <div
      className="min-h-screen bg-gradient-to-tl from-[#0b1221] to-[#112836] text-white"
      style={{
        backgroundImage: `linear-gradient(to top left, #0b1221 60%, #112836 100%)`,
      }}
    >
      <div
        className="hero min-h-screen flex justify-between items-center"
        style={{
          backgroundImage: `linear-gradient(to top left, #0b1221 60%, #112836 100%)`,
        }}
      >
        <div className="w-full lg:w-1/2 p-6">
            <h1 className="text-5xl font-bold">hellow</h1>
          <h1 className="text-4xl font-bold" id="title">I'm Nazmul Sazzad Hossain </h1>
          <p className="text-lg mt-4">i am nothing</p>
          <button className="btn btn-primary mt-4">Click Me</button>
        </div>

        <div className="w-full lg:w-1/2 p-6">
          <h1>right site</h1>
        </div>
      </div>
    </div>
  );
};

export default Banner;
