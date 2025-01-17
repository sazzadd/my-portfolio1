import React from "react";
import About from "../components/About";
import Banner from "../components/Banner";
import Navbar from "../components/NavBar";
import Skills from "../components/Skills";
import EducationSkillsSection from "../components/EducationSkillsSection";
import ProjectCard from "../components/ProjectCard";
import ContactForm from "../components/ContactForm";
const Home = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Banner></Banner>
      <About></About>
      <Skills></Skills>
      <EducationSkillsSection></EducationSkillsSection>
      <ProjectCard></ProjectCard>
      <ContactForm></ContactForm>
    </div>
  );
};

export default Home;
<h1>home</h1>;
