import AOS from "aos";
import "aos/dist/aos.css";
import gsap from "gsap";
import React, { useEffect } from "react";
import { FaGraduationCap } from "react-icons/fa";

const educationData = [
  {
    title: "Bachelor of Science in Computer Science",
    institution: "Atish Dipankar University of Science & Technology",
    duration: "2018 - 2023",
    description:
      "Graduated with honors, focusing on full-stack development and AI.",
    icon: <FaGraduationCap className="text-white text-3xl" />,
  },
];

const EducationSkillsSection = () => {
  // Initialize AOS
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in milliseconds
      easing: "ease-in-out", // Animation easing
      once: true, // Trigger animation only once
    });
  }, []);

  return (
    <section id="education" className="py-16 bg-[#0f1629] text-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Education Section */}
        <div className="mb-16">
          <h2
            className="text-4xl font-bold text-center py-10 text-[#38bdf8] tracking-wide uppercase"
            data-aos="fade-up"
            onMouseEnter={() => gsap.to("#cursor", { scale: 4, duration: 0.3 })}
            onMouseLeave={() => gsap.to("#cursor", { scale: 1, duration: 0.3 })}
          >
            Education
          </h2>
          <div className="flex items-stretch w-10/12 mx-auto gap-8">
            {educationData.map((item, index) => (
              <div
                key={index}
                className="bg-[#1e2639] border-4 border-[#38bdf8] rounded-lg p-6 flex-1 transition-transform duration-300 transform hover:scale-105"
                data-aos="fade-right"
                data-aos-delay={`${index * 200}`} // Stagger animation for items
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full bg-[#38bdf8] flex justify-center items-center">
                    {item.icon}
                  </div>
                  <div className="ml-4">
                    <h3 className="text-xl font-semibold">{item.title}</h3>
                    <p className="text-gray-400">
                      {item.institution} | {item.duration}
                    </p>
                  </div>
                </div>
                <p className="text-gray-300">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSkillsSection;
