import OptimizedImage from "../common/OptimizedImage";
import AnimatedSection from "../common/AnimatedSection";

const Companies = () => {
  const companyLogos = [
    { src: "./images/solslogo.png", alt: "sols" },
    { src: "./images/zbeelogo.png", alt: "zbee" },
  ];

  return (
    <section className="work-section">
      <AnimatedSection animation="fade-up" delay={0.1}>
        <div className="work-companies">
          <p>Companies I'm proud to have collaborated with</p>
        </div>
      </AnimatedSection>
      <div style={{ overflow: "hidden", width: "100%" }}>
        <div className="company-logo">
          {Array(10)
            .fill(companyLogos)
            .flat()
            .map((logo, index) => (
              <OptimizedImage key={index} src={logo.src} alt={logo.alt} />
            ))}
        </div>
      </div>
    </section>
  );
};

export default Companies;
