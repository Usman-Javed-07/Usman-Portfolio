import { FaLessThan, FaGreaterThan } from "react-icons/fa";
import { PiLineVerticalThin } from "react-icons/pi";
import Typewriter from "../common/Typewriter";
import SocialLinks from "../ui/SocialLinks";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <p className="header-para">
          Hello <span className="wave">👋</span> I'm
        </p>
        <span className="header-heading">
          <span className="code-icon">
            <FaLessThan />
          </span>
          Usman <br /> Javed/
          <span className="code-icon">
            <FaGreaterThan />
          </span>
        </span>
        <p className="header-para">
          <Typewriter
            texts={["Full Stack Web Developer", "MERN Stack Developer"]}
          />
        </p>
      </div>

      <div className="sidebar-icons">
        <ul className="sidebar-links">
          <SocialLinks />
          <li>
            <span className="icon-bar">
              <PiLineVerticalThin />
            </span>
          </li>
        </ul>
      </div>

      <div className="my-image">
        <img src="./images/usman.png" alt="my image" />
      </div>
      <div className="node-icon">
        <img src="./images/nod.png" alt="node js" />
      </div>
      <div className="js-icon">
        <img src="./images/js.png" alt="js" />
      </div>
      <div className="react-icon">
        <img src="./images/react.png" alt="react" />
      </div>
      <div className="html-icon">
        <img src="./images/html.png" alt="html" />
      </div>
    </section>
  );
};

export default Hero;
