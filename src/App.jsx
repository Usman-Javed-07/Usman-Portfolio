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

const projectsData = [
  {
    image: './images/solslogo.png',
    title: 'Cara E-commerce website',
    link: 'https://github.com/Usman-Javed-07/Html-Css-design-6',
    displayLink: 'caraEcom.com',
    description:
      'Cara is a modern online shopping platform specializing in fashionable clothing. Customers can explore a wide range of trendy outfits for men, women, and kids. With a user-friendly interface and secure checkout.',
  },
  {
    image: './images/zbeelogo.png',
    title: 'Private Artwork Management',
    link: 'https://github.com/Usman-Javed-07/Artwork-management-frontend',
    displayLink: 'Artwork.Management.com',
    description:
      'Private Artwork Management is an art-focused website showcasing a diverse collection of unique artworks. It features creative pieces inspired by everyday objects like cups, paper, and floral themes.',
  },
  {
    image: './images/freelancerlogo.png',
    title: 'Ai Mental Health Therapist',
    link: 'https://github.com/Usman-Javed-07/Ai-mental-Health-Frontend',
    displayLink: 'AiMHT.com',
    description:
      'AI Mental Health Therapist is a virtual assistant that helps you understand and manage stress, anxiety, and depression. It offers quick, personalized support for better mental well-being.',
  },
  {
    image: './images/zbeelogo.png',
    title: 'Slot Machine',
    link: 'https://github.com/Usman-Javed-07/Slot-machine',
    displayLink: 'slotmachine.com',
    description:
      'Slot Machine is a engaging game that simulates the experience of playing a real slot machine. Spin the reels and try your luck to win exciting prizes and rewards.',
  },
  {
    image: './images/zbeelogo.png',
    title: '4 week Qtr',
    link: 'https://github.com/Usman-Javed-07/4-week-qtr',
    displayLink: 'weekQtr.com',
    description:
      '4 Week QTR is a personalized routine management project where users can set monthly goals, daily targets, and receive 3 customizable notifications per day at preferred times.',
  },
  {
    image: './images/solslogo.png',
    title: 'Quizzical App',
    link: 'https://github.com/Usman-Javed-07/quizzicalApp',
    displayLink: 'quizzical.com',
    description:
      'Quizzical is a quiz app with subjects like Computer Science, Music, Animals, Sports, and more. It shows user scores and correct answers at the end, helping users test and improve their knowledge.',
  },
    {
    image: './images/solslogo.png',
    title: 'Hug or shrug',
    link: 'https://github.com/Usman-Javed-07/html-css-design-5',
    displayLink: 'Hug.shrug.com',
    description:
      'Hug or Shrug is a fun web app for entertainment where users can share and rate things like brands, lifestyle choices, habits, hobbies, and more. Its a lighthearted way to express opinions and see what others think.'
  },
     {
    image: './images/zbeelogo.png',
    title: 'XRCHIV',
    link: 'https://github.com/Usman-Javed-07/Xarchive',
    displayLink: 'xrchiv.com',
    description:
      'XRCHIV is a application built for efficient data management and visualization. The project provides a streamlined user interface with robust features for creating, viewing, and managing data archives.'
  },
   {
    image: './images/zbeelogo.png',
    title: 'Plate Of Africa',
    link: 'https://github.com/Usman-Javed-07/Plate-of-Africa',
    displayLink: 'Plate-Of-Africa.com',
    description:
      'Plate of Africa is a restaurant website where users can explore the menu, place orders, and pay online seamlessly. It offers a smooth and convenient dining experience from browsing to checkout.'
  },
  {
    image: './images/zbeelogo.png',
    title: 'character image',
    link: 'https://github.com/Usman-Javed-07/character-image-backend',
    displayLink: 'character-image.com',
    description:
      'Character Image is a Shopify store where users can browse and purchase merchandise featuring their favorite characters. It offers a fun and personalized shopping experience for fans of all kinds.'
  },
   {
    image: './images/zbeelogo.png',
    title: 'atlas-ai',
    link: 'https://github.com/Usman-Javed-07/atlasAi',
    displayLink: 'atlas-ai.com',
    description:
      'This application enables users to interact with an AI through text or voice, choose from a variety of AI personas, and seamlessly send emails via the Gmail API.'
  },
   {
    image: './images/zbeelogo.png',
    title: 'Clothing Store',
    link: 'https://github.com/Usman-Javed-07/clothing-store-backend',
    displayLink: 'ClothingStore.com',
    description:
      'Clothing Store is an e-commerce website where users can browse and purchase apparel online, add items to their cart, and complete secure payments with ease.'
  },
   {
    image: './images/zbeelogo.png',
    title: 'Opic 3D',
    link: 'https://github.com/Usman-Javed-07/Opic-3D',
    displayLink: 'opic3d.com',
    description:
      'Opic 3D is a mobile app similar to TikTok, allowing users to create, share, and explore engaging short-form 3D videos.'
  },
    {
    image: './images/solslogo.png',
    title: 'Thapa store',
    link: 'https://github.com/Usman-Javed-07/ecom-project',
    displayLink: 'thapa.com',
    description:
      'Thapa is an online store offering mobiles, laptops, and accessories with sections like Products, Explore, and Checkout for a smooth shopping experience.',
  },
];


const ProjectCard = ({ project }) => (
  <div className="project-card">
    <img src={project.image} alt={project.title} />
    <h4>{project.title}</h4>
    <a href={project.link} target="_blank" rel="noopener noreferrer">
      {project.displayLink}
    </a>
    <p>{project.description}</p>
  </div>
);

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showAll, setShowAll] = useState(false);
  const visibleProjects = showAll ? projectsData : projectsData.slice(0, 4);

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
            {visibleProjects.map((project, index) => (
              <ProjectCard key={index} project={project} />
            ))}
          </div>

          {projectsData.length > 4 && (
            <div style={{ textAlign: 'center' }}>
              <a
                onClick={() => setShowAll(!showAll)}
                className="resume viewmore-btn"
              >
                {showAll ? 'Close' : 'View All Projects'}
                 <span className="arrow">
                <FaLongArrowAltRight />
              </span>
              </a>
            </div>
          )}
         <p style={{ fontSize: '24px', fontWeight: 500, marginLeft: '50px'}}>{"}"}{" "}</p>
        </section>
      </div>
    </section>
    </>
  );
}

export default App;
