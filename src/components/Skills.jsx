import { Card, Typography } from "@material-tailwind/react";
import { FaHtml5, FaCss3Alt, FaReact, FaNodeJs, FaDatabase } from "react-icons/fa";

const skills = [
  { name: "HTML", progress: 90, icon: <FaHtml5 className="text-[#e34f26] text-3xl" /> },
  { name: "CSS", progress: 85, icon: <FaCss3Alt className="text-[#1572b6] text-3xl" /> },
  { name: "Tailwind CSS", progress: 95, icon: <img src="https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg" alt="Tailwind CSS" className="w-8 h-8" /> },
  { name: "React", progress: 88, icon: <FaReact className="text-[#61dbfb] text-3xl" /> },
  { name: "Node.js", progress: 80, icon: <FaNodeJs className="text-[#8cc84b] text-3xl" /> },
  { name: "MongoDB", progress: 75, icon: <FaDatabase className="text-[#4db33d] text-3xl" /> },
];

const Skills = () => {
  return (
    <div className="bg-[#0f1629] text-white py-8 flex items-center justify-center">
      <Card className="container mx-auto px-6 lg:px-20 py-10 bg-transparent shadow-xl rounded-2xl">
        <Typography
          variant="h3"
          className="font-bold text-[#38bdf8] text-center mb-12 text-3xl"
        >
          My Skills
        </Typography>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="bg-[#1e2436] p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105"
            >
              <div className="flex justify-between items-center mb-4">
                <div className="flex items-center space-x-4">
                  <div>{skill.icon}</div>
                  <Typography
                    variant="paragraph"
                    className="font-semibold text-lg text-gray-300"
                  >
                    {skill.name}
                  </Typography>
                </div>
                <Typography
                  variant="paragraph"
                  className="font-semibold text-sm text-[#38bdf8]"
                >
                  {skill.progress}%
                </Typography>
              </div>

              <div className="w-full bg-gray-700 h-2 rounded-full overflow-hidden">
                <div
                  className="bg-[#38bdf8] h-full rounded-full transition-all duration-1000 ease-out"
                  style={{ width: `${skill.progress}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
};

export default Skills;
