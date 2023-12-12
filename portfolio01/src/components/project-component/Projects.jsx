import React from "react";
import { projectData } from "./projectData";
import { Link } from "react-router-dom";
import "./project.css";
const Projects = () => {
  return (
    <div>
      <center>
        {/* No projects Yet............... */}
        <div className="project-container">
        {projectData.map((item, i) => 
          <div className="project-card">
            <img
              src={`${projectData[i].img1}`}
              alt=""
              className="project-img"
            />
            <div className="project-card-content">
              <h3 className="h3">{item.title}</h3>
              <p className="project-content">
                {item.desc}
              </p>
              <div className="linku">
                <ion-icon name="arrow-redo-outline" size="small"></ion-icon>
                <Link to={`${item.link}`} className="l">
                  Link
                </Link>
              </div>
            </div>
          </div>
        )}
        </div>
      </center>
    </div>
  );
};

export default Projects;
