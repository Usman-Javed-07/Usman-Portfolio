const Footer = () => {
  return (
    <footer>
      <div className="footer-content">
        <img src="./images/logo.png" alt="Footer Logo" />
        <p>
          Designed loosely in <span className="footer-highlight">Figma</span>{" "}
          and coded in <span className="footer-highlight">VS Code</span> by
          yours very truly, <br />
          Fully <span className="footer-highlight">responsive</span> and
          optimized across all the devices. <br />
          built using <span className="footer-highlight">React</span> and{" "}
          <span className="footer-highlight">css</span>, deployed to{" "}
          <span className="footer-highlight">Netlify</span>.
        </p>
        <p>&copy; 2025 Usman Javed</p>
      </div>
    </footer>
  );
};

export default Footer;
