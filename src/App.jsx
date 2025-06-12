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
      </header>

      {/* Main Content */}
      <main className="main-content">
        <section className="about">
          <h1 className="about-heading">
            {" "}
            <span className="text-about">About</span> ( ) {"{"}{" "}
          </h1>
          <p className="about-para">
            I'm a passionate Full Stack Developer skilled in building modern,
            responsive, and user-friendly web applications using JavaScript and
            React.js. I have a strong grasp of component-based architecture,
            hooks, state management, and routing. On the backend, I work with
            Node.js and Express to create clean and efficient RESTful APIs. I’m
            confident in integrating third-party APIs and developing dynamic,
            data-driven features. With experience in Git, GitHub, and modern
            development tools, I thrive in fast-paced team environments and
            always aim to deliver high-quality, on-time results.
          </p>
          <p className="aboutwork-para">#open_to_work #open_to_relocation</p>
          <div className="resume-link more-about-me">
            <a
              className="resume"
              href="/Usman javed(web developer).pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              more about me{" "}
              <span className="arrow">
                <FaLongArrowAltRight />
              </span>
            </a>
          </div>
          <div className="my-accounts">
            <ul className={"account-links"}>
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
            </ul>
          </div>{" "}
          <br /> <br />
          <h1 className="about-heading">{"}"} </h1>
        </section>
      </main>

      <section className="work-section">
        <div className="work-companies">
          <p>Companies I'm proud to have collaborated with</p>
        </div>
        <div style={{ overflow: "hidden", width: "100%" }}>
          <div className="company-logo">
            <img src="./images/solslogo.png" alt="sols" />
            <img src="./images/zbeelogo.png" alt="zbee" />
            <img src="./images/solslogo.png" alt="sols" />
            <img src="./images/zbeelogo.png" alt="zbee" />
            <img src="./images/solslogo.png" alt="sols" />
            <img src="./images/zbeelogo.png" alt="zbee" />
            <img src="./images/solslogo.png" alt="sols" />
            <img src="./images/zbeelogo.png" alt="zbee" />
            <img src="./images/solslogo.png" alt="sols" />
            <img src="./images/zbeelogo.png" alt="zbee" />
            <img src="./images/solslogo.png" alt="sols" />
            <img src="./images/zbeelogo.png" alt="zbee" />
            <img src="./images/solslogo.png" alt="sols" />
            <img src="./images/zbeelogo.png" alt="zbee" />
          </div>
        </div>
      </section>

      <section className="projects-section">
        <div className="projects">
          <h1 className="about-heading">
            {" "}
            <span className="text-about">Projects</span> ( ) {"{"}{" "}
          </h1>

          <div className="work-companies">
            <p>Some of my notable work</p>
          </div>
          <section className="projects-container">
            <div className="project-grid">
              <div className="project-card">
                <img src="./images/solslogo.png" alt="sols" />
                <h4>Cara E-commerce website</h4>

                <a
                  href="https://github.com/Usman-Javed-07/Html-Css-design-6"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {" "}
                  caraEcom.com
                </a>

                <p>
                  Cara is a modern online shopping platform specializing in
                  fashionable clothing. Customers can explore a wide range of
                  trendy outfits for men, women, and kids. With a user-friendly
                  interface and secure checkout.
                </p>
              </div>
              {/*  */}
              <div className="project-card">
                  <img src="./images/zbeelogo.png" alt="zbee" />
                <h4>Private Artwork Management</h4>
                <a
                  href="https://github.com/Usman-Javed-07/Artwork-management-frontend"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {" "}
                  Artwork.Management.com
                </a>

                <p>
                  Private Artwork Management is an art-focused website
                  showcasing a diverse collection of unique artworks. It
                  features creative pieces inspired by everyday objects like
                  cups, paper, and floral themes.
                </p>
              </div>
            </div>
            {/*  */}
          </section>
        </div>
      </section>
    </>
  );
}

export default App;
