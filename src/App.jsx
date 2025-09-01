// App.js
// import { useState } from "react";
import { useState, useEffect } from "react";
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
  FaArrowUp,
} from "react-icons/fa";
import { PiLineVerticalThin } from "react-icons/pi";
import { MdEmail } from "react-icons/md";
import Typewriter from "./Typewriter.jsx";
import ExperienceCard from "./ExperienceCard";

const projectsData = [
    {
    image: "./images/zbeelogo.png",
    title: "Private Artwork Management",
    link: "https://github.com/Usman-Javed-07/Artwork-management-frontend",
    displayLink: "Artwork.Management.com",
    text: "Private Repository",
    description:
      "Developed a Private Artwork Management System with features such as user authentication, artwork creation, editing, deletion, and advanced filter and search options by title, name, year, category, technique, location, and medium. Each user can view and manage only their own artworks with secure login, password updates, and detailed view pages. Admin has full control over user accounts, including accepting or declining new requests, banning users, and updating user passwords. Users cannot log in until their account is approved by the admin. Implemented protected routes with role-based access, where moderators and users only see the routes allowed for their role during login. Built using React, Node.js, Express.js, MySQL, and CSS.",
  },
 {
    image: "./images/zbeelogo.png",
    title: "Slot Machine",
    link: "https://github.com/Usman-Javed-07/Slot-machine",
    displayLink: "slotmachine.com",
    description:
      "Developed a Slot Machine game with smooth animations and responsive UI, focusing on interactive design and realtime feedback. Implemented spin functionality with randomized outcomes, a Winning Amount modal to display results after each spin, a Mega Win modal that appears only when the winning amount is greater than 600, and a Free Spin feature where the slot machine automatically spins for the awarded free spins. Designed with a clean component-based architecture for scalability and easy maintenance. Built using ReactJS, Vite, and CSS.",
  },
  {
    image: "./images/solslogo.png",
    title: "Cara E-commerce website",
    link: "https://github.com/Usman-Javed-07/Html-Css-design-6",
    displayLink: "caraEcom.com",
    description:
      "Cara is an e-commerce website with a simple and responsive design. It includes features like adding and removing items from the cart, saving products to favorites, checkout, and payment options. Users can search for products, apply filters, and browse easily with a smooth shopping experience. Built using HTML, CSS, JavaScript, Node.js, Express.js, Tailwind CSS, CSS and MongoDB..",
  },

  {
    image: "./images/freelancerlogo.png",
    title: "Ai Mental Health Therapist",
    link: "https://github.com/Usman-Javed-07/Ai-mental-Health-Frontend",
    displayLink: "AiMHT.com",
    description:
      "Built a Mental Health Therapist platform that provides users with an AI-powered chatbot to support their mental health concerns. Users can ask about stress, anxiety, or depression and receive personalized responses. The platform also recommends songs, videos, and articles based on each user’s needs, offering a holistic approach to mental well-being. Developed using React, Node.js,Express.js, CSS and MongoDB.",
  },
 
  {
    image: "./images/zbeelogo.png",
    title: "4 week Qtr",
    link: "https://github.com/Usman-Javed-07/4-week-qtr",
    displayLink: "weekQtr.com",
    description:
      "Built a 4-Week-Qtr Goal Tracker that allows users to create and manage weekly goals while keeping track of their progress over time. The system sends notifications four times a day based on the user’s goal date, helping them stay on track and consistent. It includes secure authentication, goal management features like add, edit, and delete, and real-time reminders for better productivity. Designed with a clean and responsive interface to make goal tracking simple and effective. Developed using Angular, Node.js,Express.js, CSS and MySQL..",
  },
  {
    image: "./images/solslogo.png",
    title: "Quizzical App",
    link: "https://github.com/Usman-Javed-07/quizzicalApp",
    displayLink: "quizzical.com",
    description:
      " Built a dynamic quiz application that fetches data from an API and provides multiple categories including Entertainment, Music, Education, and Cricket. Implemented randomized question selection to ensure a unique experience each time the quiz is taken. Added functionality to calculate and display the final score out of the total marks at the end of the quiz. Developed using JavaScript, HTML, CSS, and Tailwind CSS.",
  },
  {
    image: "./images/solslogo.png",
    title: "Hug or shrug",
    link: "https://github.com/Usman-Javed-07/html-css-design-5",
    displayLink: "Hug.shrug.com",
    description:
      "Hug or Shrug is a fun web app for entertainment where users can share and rate things like brands, lifestyle choices, habits, hobbies, and more. Its a lighthearted way to express opinions and see what others think.",
  },
  {
    image: "./images/zbeelogo.png",
    title: "XRCHIV",
    link: "https://github.com/Usman-Javed-07/Xarchive",
    displayLink: "xrchiv.com",
    description:
      "XRCHIV is a application built for efficient data management and visualization. The project provides a streamlined user interface with robust features for creating, viewing, and managing data archives.",
  },
  {
    image: "./images/zbeelogo.png",
    title: "Plate Of Africa",
    link: "https://github.com/Usman-Javed-07/Plate-of-Africa",
    displayLink: "Plate-Of-Africa.com",
    description:
      "Plate of Africa is a restaurant website where users can explore the menu, place orders, and pay online seamlessly. It offers a smooth and convenient dining experience from browsing to checkout.",
  },
  {
    image: "./images/zbeelogo.png",
    title: "character image",
    link: "https://github.com/Usman-Javed-07/character-image-backend",
    displayLink: "character-image.com",
    description:
      "Character Image is a Shopify store where users can browse and purchase merchandise featuring their favorite characters. It offers a fun and personalized shopping experience for fans of all kinds.",
  },
  {
    image: "./images/zbeelogo.png",
    title: "atlas-ai",
    link: "https://github.com/Usman-Javed-07/atlasAi",
    displayLink: "atlas-ai.com",
    description:
      "This application enables users to interact with an AI through text or voice, choose from a variety of AI personas, and seamlessly send emails via the Gmail API.",
  },
  {
    image: "./images/zbeelogo.png",
    title: "Clothing Store",
    link: "https://github.com/Usman-Javed-07/clothing-store-backend",
    displayLink: "ClothingStore.com",
    description:
      "Built a full featured e-commerce clothing store with user authentication, protected routes for users, a shopping cart, checkout system, and an admin panel to manage products, orders, and users. Added search functionality to help users find products easily and designed a responsive interface that works smoothly with the backend for a better shopping experience. Developed using HTML, CSS, JavaScript, Node.js, Express.js and MySQL.",
  },
  {
    image: "./images/zbeelogo.png",
    title: "Opic 3D",
    link: "https://github.com/Usman-Javed-07/Opic-3D",
    displayLink: "opic3d.com",
    description:
      "Opic 3D is a mobile app similar to TikTok, allowing users to create, share, and explore engaging short-form 3D videos.",
  },
  {
    image: "./images/freelancerlogo.png",
    title: "Thapa store",
    link: "https://github.com/Usman-Javed-07/ecom-project",
    displayLink: "thapa.com",
    description:
      "Thapa is an online store offering mobiles, laptops, and accessories with sections like Products, Explore, and Checkout for a smooth shopping experience.",
  },
  {
    image: "./images/freelancerlogo.png",
    title: "World Atlas",
    link: "https://github.com/Usman-Javed-07/react-project-",
    displayLink: "worldatlas.com",
    description:
      "World Atlas is a project that provides key details of every country, including native name, population, region, capital, currency, domain, and languages.",
  },
  {
    image: "./images/solslogo.png",
    title: "Moshify",
    link: "https://github.com/Usman-Javed-07/Html_Css_Design_1",
    displayLink: "moshify.com",
    description:
      "Moshify is a simple cloud hosting website built for practice It showcases modern design using HTML and CSS. Great for learning layout, responsiveness, and styling basics.",
  },
  {
    image: "./images/solslogo.png",
    title: "Industrial supplies",
    link: "https://github.com/Usman-Javed-07/Html_Css_Design_2nd",
    displayLink: "industrial-supplies.com",
    description:
      "Industrial Supplies is a comprehensive online platform offering a wide range of industrial products and services. It connects suppliers and buyers, streamlining the procurement process.",
  },
  {
    image: "./images/solslogo.png",
    title: "Space Scan 3D",
    link: "https://github.com/Usman-Javed-07/Html_Css_Design_3",
    displayLink: "space.scan3d.com",
    description:
      "Space Scan 3D is a simple HTML and CSS project designed to showcase a premier 3D virtual tour service provider based in the North Bay, offering immersive and interactive digital experiences.",
  },
  {
    image: "./images/solslogo.png",
    title: "Figma Land",
    link: "https://github.com/Usman-Javed-07/html-css-design-4",
    displayLink: "figmaland.com",
    description:
      "Figmaland is a simple HTML and CSS design project inspired by Figma — where the best products begin their journey.",
  },
  {
    image: "./images/freelancerlogo.png",
    title: "Airline Booking System",
    link: "https://github.com/Usman-Javed-07/AirlineFrontend",
    displayLink: "airline.com",
    description:
      "Airline is a full-stack web application featuring dedicated panels for users, admins, and employees. Users can book tickets, choose travel classes (Economy, Business, Luxury), select meals, arrange taxis for arrival or departure, and manage luggage. The system supports secure online payments, route management, and ticket cancellation up to one day before the flight.",
  },
];
const experiences = [
    {
    logo: "./images/zbeelogo.png",
    alt: "zbee tech",
    dateRange: "Dec 2024 - present",
    title: "Full stack Developer ( MERN stack Developer )",
    points: [
      "Worked as a Full Stack Developer on high-impact projects for enterprise clients using React, Angular, Node.js, and React Native.",
      "Developed frontend user interfaces with HTML, CSS, Tailwind, and vanilla JavaScript, ensuring responsive design and accessibility.",
      "Integrated Stripe payment gateway into web applications to enable secure online transactions.",
      "Built scalable backend services using Node.js and Express, with RESTful APIs for seamless frontend-backend communication.",
      "Collaborated in cross-functional teams to deliver full lifecycle software solutions, from architecture to deployment.",
      "Handled both client-facing UI components and backend logic, contributing to complete end-to-end development pipelines.",
      "Debugged, tested, and optimized applications for performance, responsiveness, and usability across multiple platforms.",
      "Maintained clean, reusable codebases with Git version control and agile collaboration methods.",
    ],
  },
  {
    logo: "./images/solslogo.png",
    alt: "Sols",
    dateRange: "Aug 2024 - Nov 2024",
    title: "Full Stack Developer",
    points: [
      "Led end-to-end development of full stack web applications using React, Node.js, Express.js, and MongoDB/MySQL for real-world projects and practice-based learning.",
      "Built and deployed multiple frontend interfaces focusing on responsive design, user experience, and component reusability with modern JavaScript and CSS frameworks.",
      "Designed and implemented RESTful APIs and handled backend logic including authentication, CRUD operations, and database integration.",
      "Developed and maintained full stack projects, connecting frontend and backend seamlessly to demonstrate dynamic data flow and user interaction.",
      "Collaborated in Git-based workflows, managing branches, pull requests, and version control across projects for better team coordination and deployment readiness.",
      "Participated in code reviews, debugging, and optimization, improving performance and code quality across all developed modules.",
      "Worked closely with mentors and peers in Agile-style development cycles, consistently meeting feature delivery targets and deadlines.",
      "Gained hands-on experience in API integration, secure login (JWT), data validation, and deployment processes on platforms like Render and Vercel.",
      "Practiced translating UI/UX designs from tools like Figma into live interactive components, adhering to accessibility and usability best practices.",
      "Explored and applied modern development practices including state management, form handling, and responsive grid systems to enhance user interaction.",
    ],
  },
];

const ProjectCard = ({ project }) => (
  <div className="project-card">
    <img src={project.image} alt={project.title} />
    <h4>{project.title}</h4>
    <div>
<a href={project.link} target="_blank" rel="noopener noreferrer">
      {project.displayLink}
    </a>
    {/* <span>{project.text}</span> */}
    </div>
    
    <p>{project.description}</p>
  </div>
);


function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showAll, setShowAll] = useState(false);
  const visibleProjects = showAll ? projectsData : projectsData.slice(0, 4);
  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScroll(window.scrollY > 200); // Show after 200px scroll
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

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
                <FaWhatsapp /> <p className="sidebar-link-text">WhatsApp</p>
              </a>
            </li>
            <li>
              <a
                href="mailto:usmanjaved0816@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <MdEmail /> <p className="sidebar-link-text">Email</p>
              </a>
            </li>
            <li>
              <a
                href="https://github.com/Usman-Javed-07"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub /> <p className="sidebar-link-text">GitHub</p>
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/usman-javed07/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin /> <p className="sidebar-link-text">LinkedIn</p>
              </a>
            </li>
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
  <Typewriter texts={["Full Stack Web Developer", "MERN Stack Developer"]} />
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
        {showScroll && (
  <button className="scroll-to-top" onClick={scrollToTop}>
    <FaArrowUp />
  </button>
)}
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
              <div style={{ textAlign: "center" }}>
                <a
                  onClick={() => setShowAll(!showAll)}
                  className="resume viewmore-btn"
                >
                  {showAll ? "Close" : "View All Projects"}
                  <span className="arrow">
                    <FaLongArrowAltRight />
                  </span>
                </a>
              </div>
            )}
            <p
              style={{ fontSize: "24px", fontWeight: 500, marginLeft: "50px" }}
            >
              {"}"}{" "}
            </p>
          </section>
        </div>
      </section>

      <section className="my-skills-section">
        <div className="work-companies">
          <p>Technologies I have used</p>
        </div>
        <div className="skills-container">
          <div className="skills-slider">
            <div className="my-skills">
              <img src="./images/htmllogo.png" alt="html logo" />
              <img src="./images/css.png" alt="css logo" />
              <img src="./images/Angular.png" alt="angular logo" />
              <img src="./images/js.png" alt="js logo" />
              <img src="./images/react.png" alt="react logo" />
              <img src="./images/nodejs.png" alt="node js logo" />
              <img src="./images/express.png" alt="express js logo" />
              <img src="./images/mongodb.png" alt="mongodb logo" />
              <img src="./images/mysql.png" alt="mysql logo" />
              <img src="./images/tailwind.png" alt="tailwind logo" />
              <img src="./images/bootstrap.png" alt="bootstrap logo" />
              <img src="./images/github.png" alt="github logo" />
              <img src="./images/git.png" alt="git logo" />

              {/* duplicate images */}

              <img src="./images/htmllogo.png" alt="html logo" />
              <img src="./images/css.png" alt="css logo" />
              <img src="./images/Angular.png" alt="angular logo" />
              <img src="./images/js.png" alt="js logo" />
              <img src="./images/react.png" alt="react logo" />
              <img src="./images/nodejs.png" alt="node js logo" />
              <img src="./images/express.png" alt="express js logo" />
              <img src="./images/mongodb.png" alt="mongodb logo" />
              <img src="./images/mysql.png" alt="mysql logo" />
              <img src="./images/tailwind.png" alt="tailwind logo" />
              <img src="./images/bootstrap.png" alt="bootstrap logo" />
              <img src="./images/github.png" alt="github logo" />
              <img src="./images/git.png" alt="git logo" />
            </div>
          </div>
        </div>
      </section>
      <section className="my-experience-section">
        <div className="projects my-experience">
          <h1 className="about-heading">
            {" "}
            <span className="text-about">Experience</span> ( ) {"{"}{" "}
          </h1>
        </div>

        <div className="experience-container">
          {experiences.map((exp, idx) => (
            <ExperienceCard key={idx} {...exp} />
          ))}
         <p
              style={{ fontSize: "24px", fontWeight: 500, marginLeft: "5px", color:"#fff" }}
            >
              {"}"}{" "}
            </p>
        </div>
      </section>

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
    </>
  );
}

export default App;
