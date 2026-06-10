import "./Hero.css";

function Hero() {
  return (
    <section id="home" className="hero-section">
      <div className="container">
        <div className="row align-items-center min-vh-100">

          {/* Kiri */}
          <div className="col-lg-6">
            <p className="hero-subtitle">
              Hello, I'm
            </p>

            <h1 className="hero-title">
              Tina Rizqiana
            </h1>

            <h3 className="hero-role">
              IT Enthusiast | Oracle ERP Administrator
            </h3>

            <p className="hero-description">
              Informatics Engineering graduate with experience in
              Inventory Planning, Oracle ERP Administration, and
              Web Development. Passionate about Information Systems,
              SQL Database, Business Process Improvement, and
              System Development.
            </p>

            <div className="hero-buttons">
              <a href="#projects" className="btn btn-primary me-3">
                Download CV
              </a>
            </div>
          </div>

          {/* Kanan */}
          <div className="col-lg-6 text-center">
            <img
              src="/profile.jpg"
              alt="Tina Rizqiana"
              className="hero-image"
            />
          </div>

        </div>
      </div>
    </section>
  );
}

export default Hero;