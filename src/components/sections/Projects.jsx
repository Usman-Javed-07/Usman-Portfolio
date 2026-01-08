import { useState } from "react";
import { FaLongArrowAltRight } from "react-icons/fa";
import { projectsData } from "../../data/projects";
import ProjectCard from "../cards/ProjectCard";

const Projects = () => {
  const [showAll, setShowAll] = useState(false);
  const visibleProjects = showAll ? projectsData : projectsData.slice(0, 4);

  return (
    <section className="projects-section">
      <div className="projects">
        <h1 className="about-heading">
          <span className="text-about">Projects</span> ( ) {"{"}
        </h1>

        <div className="work-companies">
          <p>Some of my notable work</p>
        </div>

        <section className="projects-container">
          <div className="project-grid">
            {visibleProjects.map((project, index) => (
              <ProjectCard key={index} project={project} />
            ))}
          </div>

          {projectsData.length > 4 && (
            <div style={{ textAlign: "center" }}>
              <a
                onClick={() => setShowAll(!showAll)}
                className="resume viewmore-btn"
              >
                {showAll ? "Close" : "View All Projects"}
                <span className="arrow">
                  <FaLongArrowAltRight />
                </span>
              </a>
            </div>
          )}
          <p style={{ fontSize: "24px", fontWeight: 500, marginLeft: "50px" }}>
            {"}"}
          </p>
        </section>
      </div>
    </section>
  );
};

export default Projects;
