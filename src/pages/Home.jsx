import React from "react";
import HeroSection from "../components/HeroSection";
import ProjectShowcase from "../components/ProjectShowcase";
import Skills from "../components/Skills";
import TimelineComponent from "../components/Timeline";
import { Accordion } from "../components/accordion/Accordion"

const Home = () => {
  return (
    <div>
      <div>
        <HeroSection />
        {/* <ProjectShowcase /> */}
        {/* <Skills /> */}
        <TimelineComponent />
        <Accordion/>
      </div>
    </div>
  );
};

export default Home;
