import gsap from "gsap";
import React from "react";
import Marquee from "react-fast-marquee";

const Toolkit = () => {
  const tools = [
    {
      src: "https://i.ibb.co.com/Jw7WCxrf/download.png",
      alt: "html",
      title: "HTML",
      link: "https://developer.mozilla.org/en-US/docs/Web/HTML",
    },
    {
      src: "https://i.ibb.co.com/RkTqhwbb/download-1.png",
      alt: "css",
      title: "CSS",
      link: "https://developer.mozilla.org/en-US/docs/Web/CSS",
    },
    {
      src: "https://i.ibb.co.com/0RpGqDBV/download-2.png",
      alt: "js",
      title: "JavaScript",
      link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
    },
    {
      src: "https://i.ibb.co.com/fdYjv3Dv/download-3.png",
      alt: "tailwind",
      title: "Tailwind CSS",
      link: "https://tailwindcss.com/",
    },
    {
      src: "https://i.ibb.co.com/MyVZptp8/react-original-logo-icon-146374.png",
      alt: "react",
      title: "React.js",
      link: "https://react.dev/",
    },
    {
      src: "https://i.ibb.co.com/WWmJ4gvC/rr-logo-dark.png",
      alt: "router",
      title: "React Router",
      link: "https://reactrouter.com/",
    },
    {
      src: "https://i.ibb.co.com/Psvwqf29/Vite-js.png",
      alt: "vite",
      title: "Vite.js",
      link: "https://vitejs.dev/",
    },
    {
      src: "https://i.ibb.co.com/tMp4K4Qp/shadcn-ui-logo-EF735-EC0-E5-seeklogo-com.png",
      alt: "shadcn",
      title: "ShadCN UI",
      link: "https://ui.shadcn.com/",
    },
    {
      src: "https://i.ibb.co.com/yc998jD2/download-5.png",
      alt: "node",
      title: "Node.js",
      link: "https://nodejs.org/",
    },
    {
      src: "https://i.ibb.co.com/VYwgXkCr/express.png",
      alt: "express",
      title: "Express.js",
      link: "https://expressjs.com/",
    },
    {
      src: "https://i.ibb.co.com/84c69JQt/mongo.png",
      alt: "mongo",
      title: "MongoDB",
      link: "https://www.mongodb.com/",
    },
    {
      src: "https://i.ibb.co.com/qM2qf6Px/git.png",
      alt: "git",
      title: "Git",
      link: "https://git-scm.com/",
    },
    {
      src: "https://i.ibb.co.com/xKn8W15H/github.png",
      alt: "GitHub",
      title: "GitHub",
      link: "https://github.com/",
    },
    {
      src: "https://i.ibb.co.com/WN14c5Ws/npm.png",
      alt: "NPM",
      title: "NPM",
      link: "https://www.npmjs.com/",
    },
  ];

  return (
    <div className="bg-[#0f1629] py-8">
      <div className="w-11/12  lg:w-10/12  mx-auto">
        <div
          className="text-center mb-12"
          data-aos="fade-down"
          data-aos-duration="1200"
        >
          <h1 className="text-4xl font-bold   text-[#38bdf8] tracking-wide uppercase">
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
              {" "}
              <a
                onMouseEnter={() =>
                  gsap.to("#cursor", { scale: 4, duration: 0.3 })
                }
                onMouseLeave={() =>
                  gsap.to("#cursor", { scale: 1, duration: 0.3 })
                }
                href={tool.link}
                target="_blank"
              >
                <img
                  title={tool.title}
                  src={tool.src}
                  alt={tool.alt}
                  className="h-full transition-transform group-hover:scale-110"
                />
              </a>
            </div>
          ))}
        </Marquee>
      </div>
    </div>
  );
};

export default Toolkit;
