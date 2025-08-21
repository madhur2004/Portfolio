import React from "react";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container text-center">
        <p className="mb-1">Name: Madhur Chaturvedi</p>
        <p className="mb-1">Email: madhurchaturvedi04@gmail.com</p>
        <p className="mb-1">Phone: 996805163</p>
        <hr style={{ borderColor: "yellow" }} />
        <p className="mb-0" style={{ fontSize: "14px", color: "gray" }}>
          © {year} Madhur Chaturvedi. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
