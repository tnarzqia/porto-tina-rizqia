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

              <a className="btn bg-primary px-10 py-3 rounded-lg text-white hover:bg-primary-dark" href="mailto:tnarzqiana20@gmail.com">Contact Me</a>

              <div className="contact-item">
                <a href="https://www.linkedin.com/in/tina-rizqiana-2498000/">Linkedin</a>
              </div>

              <div className="contact-item">
                <a href="https://github.com/tnarzqia">Github</a>
              </div>

              <div className="contact-item">
                <span>Karawang, Indonesia</span>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
}

export default Contact;