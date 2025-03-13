import React from "react";
import About from "../components/About";
import Banner from "../components/Banner";
import ContactForm from "../components/ContactForm";
import EducationSkillsSection from "../components/EducationSkillsSection";
import Navbar from "../components/NavBar";
import ProjectCard from "../components/ProjectCard";
import Skill1 from "../components/Skill1";
const Home = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Banner></Banner>
      <About></About>
      <Skill1></Skill1>

      <EducationSkillsSection></EducationSkillsSection>
      <ProjectCard></ProjectCard>
      <ContactForm></ContactForm>
    </div>
  );
};

export default Home;
<h1>home</h1>;
