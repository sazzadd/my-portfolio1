import AOS from "aos";
import "aos/dist/aos.css";
import React, { useEffect } from "react";
import { FaGraduationCap } from "react-icons/fa";

const educationData = [
  {
    title: "Bachelor of Science in Computer Science",
    institution: "Atish Dipankar University of Science & Technology",
    duration: "2018 - 2023",
    description: "Graduated with honors, focusing on full-stack development.",
    icon: <FaGraduationCap className="text-white text-3xl" />,
  },
];

const EducationSkillsSection = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  return (
    <section id="education" className="py-16 bg-[#0f1629] text-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Title */}
        <h2
          className="text-4xl font-bold text-center py-10 text-[#38bdf8] tracking-wide uppercase"
          data-aos="fade-up"
        >
          Education
        </h2>

        {/* Education Cards */}
        <div className="grid grid-cols-1 gap-8 w-11/12 mx-auto">
          {educationData.map((item, index) => (
            <div
              key={index}
              className="bg-[#1e2639] border-2 border-[#38bdf8] rounded-lg p-6 transition-all 
                 duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-[#38bdf860] flex flex-col"
              data-aos="fade-up"
              data-aos-delay={`${index * 200}`}
            >
              <div className="flex gap-4 items-center">
                {/* Fixed Size for Icon Box */}

                {/* Text Section (Same Alignment for All Items) */}
                <div className="flex-1">
                  <h3 className="text-xl font-semibold">{item.title}</h3>
                  <p className="text-gray-400">
                    {item.institution} | {item.duration}
                  </p>
                </div>
              </div>

              {/* Description (Always Below the Title) */}
              <p className="text-gray-300 mt-4">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationSkillsSection;
