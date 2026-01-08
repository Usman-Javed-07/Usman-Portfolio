import { useState } from "react";
import { FaBars, FaTimes, FaLongArrowAltRight } from "react-icons/fa";
import SocialLinks from "../ui/SocialLinks";
import OptimizedImage from "../common/OptimizedImage";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar-container">
      <div className="navbar-logo">
        <a href="#">
          <OptimizedImage className="logo-image" src="./images/logo.png" alt="logo image" priority={true} loading="eager" />
        </a>
      </div>

      <div className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? <FaTimes /> : <FaBars />}
      </div>

      <ul className={`navbar-links ${menuOpen ? "active" : ""}`}>
        <SocialLinks showText={true} />
        <li className="resume-link">
          <a
            className="resume"
            href="/Usman Javed (Software Engineer).pdf"
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
  );
};

export default Navbar;
