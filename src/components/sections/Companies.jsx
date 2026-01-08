const Companies = () => {
  const companyLogos = [
    { src: "./images/solslogo.png", alt: "sols" },
    { src: "./images/zbeelogo.png", alt: "zbee" },
  ];

  return (
    <section className="work-section">
      <div className="work-companies">
        <p>Companies I'm proud to have collaborated with</p>
      </div>
      <div style={{ overflow: "hidden", width: "100%" }}>
        <div className="company-logo">
          {Array(7)
            .fill(companyLogos)
            .flat()
            .map((logo, index) => (
              <img key={index} src={logo.src} alt={logo.alt} />
            ))}
        </div>
      </div>
    </section>
  );
};

export default Companies;
