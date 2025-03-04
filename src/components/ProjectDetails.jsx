import React from "react";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import { useLoaderData, useParams } from "react-router-dom";
import Navbar from "./NavBar";

const ProjectDetails = () => {
  const { id } = useParams();
  const projects = useLoaderData();

  const selectedProject = projects.find((project) => project.id === Number(id));
  console.log(selectedProject.title);
  return (
    <div className="min-h-screen items-center justify-center flex flex-col bg-[#0f1629] ">
      <Navbar></Navbar>
      <div className="min-h-screen bg-slate-900 flex items-center justify-center p-4">
        <div className="w-full max-w-6xl flex flex-col lg:flex-row rounded-lg overflow-hidden border border-cyan-400">
          {/* Left */}
          <div className="w-full lg:w-1/2 bg-white">
            <div className="h-[300px] lg:h-[400px]">
              <img
                src={selectedProject.image}
                className="transform transition-transform duration-300 hover:scale-110"
                alt=""
              />
            </div>
          </div>

          {/* Right */}
          <div className="w-full lg:w-1/2 bg-[#192233] p-6 lg:p-8 relative">
            <div className="absolute top-4 left-4 flex gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
            </div>

            {/* Action Buttons */}
            <div className="absolute top-4 right-4 flex gap-4">
              <button
                onClick={() =>
                  window.open(selectedProject.viewCode, "_blank")
                }
                className="text-gray-400 text-2xl hover:text-white transition-colors"
              >
                <FaGithub></FaGithub>
              </button>
              <button 
                 onClick={() =>
                  window.open(selectedProject.livePreview, "_blank")
                }
              className="text-gray-400  text-2xl hover:text-white transition-colors">
                <FaExternalLinkAlt className="mr-1" />
              </button>
            </div>

            {/* Content */}
            <div className="mt-12">
              <div className="text-emerald-400 text-sm font-medium mb-4">
                FEATURED PROJECT
              </div>
              <h1 className="text-white text-2xl lg:text-3xl font-bold mb-4">
                {selectedProject.title}
              </h1>
              <p className="text-gray-300 mb-6 leading-relaxed text-sm lg:text-base">
                {selectedProject.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {selectedProject.techStack.split(",").map((item, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-emerald-400/10 text-emerald-400 border border-emerald-400 rounded-full text-sm"
                  >
                    {item.trim()}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
