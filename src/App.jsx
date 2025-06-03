import "./App.css";
import { FaWhatsapp } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaLongArrowAltRight } from "react-icons/fa";
function App() {
  return (
    <>
      {/* navbar */}
      <header className="navbar">
        <nav className="navbar-container">
          <div className="navbar-logo">
            <a href="#"> <img className="logo-image" src="./images/logo.png" alt="logo image" /></a>
          </div>
          <ul className="navbar-links">
            <li><a href="#"><FaWhatsapp /></a></li>
            <li><a href="#"><MdEmail /></a></li>
            <li><a href="#"><FaGithub /></a></li>
            <li><a href="#"><FaLinkedin /></a></li>
            <li className="resume-link"><a className="resume" href="#">Resume <span className="arrow"><FaLongArrowAltRight /></span> </a></li>
            
           
          </ul>
        </nav>

      </header>
    </>
  );
}

export default App;
