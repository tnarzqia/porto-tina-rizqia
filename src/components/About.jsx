import "./About.css";

function About() {
  return (
    <section id="about" className="about-section">
      <div className="container">

        <div className="text-center mb-5">
          <h2 className="section-title">About Me</h2>
          <p className="section-subtitle">
            Get to know me better
          </p>
        </div>

        <div className="row align-items-center">

          <div className="col-lg-6">
            <img
              src="/about-image.jpg"
              alt="About Me"
              className="about-image"
            />
          </div>

          <div className="col-lg-6">
            <h3 className="about-heading">
              Informatics Engineering Graduate
            </h3>

            <p className="about-text">
              I am an Informatics Engineering graduate with experience
              in Inventory Planning and Oracle ERP Administration.
              My responsibilities include monitoring operational
              transactions, analyzing material requirements,
              and ensuring data accuracy across business processes.
            </p>

            <p className="about-text">
              I have an interest in SQL Database, System Development,
              Data Analysis, and ERP Systems. I enjoy learning new
              technologies and solving business problems through
              technology-driven solutions.
            </p>

            <div className="about-info">
              <div>
                <strong>Name:</strong> Tina Rizqiana
              </div>

              <div>
                <strong>Email:</strong> your-email@gmail.com
              </div>

              <div>
                <strong>Location:</strong> Bekasi, Indonesia
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default About;