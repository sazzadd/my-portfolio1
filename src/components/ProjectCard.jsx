import React from "react";
import { FaExternalLinkAlt, FaGithub, FaInfoCircle } from "react-icons/fa";

const projects = [
  {
    id: 1,
    title: "Project Tile goes here",
    description:
      "This is sample project description random things are here in description. This is sample project lorem ipsum generator for dummy content.",
    techStack: "HTML, JavaScript, SASS, React",
    image: "https://via.placeholder.com/300x200", // Replace with your image URL
    livePreview: "#",
    viewCode: "#",
  },
  {
    id: 2,
    title: "Project Tile goes here",
    description:
      "This is sample project description random things are here in description. This is sample project lorem ipsum generator for dummy content.",
    techStack: "HTML, JavaScript, SASS, React",
    image: "https://via.placeholder.com/300x200", // Replace with your image URL
    livePreview: "#",
    viewCode: "#",
  },
  {
    id: 3,
    title: "Project Tile goes here",
    description:
      "This is sample project description random things are here in description. This is sample project lorem ipsum generator for dummy content.",
    techStack: "HTML, JavaScript, SASS, React",
    image: "https://via.placeholder.com/300x200", // Replace with your image URL
    livePreview: "#",
    viewCode: "#",
  },
];

const ProjectCard = () => {
  return (
    <div className="bg-[#0f1629] min-h-screen flex justify-center items-center px-12">
      <div className="grid  grid-cols-1 w-9/12 md:grid-cols-2 lg:grid-cols-3 gap-12">
        {projects.map((project) => (
          <div
            key={project.id}
            className="bg-[#1E263B] text-gray-100 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 border border-[#38bdf8]"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-56 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-gray-400 mb-4 text-sm">{project.description}</p>
              <p className="text-gray-300 mb-4 text-sm">
                <span className="font-bold">Tech stack :</span> {project.techStack}
              </p>
              <div className="flex justify-between items-center mb-4">
                <a
                  href={project.livePreview}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:text-blue-400 text-sm flex items-center"
                >
                  <FaExternalLinkAlt className="mr-1" /> Live Preview
                </a>
                <a
                  href={project.viewCode}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:text-blue-400 text-sm flex items-center"
                >
                  <FaGithub className="mr-1" /> View Code
                </a>
              </div>
              <div className="text-center">
                <button
                  className="bg-[#38bdf8] text-gray-900 px-4 py-2 rounded-md flex items-center justify-center w-full hover:bg-blue-400 transition-colors duration-300"
                >
                  <FaInfoCircle className="mr-2" /> View Details
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectCard;
