import React, { useEffect, useState } from "react";
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from "react-icons/fa";
import img1 from "../../public/images/certificates/tender-heart.jpg";
import img2 from "../../public/images/certificates/bharat-intern.jpg";
import img3 from "../../public/images/certificates/machine-learning.jpg";
import img4 from "../../public/images/certificates/cyber-security.jpg";
import img5 from "../../public/images/certificates/cloud-computionn.jpg";

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const images = [img1, img2, img3, img4, img5];

  const handleNext = () => {
    setCurrentSlide(currentSlide === images.length - 1 ? 0 : currentSlide + 1);
  };

  const handlePrev = () => {
    setCurrentSlide(currentSlide === 0 ? images.length - 1 : currentSlide - 1);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 5000);
    return () => clearInterval(interval);
  }, [currentSlide]);

  return (
    <div className="slider-container">
      <h1 className="text-center text-light">Certificates</h1>
      {images.map((img, i) => (
        <div
          key={i}
          className={`slider-image-wrapper ${
            currentSlide === i ? "show" : "hide"
          }`}
        >
          <img src={img} alt={`certificate-${i}`} className="slider-image" />
          <div className="slider-buttons">
            <button className="nav-btn" onClick={handlePrev}>
              <FaArrowAltCircleLeft size={30} />
            </button>
            <button className="nav-btn" onClick={handleNext}>
              <FaArrowAltCircleRight size={30} />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Slider;
