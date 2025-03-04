import { Card, Typography } from "@material-tailwind/react";

const About = () => {
  return (
    <div className="bg-[#0f1629] text-white flex items-center justify-center">
      <Card className="container mx-auto px-6 lg:px-20  bg-transparent shadow-none">
        <div className="flex flex-col lg:flex-row items-center lg:items-start justify-between">
          {/* Left Content */}
          <div className="lg:w-1/2 mb-6 lg:mb-0">
            <h1
              className="text-4xl uppercase py-5 font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#10b981] to-[#38bdf8]"
              id="banner-title"
            >
              who i am
            </h1>
            <Typography
              variant="paragraph"
              className="text-lg text-white leading-relaxed"
            >
              Hello! I’m{" "}
              <span className="font-bold text-[#10b981]">Sazzad Hossain</span>
              , a passionate Fontend developer specializing React ,Tailwind
              ,Express mongoDb My focus is on making web development faster,
              easier, and accessible to all developers. Currently, I’m expanding
              into backend development to grow as a Fontend development and
              create seamless, robust web applications.
              <br />
              <br />
              I’m a lifelong learner and innovator, driven by a desire to
              contribute to the developer community with new ideas and tools
              that deliver real value.
            </Typography>
          </div>
          {/* Right Image */}
          <div className="lg:w-1/2 flex justify-center">
            <img
              src="https://i.ibb.co/q5C25kb/sazzad.png"
              alt="Nazmul Hossain"
              className="rounded-lg shadow-lg w-80 lg:w-96"
            />
          </div>
        </div>
      </Card>
    </div>
  );
};

export default About;
