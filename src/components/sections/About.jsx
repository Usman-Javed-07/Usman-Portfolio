import { FaLongArrowAltRight } from "react-icons/fa";
import SocialLinks from "../ui/SocialLinks";
import AnimatedSection from "../common/AnimatedSection";

const About = () => {
  return (
    <section className="about">
      <AnimatedSection animation="fade-up" delay={0.1}>
        <h1 className="about-heading">
          <span className="text-about">About</span> ( ) {"{"}
        </h1>
      </AnimatedSection>
      <AnimatedSection animation="fade-up" delay={0.2}>
        <p className="about-para">
        I'm a passionate Full Stack Developer skilled in building modern,
        responsive, and user-friendly web applications using JavaScript and
        React.js. I have a strong grasp of component-based architecture,
        hooks, state management, and routing. On the backend, I work with
        Node.js and Express to create clean and efficient RESTful APIs. I'm
        confident in integrating third-party APIs and developing dynamic,
        data-driven features. With experience in Git, GitHub, and modern
        development tools, I thrive in fast-paced team environments and
        always aim to deliver high-quality, on-time results.
      </p>
      </AnimatedSection>
      <AnimatedSection animation="fade-up" delay={0.3}>
        <p className="aboutwork-para">#open_to_work #open_to_relocation</p>
      </AnimatedSection>
      <AnimatedSection animation="fade-up" delay={0.4}>
        <div className="resume-link more-about-me">
        <a
          className="resume"
          href="/Usman Javed (Software Engineer).pdf"
          target="_blank"
          rel="noopener noreferrer"
        >
          more about me{" "}
          <span className="arrow">
            <FaLongArrowAltRight />
          </span>
        </a>
        </div>
      </AnimatedSection>
      <AnimatedSection animation="fade-up" delay={0.5}>
        <div className="my-accounts">
        <ul className="account-links">
          <SocialLinks />
        </ul>
        </div>
      </AnimatedSection>
      <br /> <br />
      <AnimatedSection animation="fade-up" delay={0.6}>
        <h1 className="about-heading">{"}"}</h1>
      </AnimatedSection>
    </section>
  );
};

export default About;
