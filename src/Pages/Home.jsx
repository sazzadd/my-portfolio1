import React from "react";
import About from "../components/About";
import Banner from "../components/Banner";
import ContactForm from "../components/ContactForm";
import EducationSkillsSection from "../components/EducationSkillsSection";
import Navbar from "../components/NavBar";
import ProjectCard from "../components/ProjectCard";
import Toolkit from "../components/Toolkit";
const Home = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Banner></Banner>
      <About></About>

      <Toolkit></Toolkit>
      <EducationSkillsSection></EducationSkillsSection>
      <ProjectCard></ProjectCard>
      <ContactForm></ContactForm>
    </div>
  );
};

export default Home;
<h1>home</h1>;
