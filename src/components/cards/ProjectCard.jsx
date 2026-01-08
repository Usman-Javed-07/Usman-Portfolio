import { useState, useEffect } from "react";
import { RiChatPrivateFill } from "react-icons/ri";
import { IoIosCloseCircle } from "react-icons/io";
import OptimizedImage from "../common/OptimizedImage";

const ProjectCard = ({ project }) => {
  const [showModal, setShowModal] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    setIsTouchDevice("ontouchstart" in window || navigator.maxTouchPoints > 0);
  }, []);

  const handleClick = (e) => {
    if (isTouchDevice && project.text) {
      e.preventDefault();
      setShowModal(true);
    }
  };

  return (
    <div className="project-card hover-lift">
      <OptimizedImage src={project.image} alt={project.title} />
      <h4>{project.title}</h4>

      <div className="Private-repo">
        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          onMouseEnter={() =>
            !isTouchDevice && project.text && setShowModal(true)
          }
          onMouseLeave={() => !isTouchDevice && setShowModal(false)}
          onClick={handleClick}
        >
          {project.displayLink}
        </a>

        {project.text && <span className="repo-style">{project.text}</span>}

        {showModal && (
          <div className="tooltip-box">
            <h2 className="modal-heading">
              <RiChatPrivateFill
                style={{
                  marginRight: "8px",
                  fontSize: "2.25rem",
                  position: "relative",
                  top: "10px",
                }}
              />
              Private Repository
            </h2>
            <p>
              This repository contains confidential data and personal
              credentials. Unfortunately, the code cannot be shared publicly.
              Thank you for understanding.
            </p>
            {isTouchDevice && (
              <button
                onClick={() => setShowModal(false)}
                className="modal-close-btn"
              >
                <IoIosCloseCircle />
              </button>
            )}
          </div>
        )}
      </div>

      <p>{project.description}</p>
    </div>
  );
};

export default ProjectCard;
