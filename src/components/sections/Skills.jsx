const Skills = () => {
  const skillImages = [
    { src: "./images/htmllogo.png", alt: "html logo" },
    { src: "./images/css.png", alt: "css logo" },
    { src: "./images/Angular.png", alt: "angular logo" },
    { src: "./images/js.png", alt: "js logo" },
    { src: "./images/react.png", alt: "react logo" },
    { src: "./images/nodejs.png", alt: "node js logo" },
    { src: "./images/express.png", alt: "express js logo" },
    { src: "./images/mongodb.png", alt: "mongodb logo" },
    { src: "./images/mysql.png", alt: "mysql logo" },
    { src: "./images/tailwind.png", alt: "tailwind logo" },
    { src: "./images/bootstrap.png", alt: "bootstrap logo" },
    { src: "./images/github.png", alt: "github logo" },
    { src: "./images/git.png", alt: "git logo" },
  ];

  return (
    <section className="my-skills-section">
      <div className="work-companies">
        <p>Technologies I have used</p>
      </div>
      <div className="skills-container">
        <div className="skills-slider">
          <div className="my-skills">
            {skillImages.map((skill, index) => (
              <img key={index} src={skill.src} alt={skill.alt} />
            ))}
            {skillImages.map((skill, index) => (
              <img key={`duplicate-${index}`} src={skill.src} alt={skill.alt} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
