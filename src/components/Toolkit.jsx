import React from "react";
import Marquee from "react-fast-marquee";

const Toolkit = () => {
  const tools = [
    { src: "https://i.ibb.co.com/Jw7WCxrf/download.png", alt: "html" },
    { src: "https://i.ibb.co.com/RkTqhwbb/download-1.png", alt: "css" },
    { src: "https://i.ibb.co.com/0RpGqDBV/download-2.png", alt: "js" },
    { src: "https://i.ibb.co.com/fdYjv3Dv/download-3.png", alt: "tailwind" },
    {
      src: "https://i.ibb.co.com/MyVZptp8/react-original-logo-icon-146374.png",
      alt: "react",
    },
    { src: "https://i.ibb.co.com/WWmJ4gvC/rr-logo-dark.png", alt: "router" },
    { src: "https://i.ibb.co.com/Psvwqf29/Vite-js.png", alt: "vite" },
    {
      src: "https://i.ibb.co.com/tMp4K4Qp/shadcn-ui-logo-EF735-EC0-E5-seeklogo-com.png",
      alt: "shadcn",
    },
    {
      src: "https://i.ibb.co.com/yc998jD2/download-5.png",
      alt: "node",
      title: "node js",
    },
    { src: "https://i.ibb.co.com/VYwgXkCr/express.png", alt: "express" },
    { src: "https://i.ibb.co.com/84c69JQt/mongo.png", alt: "mongo" },
    { src: "https://i.ibb.co.com/qM2qf6Px/git.png", alt: "GIT" },
    { src: "https://i.ibb.co.com/xKn8W15H/github.png", alt: "GitHub" },
    { src: "https://i.ibb.co.com/WN14c5Ws/npm.png", alt: "GitHub" },
  ];

  return (
    <div className="bg-[#0f1629] py-8">
      <div className="w-11/12 mx-auto">
        <div
          className="text-center mb-12"
          data-aos="fade-down"
          data-aos-duration="1200"
        >
          <h1
            className="text-4xl font-bold   text-[#38bdf8] tracking-wide uppercase"
            onMouseEnter={() => gsap.to("#cursor", { scale: 4, duration: 0.3 })}
            onMouseLeave={() => gsap.to("#cursor", { scale: 1, duration: 0.3 })}
          >
            Skills
          </h1>
          <p className="text-gray-400 mt-2 text-sm">My Development Tollkit</p>
          <div className="h-1 w-20 mx-auto bg-[#38bdf8] mt-4 rounded"></div>
        </div>
        <Marquee
          gradient={false}
          speed={50}
          pauseOnHover={true}
          className="w-10/12 mx-auto"
        >
          {tools.map((tool, index) => (
            <div
              key={index}
              className="h-32 w-32 bg-[#1f2c4e4e] border border-blue-200 rounded-md p-4 flex justify-center items-center mx-4 group"
            >
              <img
                src={tool.src}
                alt={tool.alt}
                className="h-full transition-transform group-hover:scale-110"
              />
            </div>
          ))}
        </Marquee>
      </div>
    </div>
  );
};

export default Toolkit;
