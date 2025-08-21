import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Aos from "aos";
import "aos/dist/aos.css";

import { Navbar } from "./components/Navbar";
import Home from "./components/Home";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Slider from "./components/Slider";
import Footer from "./components/Footer";

const App = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/slider" element={<Slider />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
};

export default App;
