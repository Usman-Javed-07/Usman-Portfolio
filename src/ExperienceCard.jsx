import React, { useState } from "react";
import { FaLongArrowAltRight } from "react-icons/fa";

const ExperienceCard = ({ logo, alt, dateRange, title, points }) => {
  const [showAll, setShowAll] = useState(false);
  const visiblePoints = showAll ? points : points?.slice(0, 4);

  return (
    <div className="experience-card">
      <div className="company-logo--img">
        <img src={logo} alt={alt} />
        <div className="work-months">
          <p>{dateRange}</p>
          <h4>{title}</h4>
        </div>
      </div>
      <div className="work-description">
        <ul className="experience-list">
          {visiblePoints.map((point, index) => (
            <li key={index} className="experience-point">
              {point}
            </li>
          ))}
        </ul>
        {points.length > 3 && (
          <a onClick={() => setShowAll(!showAll)} className="toggle-btn resume">
            {showAll ? "Close" : "Read More"}
            <span className="arrow">
              <FaLongArrowAltRight />
            </span>
          </a>
        )}
      </div>
    </div>
  );
};

export default ExperienceCard;
