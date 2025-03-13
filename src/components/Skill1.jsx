import React from "react";
import "./Skill1.css";
const Skill1 = () => {
  const handleMouseEnter = (e) => {
    e.target.style.filter = "grayscale(0)";
  };
  return (
    <div
      id="skills"
      className="px-2  bg-[#0f1629] text-white py-8  flex flex-col items-center justify-center"
    >
      <h1 className="text-4xl font-bold pt-6  text-[#38bdf8] tracking-wide uppercase">
        Skills
      </h1>
      <div className="">
        <h1 className="text-xl text-center py-4"> Frontend</h1>
        <div className="flex flex-wrap gap-3">
          <div className="border-2 h-20 w-20 border-[#38bdf8] rounded">
            <a
              href="https://developer.mozilla.org/en-US/docs/Web/HTML"
              className=""
            >
              <img
                onMouseEnter={handleMouseEnter}
                className=""
                src="https://i.ibb.co.com/Jw7WCxrf/download.png"
                alt="HTML"
                title="HTML"
              />
            </a>
          </div>
          <div className="border-2 h-20 w-20 border-[#38bdf8] rounded">
            <a
              href="https://developer.mozilla.org/en-US/docs/Web/CSS"
              className=""
            >
              <img
                onMouseEnter={handleMouseEnter}
                className=""
                src="https://i.ibb.co.com/RkTqhwbb/download-1.png"
                alt=""
                title="CSS"
              />
            </a>
          </div>
          <div className="border-2 h-20 w-20 border-[#38bdf8] rounded">
            <a href="" className="">
              <img
                onMouseEnter={handleMouseEnter}
                className=""
                src="https://i.ibb.co.com/0RpGqDBV/download-2.png"
                alt="JavaScript"
                title="JavaScript"
              />
            </a>
          </div>
          <div className="border-2 h-20 w-20 border-[#38bdf8] rounded">
            <a href="https://tailwindcss.com/" className="">
              <img
                onMouseEnter={handleMouseEnter}
                className="p-2"
                src="https://i.ibb.co.com/fdYjv3Dv/download-3.png"
                alt="Tailwind CSS"
                title="Tailwind CSS"
              />
            </a>
          </div>
          <div className="border-2 h-20 w-20 border-[#38bdf8] rounded">
            <a href="https://react.dev/" className="">
              <img
                onMouseEnter={handleMouseEnter}
                className="p-2"
                src="https://i.ibb.co.com/MyVZptp8/react-original-logo-icon-146374.png"
                alt="React"
                title="React"
              />
            </a>
          </div>
        </div>
      </div>
      <div className="">
        <h1 className="text-xl text-center py-4"> Backend</h1>
        <div className="flex flex-wrap gap-3">
          <div className="border-2 h-20 w-20 border-[#38bdf8] rounded">
            <a href="https://nodejs.org/" className="">
              <img
                onMouseEnter={handleMouseEnter}
                className="p-2"
                src="https://i.ibb.co.com/yc998jD2/download-5.png"
                alt="Node"
                title="Node Js"
              />
            </a>
          </div>
          <div className="border-2 h-20 w-20 border-[#38bdf8] rounded">
            <a href="https://expressjs.com/" className="">
              <img
                onMouseEnter={handleMouseEnter}
                className="p-2"
                src="https://i.ibb.co.com/VYwgXkCr/express.png"
                alt="Express"
                title="Express"
              />
            </a>
          </div>
          <div className="border-2 h-20 w-20 border-[#38bdf8] rounded">
            <a href="https://www.mongodb.com/" className="">
              <img
                onMouseEnter={handleMouseEnter}
                className="p-2"
                src="https://i.ibb.co.com/84c69JQt/mongo.png"
                alt="MongoDB"
                title="MongoDB"
              />
            </a>
          </div>
          <div className="border-2 h-20 w-20 border-[#38bdf8] rounded">
            <a href="https://www.mongodb.com/" className="">
              <img
                onMouseEnter={handleMouseEnter}
                className="p-2"
                src="https://i.ibb.co.com/1ftG3NMW/firebase.png"
                alt="firebase"
                title="firebase"
              />
            </a>
          </div>
        </div>
      </div>
      <div className="">
        <h1 className="text-xl text-center py-4"> Tools & Technology</h1>
        <div className="flex flex-wrap gap-3">
          <div className="border-2 h-20 w-20 border-[#38bdf8] rounded">
            <a href="https://git-scm.com/" className="">
              <img
                onMouseEnter={handleMouseEnter}
                className="p-2"
                src="https://i.ibb.co.com/qM2qf6Px/git.png"
                alt="GIT"
                title="GIT"
              />
            </a>
          </div>
          <div className="border-2 h-20 w-20 border-[#38bdf8] rounded">
            <a href="https://github.com/" className="">
              <img
                onMouseEnter={handleMouseEnter}
                className="p-2"
                src="https://i.ibb.co.com/xKn8W15H/github.png"
                alt="Github"
                title="Github"
              />
            </a>
          </div>
          <div className="border-2 h-20 w-20 border-[#38bdf8] rounded">
            <a href="https://www.npmjs.com/" className="">
              <img
                onMouseEnter={handleMouseEnter}
                className="p-2"
                src="https://i.ibb.co.com/WN14c5Ws/npm.png"
                alt="NPM"
                title="NPM"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skill1;
