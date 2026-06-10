import "./Contact.css";

function Contact() {
  return (
    <section id="contact" className="contact-section">
      <div className="container">

        <div className="text-center mb-5">
          <h2 className="section-title">Contact Me</h2>
          <p className="section-subtitle">
            Let's connect and work together
          </p>
        </div>

        <div className="row justify-content-center">
          <div className="col-lg-8">

            <div className="contact-card">

              <div className="contact-item">
                📧
                <span>your-email@gmail.com</span>
              </div>

              <div className="contact-item">
                💼
                <span>linkedin.com/in/tina-rizqiana</span>
              </div>

              <div className="contact-item">
                💻
                <span>github.com/tinarizqiana</span>
              </div>

              <div className="contact-item">
                📍
                <span>Bekasi, Indonesia</span>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
}

export default Contact;