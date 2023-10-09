import React from "react";
import HeroSection from "../components/HeroSection";
import ProjectShowcase from "../components/ProjectShowcase";
import Skills from "../components/Skills";
import TimelineComponent from "../components/Timeline";

const Home = () => {
  return (
    <div>
      <div>
        <HeroSection />
        <Skills />
        <ProjectShowcase />

        <TimelineComponent />
      </div>
    </div>
  );
};

export default Home;
