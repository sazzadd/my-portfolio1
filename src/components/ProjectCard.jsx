import AOS from "aos";
import "aos/dist/aos.css";
import gsap from "gsap";
import React, { useEffect, useState } from "react";
import { FaExternalLinkAlt, FaGithub, FaInfoCircle } from "react-icons/fa";
import { Link } from "react-router-dom";

const ProjectCard = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in milliseconds
      once: true, // Whether animation should happen only once
    });
  }, []);
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    fetch("/project.json")
      .then((response) => response.json())
      .then((data) => setProjects(data))
      .then((error) => console.log(error));
  }, []);

  return (
    <div
      id="projects"
      className="bg-[#0f1629] min-h-screen flex flex-col justify-center items-center  py-16"
    >
      {/* Section Title */}
      <div
        className="text-center mb-12"
        data-aos="fade-down"
        data-aos-duration="1200"
      >
        <h1
          className="text-4xl font-bold text-[#38bdf8] tracking-wide uppercase"
       
        >
          Projects
        </h1>
        <p className="text-gray-400 mt-2 text-sm">
          Explore some of my recent works and projects.
        </p>
        <div className="h-1 w-20 mx-auto bg-[#38bdf8] mt-4 rounded"></div>
      </div>

      {/* Project Cards */}
      <div
        className="grid  grid-cols-1 w-10/12 md:grid-cols-2 lg:grid-cols-3 gap-12"
        data-aos="fade-up"
      >
        {projects.slice(0, 3).map((project) => (
          <div
            key={project.id}
            className="bg-[#1E263B] text-gray-100 rounded-lg overflow-hidden shadow-md border border-[#38bdf8] transform transition-transform duration-300 hover:scale-105 hover:shadow-lg hover:border-blue-500"
            data-aos="zoom-in"
          >
            <div className="overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-56 object-cover transform transition-transform duration-300 hover:scale-110"
              />
            </div>
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-gray-400 mb-4 text-sm">
                {project.description.length > 100
                  ? project.description.substring(0, 100) + "..."
                  : project.description}
              </p>
              <p className="text-gray-300 mb-4 text-sm">
                <span className="font-bold">Tech stack :</span>{" "}
                {project.techStack}
              </p>
              <div className="flex justify-between items-center mb-4">
                <a
                  href={project.livePreview}
                  onMouseEnter={() =>
                    gsap.to("#cursor", { scale: 2, duration: 0.3 })
                  }
                  onMouseLeave={() =>
                    gsap.to("#cursor", { scale: 1, duration: 0.3 })
                  }
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:text-blue-400 text-sm flex items-center"
                >
                  <FaExternalLinkAlt className="mr-1" /> Live Preview
                </a>
                <a
                  href={project.viewCode}
                  target="_blank"
                  onMouseEnter={() =>
                    gsap.to("#cursor", { scale: 2, duration: 0.3 })
                  }
                  onMouseLeave={() =>
                    gsap.to("#cursor", { scale: 1, duration: 0.3 })
                  }
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:text-blue-400 text-sm flex items-center"
                >
                  <FaGithub className="mr-1" /> View Code
                </a>
              </div>
              <div className="text-center">
                <Link to={`/project/${project.id}`}>
                  <a
                    onMouseEnter={() =>
                      gsap.to("#cursor", { scale: 3, duration: 0.3 })
                    }
                    onMouseLeave={() =>
                      gsap.to("#cursor", { scale: 1, duration: 0.3 })
                    }
                    className="bg-[#38bdf8] text-gray-900 px-4 py-2 rounded-md flex items-center justify-center w-full hover:bg-blue-400 transition-colors duration-300"
                  >
                    <FaInfoCircle className="mr-2" /> View Details
                  </a>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectCard;
