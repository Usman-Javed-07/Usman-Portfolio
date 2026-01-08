import { experiencesData } from "../../data/experiences";
import ExperienceCard from "../cards/ExperienceCard";
import AnimatedSection from "../common/AnimatedSection";

const Experience = () => {
  return (
    <section className="my-experience-section">
      <AnimatedSection animation="fade-up" delay={0.1}>
        <div className="projects my-experience">
          <h1 className="about-heading">
            <span className="text-about">Experience</span> ( ) {"{"}
          </h1>
        </div>
      </AnimatedSection>

      <div className="experience-container stagger-animation">
        {experiencesData.map((exp, idx) => (
          <ExperienceCard key={idx} {...exp} />
        ))}
        <p
          style={{
            fontSize: "24px",
            fontWeight: 500,
            marginLeft: "5px",
            color: "#fff",
          }}
        >
          {"}"}
        </p>
      </div>
    </section>
  );
};

export default Experience;
