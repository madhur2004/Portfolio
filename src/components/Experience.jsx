import React from "react";
import experience from "./data/experience.json";

const Experience = () => {
  return (
    <div className="container ex" id="experience">
      <h1>EXPERIENCE</h1>
      {experience.map((data) => (
        <div
          key={data.id}
          className="ex-items"
          data-aos="zoom-in"
          data-aos-duration="1000"
        >
          <div className="left">
            <img src={data.imageSrc} alt={data.organisation} />
          </div>
          <div className="right">
            <h2>{data.role}</h2>
            <h4>
              {data.startDate} – {data.endDate} |{" "}
              <span style={{ color: "yellow" }}>{data.location}</span>
            </h4>
            {data.experiences.map((exp, index) => (
              <h5 key={index}>{exp}</h5>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Experience;
