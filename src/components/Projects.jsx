import React, { useState } from "react";
import project from "./data/project.json";

const Projects = () => {
  const [expandedIds, setExpandedIds] = useState([]);

  const toggleExpand = (id) => {
    if (expandedIds.includes(id)) {
      setExpandedIds(expandedIds.filter((item) => item !== id));
    } else {
      setExpandedIds([...expandedIds, id]);
    }
  };

  return (
    <div className="container projects py-5" id="projects">
      <h1 className="text-center mb-5 text-warning">PROJECTS</h1>
      <div className="row justify-content-center">
        {project.map((data, index) => {
          const isExpanded = expandedIds.includes(data.id);
          const shouldShowButton = data.description.length > 100;

          return (
            <div
              key={index}
              className="col-12 col-sm-6 col-md-6 col-lg-4 mb-4 d-flex align-items-stretch"
            >
              <div
                className="card bg-dark text-light w-100 d-flex flex-column"
                style={{
                  border: "1px solid yellow",
                  boxShadow: "5px 5px 15px rgba(255, 255, 0, 0.3)",
                }}
                data-aos="flip-right"
                data-aos-duration="1000"
              >
                <div className="img text-center p-3">
                  <img
                    src={data.imageSrc}
                    className="card-img-top"
                    alt={data.title}
                    style={{
                      width: "100%",
                      height: "200px",
                      objectFit: "cover",
                      border: "2px solid yellow",
                      borderRadius: "10px",
                    }}
                  />
                </div>

                <div className="card-body text-center d-flex flex-column justify-content-between">
                  <h5 className="card-title">{data.title}</h5>

                  <p
                    className="card-text"
                    style={{
                      fontSize: "0.9rem",
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                      display: "-webkit-box",
                      WebkitLineClamp: isExpanded ? "none" : 3,
                      WebkitBoxOrient: "vertical",
                      minHeight: "60px",
                    }}
                  >
                    {data.description}
                  </p>

                  {shouldShowButton && (
                    <button
                      className="btn btn-sm btn-link text-warning"
                      onClick={() => toggleExpand(data.id)}
                    >
                      {isExpanded ? "Read Less" : "Read More"}
                    </button>
                  )}

                  <div className="mt-2">
                    <a
                      href={data.demo}
                      className="btn btn-sm btn-primary mx-2"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Demo
                    </a>
                    <a
                      href={data.source}
                      className="btn btn-sm btn-warning"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Code
                    </a>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
