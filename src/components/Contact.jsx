import React from "react";
import { FaInstagram } from "react-icons/fa";
import { CiFacebook, CiLinkedin } from "react-icons/ci";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaGithubSquare } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

const Contact = () => {
  const handleSubmit = (e) => {
  e.preventDefault();
  alert("Your message has been received. Our team will respond as soon as possible.");
};

  return (
    <div className="container contact py-5 text-center">
      <h1 className="mb-4 fw-bold  text-warning">CONTACT ME</h1>

      {/* Social Media Icons */}
      <div
        className="d-flex justify-content-center gap-4 flex-wrap mb-5"
        data-aos="zoom-in-up"
        data-aos-duration="1000"
      >
        <a
          href="https://www.instagram.com/chaturvedi__2004/"
          target="_blank"
          rel="noreferrer"
          className="icon-hover instagram"
        >
          <FaInstagram className="fs-1" />
        </a>
        <a
          href="https://www.facebook.com/share/169LTygwAi/"
          target="_blank"
          rel="noreferrer"
          className="icon-hover facebook"
        >
          <CiFacebook className="fs-1" />
        </a>
        <a
          href="https://www.linkedin.com/in/madhur-chaturvedi-49136a256/details/education/"
          target="_blank"
          rel="noreferrer"
          className="icon-hover linkedin"
        >
          <CiLinkedin className="fs-1" />
        </a>
        <a
          href="https://x.com/Madhur032004"
          target="_blank"
          rel="noreferrer"
          className="icon-hover twitter"
        >
          <FaSquareXTwitter className="fs-1" />
        </a>
        <a
          href="https://github.com/madhur2004"
          target="_blank"
          rel="noreferrer"
          className="icon-hover github"
        >
          <FaGithubSquare className="fs-1" />
        </a>
        <a
          href="mailto:madhurchaturvedi04@gmail.com"
          target="_blank"
          rel="noreferrer"
          className="icon-hover gmail"
        >
          <SiGmail className="fs-1" />
        </a>
      </div>

      {/* Contact Form */}
      <div className="row justify-content-center">
        <div
          className="col-md-8 col-lg-6"
          data-aos="fade-up"
          data-aos-duration="1200"
        >
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="name" className="form-label fw-semibold">
                Name
              </label>
              <input
                type="text"
                className="form-control"
                id="name"
                placeholder="Enter your name"
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label fw-semibold">
                Email
              </label>
              <input
                type="email"
                className="form-control"
                id="email"
                placeholder="Enter your email"
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="message" className="form-label fw-semibold">
                Message
              </label>
              <textarea
                className="form-control"
                id="message"
                rows="3"
                placeholder="Write your message..."
                required
              ></textarea>
            </div>
            <button type="submit" className="btn btn-dark w-100 mt-2">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
