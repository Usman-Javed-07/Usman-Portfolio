// App.js
import { useState } from "react";
import "./App.css";
import {
  FaWhatsapp,
  FaGithub,
  FaLinkedin,
  FaLongArrowAltRight,
  FaBars,
  FaTimes,
  FaGreaterThan,
  FaLessThan,
} from "react-icons/fa";
import { PiLineVerticalThin } from "react-icons/pi";
import { MdEmail } from "react-icons/md";
import Typewriter from "./Typewriter.jsx";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <header className="navbar">
        <nav className="navbar-container">
          <div className="navbar-logo">
            <a href="#">
              <img
                className="logo-image"
                src="./images/logo.png"
                alt="logo image"
              />
            </a>
          </div>

          <div className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <FaTimes /> : <FaBars />}
          </div>

          <ul className={`navbar-links ${menuOpen ? "active" : ""}`}>
            <li>
              <a
                href="https://wa.me/+923415477580"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaWhatsapp />
              </a>
            </li>
            <li>
              <a
                href="mailto:usmanjaved0816@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <MdEmail />
              </a>
            </li>
            <li>
              <a
                href="https://github.com/Usman-Javed-07"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub />
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/usman-javed07/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin />
              </a>
            </li>
            <li className="resume-link">
              <a
                className="resume"
                href="/Usman javed(web developer).pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Resume{" "}
                <span className="arrow">
                  <FaLongArrowAltRight />
                </span>
              </a>
            </li>
          </ul>

        </nav>
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
              Full Stack <Typewriter text="Web Developer" />
            </p>
          </div>
        </section>

          <div className="sidebar-icons">
             <ul className={"sidebar-links"}>
            <li>
              <a
                href="https://wa.me/+923415477580"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaWhatsapp />
              </a>
            </li>
            <li>
              <a
                href="mailto:usmanjaved0816@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <MdEmail />
              </a>
            </li>
            <li>
              <a
                href="https://github.com/Usman-Javed-07"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub />
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/usman-javed07/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin />
              </a>
            </li>
            <li>
              <span className="icon-bar"><PiLineVerticalThin /></span>
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
      </header>
    </>
  );
}

export default App;
