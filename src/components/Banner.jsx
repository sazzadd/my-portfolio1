import gsap from "gsap";
import hljs from "highlight.js";
import "highlight.js/styles/atom-one-dark.css"; // highlight.js style import
import React, { useEffect } from "react";
import { AiOutlineDownload } from "react-icons/ai";
import { FaGithub, FaLinkedinIn, FaWhatsapp } from "react-icons/fa";
import { Typewriter } from "react-simple-typewriter";

import { TextGenerateEffect } from "./ui/TextGenerateEffect";
const Banner = () => {
  const handleType = (count) => {
    // console.log(count); // Log word count while typing
  };

  const handleDone = () => {
    console.log("Done after 5 loops!"); // Log after finishing the loop
  };

  useEffect(() => {
    hljs.highlightAll();
  }, []);
  const words = ``;
  const codeSnippet = `
  const profile = {
    name: 'Sazzad Hossain',
    title: 'Fontend web  Developer | Problem Solver| Artist',
    skills: [
        'HTML', 'CSS',"JavaScript"
        'React', 'ExpressJS', 'MongoDB',
 ]      'Git', 'Linux', 
    ],
    hardWorker: true,

    problemSolver: true,
    yearsOfExperience: 1, 
    hireable: function() {
        return (
            this.hardWorker &&
            this.problemSolver &&
            this.skills.length >= 5 &&
            this.yearsOfExperience >= 1
        );
    }
};
  `;

  return (
    <div
      id="banner"
      className="bg-gradient-to-tl from-[#0b1221] to-[#112836] text-white"
    >
      <div className="hero flex flex-col lg:flex-row justify-between  lg:w-11/12 mx-auto items-center py-10">
        <div className="w-full lg:w-1/2 px-6  lg:text-left">
          <h1 className="text-4xl lg:text-5xl mt-16 md:m-0 font-bold">Hello</h1>
          <h1 className="text-3xl lg:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#10b981] to-[#38bdf8] mt-2">
            I am Sazzad Hossain
          </h1>
          <TextGenerateEffect words={words} />
          <p id="banner-subtitle" className="text-lg mt-4">
            <span style={{ color: "#38bdf8", fontWeight: "bold" }}>
              <Typewriter
                words={[
                  "I am a frontend web developer",
                  "Sleep",
                  "Code",
                  "Repeat!",
                ]}
                loop={5}
                cursor
                cursorStyle="_"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1000}
                onLoopDone={handleDone}
                onType={handleType}
              />
            </span>
          </p>
          <div className="">
            <a
              onMouseEnter={() =>
                gsap.to("#cursor", { scale: 3, duration: 0.3 })
              }
              onMouseLeave={() =>
                gsap.to("#cursor", { scale: 1, duration: 0.3 })
              }
              href="https://drive.google.com/uc?export=download&id=1tXHChxehgU1PZOxdab146Xz3TLDjbcOJ"
              className="mt-6 text-center w-[180px] py-2 bg-gradient-to-r from-[#10b981] to-[#38bdf8] 
               text-white rounded-lg shadow-lg transform hover:scale-105 transition-all 
               duration-300 ease-in-out flex items-center justify-center hover:bg-gradient-to-l 
               hover:from-[#38bdf8] hover:to-[#10b981]"
            >
              <AiOutlineDownload className="mr-2 text-center text-xl" />
              Download Resume
            </a>
          </div>

          {/* Social Icons Section */}
          <div className="flex floating  mt-6 space-x-4">
            <a
              onMouseEnter={() =>
                gsap.to("#cursor", { scale: 3, duration: 0.3 })
              }
              onMouseLeave={() =>
                gsap.to("#cursor", { scale: 1, duration: 0.3 })
              }
              href="https://www.linkedin.com/in/sazzadador/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#38bdf8] hover:text-white border-2 border-[#10b981] rounded-full p-3 transition-all duration-300 ease-in-out hover:scale-110"
            >
              <FaLinkedinIn className="text-2xl" />
            </a>
            <a
              onMouseEnter={() =>
                gsap.to("#cursor", { scale: 3, duration: 0.3 })
              }
              onMouseLeave={() =>
                gsap.to("#cursor", { scale: 1, duration: 0.3 })
              }
              href="https://github.com/sazzadd"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#38bdf8] hover:text-white border-2 border-[#10b981] rounded-full p-3 transition-all duration-300 ease-in-out hover:scale-110"
            >
              <FaGithub className="text-2xl" />
            </a>
            <a
              onMouseEnter={() =>
                gsap.to("#cursor", { scale: 3, duration: 0.3 })
              }
              onMouseLeave={() =>
                gsap.to("#cursor", { scale: 1, duration: 0.3 })
              }
              href="https://wa.me/+01705799384"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#38bdf8] hover:text-white border-2 border-[#10b981] rounded-full p-3 transition-all duration-300 ease-in-out hover:scale-110"
            >
              <FaWhatsapp className="text-2xl" />
            </a>
          </div>
        </div>

        {/* Right side with code block */}
        <div className="w-full lg:w-1/2 hidden md:block px-6 mt-12 lg:mt-0">
          <h2 className="text-2xl font-bold text-[#38bdf8]">Profile Code:</h2>
          <pre className="bg-[#1e293b] p-4 rounded-lg mt-6">
            <code className="javascript">{codeSnippet}</code>
          </pre>
        </div>
      </div>
    </div>
  );
};

export default Banner;
