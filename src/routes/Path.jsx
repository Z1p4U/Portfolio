import React from "react";
import { Route, Router, Routes } from "react-router-dom";
import Navbar from "../components/Navbar";
import Home from "../pages/Home";
import Contact from "../pages/Contact";
import About from "../pages/Contact";
import Footer from "../components/Footer";
import Projects from "../pages/Projects";

const Path = () => {
  return (
    <>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
        <Footer />
      </div>
    </>
  );
};

export default Path;
