import hljs from "highlight.js";
import "highlight.js/styles/atom-one-dark.css"; // highlight.js স্টাইল ইম্পোর্ট
import React, { useEffect } from "react";
import { AiOutlineDownload } from "react-icons/ai";
import { FaGithub, FaLinkedinIn, FaWhatsapp } from "react-icons/fa";
import { Typewriter } from "react-simple-typewriter";

const Banner = () => {
  const handleType = (count) => {
    console.log(count); // Log word count while typing
  };

  const handleDone = () => {
    console.log("Done after 5 loops!"); // Log after finishing the loop
  };

  useEffect(() => {
    hljs.highlightAll(); // কোড হাইলাইট করার জন্য
  }, []); // কম্পোনেন্ট লোড হলে একবার রান হবে

  const codeSnippet = `
  const profile = {
    name: 'Sazzad Hossain',
    title: 'Fontend web  Developer | Problem Solver| Artist',
    skills: [
        'React', 'Express',
        'MongoDB', 'AWS', 'TypeScript',
        'GraphQL', 'Git', 'Linux', 'Discord Development'
    ],
    hardWorker: true,
    quickLearner: true,
    problemSolver: true,
    yearsOfExperience: 4, 
    hireable: function() {
        return (
            this.hardWorker &&
            this.problemSolver &&
            this.skills.length >= 5 &&
            this.yearsOfExperience >= 3
        );
    }
};
  `;

  return (
    <div
      className="bg-gradient-to-tl from-[#0b1221] to-[#112836] text-white"
      style={{
        backgroundImage: `linear-gradient(to top left, #0b1221 60%, #112836 100%)`,
      }}
    >
      <div
        className="hero flex justify-between w-10/12 mx-auto items-center"
        style={{
          backgroundImage: `linear-gradient(to top left, #0b1221 60%, #112836 100%)`,
        }}
      >
        <div className="w-full lg:w-1/2 p-6">
          <h1 className="text-5xl font-bold">Hello</h1>

          {/* Title text with gradient */}
          <h1
            className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#10b981] to-[#38bdf8]"
            id="banner-title"
          >
            I am Sazzad Hossain
          </h1>

          {/* Typewriter effect for the subtitle */}
          <p id="banner-subtitle" className="text-lg mt-4">
            <span style={{ color: "#38bdf8", fontWeight: "bold" }}>
              <Typewriter
                words={[
                  "I am a frontend web developer",
                  "Sleep",
                  "Code",
                  "Repeat!",
                ]} // Words to type
                loop={5} // Set the number of loops
                cursor
                cursorStyle="_" // Custom cursor style
                typeSpeed={70} // Typing speed
                deleteSpeed={50} // Deletion speed
                delaySpeed={1000} // Delay before typing starts
                onLoopDone={handleDone} // Action after completing all loops
                onType={handleType} // Action during typing
              />
            </span>
          </p>

          {/* Download Resume Button */}
          <button
            className="mt-4 px-4 py-2 bg-gradient-to-r from-[#10b981] to-[#38bdf8] text-white 
            hover:bg-gradient-to-l hover:from-[#38bdf8] hover:to-[#10b981] 
            transform hover:scale-105 transition-all duration-300 ease-in-out 
            rounded-lg shadow-lg hover:shadow-2xl hover:opacity-90 flex items-center"
          >
            <AiOutlineDownload className="mr-2 text-xl" /> {/* React Icon */}
            Download Resume
          </button>

          {/* Social Icons Section */}
          <div className="flex mt-6 space-x-4">
            <a
              href="https://www.linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#38bdf8] hover:text-white border-2 border-[#10b981] rounded-full p-2 transition-all duration-300 ease-in-out hover:scale-110"
            >
              <FaLinkedinIn className="text-2xl" />
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#38bdf8] hover:text-white border-2 border-[#10b981] rounded-full p-2 transition-all duration-300 ease-in-out hover:scale-110"
            >
              <FaGithub className="text-2xl" />
            </a>
            <a
              href="https://wa.me"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#38bdf8] hover:text-white border-2 border-[#10b981] rounded-full p-2 transition-all duration-300 ease-in-out hover:scale-110"
            >
              <FaWhatsapp className="text-2xl" />
            </a>
          </div>
        </div>

        {/* Right side with code block */}
        <div className="w-full lg:w-1/2 p-6">
          <h2 className="text-2xl font-bold text-[#38bdf8]">Profile Code:</h2>
          <pre className="bg-[#1e293b] p-4 rounded-lg mt-10">
            <code className="javascript">{codeSnippet}</code>
          </pre>
        </div>
      </div>
    </div>
  );
};

export default Banner;
