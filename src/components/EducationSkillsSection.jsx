import React from "react";
import { FaGraduationCap, FaLaptopCode } from "react-icons/fa";

const educationData = [
  {
    title: "Bachelor of Science in Computer Science",
    institution: "XYZ University",
    duration: "2018 - 2022",
    description:
      "Graduated with honors, focusing on full-stack development and AI.",
    icon: <FaGraduationCap className="text-white text-3xl" />,
  },
  {
    title: "Master's in Artificial Intelligence",
    institution: "ABC University",
    duration: "2023 - Present",
    description:
      "Currently pursuing my Master's degree with a focus on machine learning and deep learning.",
    icon: <FaLaptopCode className="text-white text-3xl" />,
  },
];

const EducationSkillsSection = () => {
  return (
    <section className="py-16 bg-[#0f1629] text-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Education Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-semibold text-center mb-8">Education</h2>
          <div className="flex items-stretch w-10/12 mx-auto gap-8">
            {educationData.map((item, index) => (
              <div
                key={index}
                className="bg-[#1e2639] border-4 border-[#38bdf8] rounded-lg p-6 flex-1 transition-transform duration-300 transform hover:scale-105"
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
            {/* Vertical Divider */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSkillsSection;
