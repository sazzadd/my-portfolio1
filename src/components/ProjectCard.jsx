import AOS from "aos";
import "aos/dist/aos.css";
import React, { useEffect } from "react";
import { FaExternalLinkAlt, FaGithub, FaInfoCircle } from "react-icons/fa";

const projects = [
  {
    id: 1,
    title: "Car Rental Web App",
    description:
      "Car Rental System! This is a feature-rich platform designed to provide a seamless car rental experience. Facilitate easy management of cars for rent.",
    techStack: "React, Express, MongoDB, Firebase",
    image: "https://i.ibb.co/3h8y7pg/Screenshot-2025-01-04-232008.png",
    livePreview: "https://b10a11-car-rental.surge.sh/",
    viewCode: "https://github.com/sazzadd/car-rental-client-site.git",
  },
  {
    id: 2,
    title: "Chill Gamer",
    description:
      "Chill Gamer is a platform for exploring and sharing game reviews. Users can view, add, and filter reviews based on their preferences, helping fellow gamers find the best games to play. This application is built using modern web technologies to ensure a seamless and engaging experience.",
    techStack: "React, Express, MongoDB, Firebase",
    image: "https://i.ibb.co/WzYGTwm/Screenshot-2025-01-04-233235.png",
    livePreview: "https://b10a10-chill-gamer.surge.sh/",
    viewCode: "https://github.com/sazzadd/game-review--client.git",
  },
  {
    id: 3,
    title: "Coupon Collecting Application",
    description:
      "Discount PRO helps users find and use discount coupons for e-commerce shops in Bangladesh. With features like brand details, user authentication, and a responsive design, View brand-specific coupons and categories, it's built to help users save more!",
    techStack: "React, Express, MongoDB, Firebase",
    image: "https://i.ibb.co/2FgnNrD/Screenshot-2025-01-04-235812.png",
    livePreview: "https://b10a9-7fca5.web.app/",
    viewCode:
      "https://github.com/programming-hero-web-course1/b10-a9-authentication-sazzadd.git",
  },
];

const ProjectCard = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in milliseconds
      once: true, // Whether animation should happen only once
    });
  }, []);

  return (
    <div  id="projects" className="bg-[#0f1629] min-h-screen flex flex-col justify-center items-center px-12 py-16">
      {/* Section Title */}
      <div
        className="text-center mb-12"
        data-aos="fade-down"
        data-aos-duration="1200"
      >
        <h1 className="text-4xl font-bold text-[#38bdf8] tracking-wide uppercase">
          Projects
        </h1>
        <p className="text-gray-400 mt-2 text-sm">
          Explore some of my recent works and projects.
        </p>
        <div className="h-1 w-20 mx-auto bg-[#38bdf8] mt-4 rounded"></div>
      </div>

      {/* Project Cards */}
      <div
       
        className="grid  grid-cols-1 w-9/12 md:grid-cols-2 lg:grid-cols-3 gap-12"
        data-aos="fade-up"
      >
        {projects.map((project) => (
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
                {project.description}
              </p>
              <p className="text-gray-300 mb-4 text-sm">
                <span className="font-bold">Tech stack :</span>{" "}
                {project.techStack}
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
                <button className="bg-[#38bdf8] text-gray-900 px-4 py-2 rounded-md flex items-center justify-center w-full hover:bg-blue-400 transition-colors duration-300">
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
