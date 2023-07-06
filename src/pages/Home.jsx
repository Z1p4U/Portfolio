import React from "react";
import HeroSection from "../components/HeroSection";
import ProjectShowcase from "../components/ProjectShowcase";
import Skills from "../components/Skills";
import Timeline from "../components/Timeline";

const Home = () => {
  return (
    <div>
      <div>
        <HeroSection />
        <ProjectShowcase />
        <Skills />
        <Timeline />
      </div>
    </div>
  );
};

export default Home;
