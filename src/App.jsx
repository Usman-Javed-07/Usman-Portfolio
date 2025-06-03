import { useState } from "react";
import "./App.css";
import { FaWhatsapp, FaGithub, FaLinkedin, FaLongArrowAltRight, FaBars, FaTimes } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaGreaterThan } from "react-icons/fa";
import { FaLessThan } from "react-icons/fa";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <header className="navbar">
        <nav className="navbar-container">
          <div className="navbar-logo">
            <a href="#">
              <img className="logo-image" src="./images/logo.png" alt="logo image" />
            </a>
          </div>

          <div className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <FaTimes /> : <FaBars />}
          </div>

          <ul className={`navbar-links ${menuOpen ? "active" : ""}`}>
            <li><a href="#"><FaWhatsapp /></a></li>
            <li><a href="#"><MdEmail /></a></li>
            <li><a href="#"><FaGithub /></a></li>
            <li><a href="#"><FaLinkedin /></a></li>
            <li className="resume-link">
              <a className="resume" href="#">
                Resume <span className="arrow"><FaLongArrowAltRight /></span>
              </a>
            </li>
          </ul>
        </nav>
           <div>
        <section className="hero">
          <div className="hero-content">
             <p className="header-para">Hello <span class="wave">👋</span> I'm  </p>
         <span className="header-heading"> <span className="code-icon"> <FaLessThan /></span>Usman <br /> Javed/<span className="code-icon"><FaGreaterThan /></span></span>
             <p className="header-para">Full Stack Web Developer</p>
          </div>
        </section>
      </div>
      </header>
   

    </>
  );
}

export default App;
