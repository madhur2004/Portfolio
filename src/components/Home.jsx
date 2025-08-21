import React, { useEffect, useRef } from "react";
import Typed from "typed.js";
import Experience from "./Experience";
import Skills from "./Skills";
import Contact from "./Contact";

const Home = () => {
  const typedRef = useRef(null);
  useEffect(() => {
    const options = {
      strings: [
        "Welcome to my profile.",
        "My name is Madhur Chaturvedi.",
        "I have completed my B.Tech from IIMT Engineering College, Greater Noida.",
        "My specialization is in Computer Science with Artificial Intelligence.",
      ],

      typeSpeed: 50,
      backSpeed: 50,
      loop: true,
    };

    const typed = new Typed(typedRef.current, options);

    return () => {
      typed.destroy();
    };
  }, []);
  return (
    <>
      <div className="container home">
        <div className="left" data-aos="fade-up-right" data-aos-duration="1000">
          <h1 ref={typedRef}></h1>

          <a
            href="https://drive.google.com/file/d/1KbofB8UQYukqA_CGzqM3a173bddFCEPd/view?usp=sharing"
            className="btn btn-outline-warning my-3"
            target="_blank"
            rel="noreferrer"
          >
            Download Resume
          </a>
        </div>
        <div className="right">
          <div
            className="img"
            data-aos="fade-up-left"
            data-aos-duration="200000"
          >
            <img src="/images/hero.jpg" alt="" />
          </div>
        </div>
      </div>
      <Experience />
      <Skills />
      <Contact />
    </>
  );
};

export default Home;
