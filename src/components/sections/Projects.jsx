import { useState } from "react";
import { FaLongArrowAltRight } from "react-icons/fa";
import { projectsData } from "../../data/projects";
import ProjectCard from "../cards/ProjectCard";
import AnimatedSection from "../common/AnimatedSection";

const Projects = () => {
  const [showAll, setShowAll] = useState(false);
  const visibleProjects = showAll ? projectsData : projectsData.slice(0, 4);

  return (
    <section className="projects-section">
      <div className="projects">
        <AnimatedSection animation="fade-up" delay={0.1}>
          <h1 className="about-heading">
            <span className="text-about">Projects</span> ( ) {"{"}
          </h1>
        </AnimatedSection>

        <AnimatedSection animation="fade-up" delay={0.2}>
          <div className="work-companies">
            <p>Some of my notable work</p>
          </div>
        </AnimatedSection>

        <section className="projects-container">
          <div className="project-grid stagger-animation">
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
          <p className="closing-bracket" style={{ marginLeft: "50px" }}>
            {"}"}
          </p>
        </section>
      </div>
    </section>
  );
};

export default Projects;
