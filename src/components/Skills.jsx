import "./Skills.css";

function Skills() {
  const skills = [
    "SQL",
    "ASP.NET",
    "React JS",
    "JavaScript",
    "Bootstrap",
    "HTML",
    "CSS",
    "Inventory Planning",
    "Data Analysis",
    "Looker Studio",
    "Microsoft Excel",
    "Git & GitHub",
  ];

  return (
    <section id="skills" className="skills-section">
      <div className="container">

        <div className="text-center mb-5">
          <h2 className="section-title">My Skills</h2>
          <p className="section-subtitle">
            Technologies and tools I work with
          </p>
        </div>

        <div className="row g-4">
          {skills.map((skill, index) => (
            <div className="col-md-4 col-sm-6" key={index}>
              <div className="skill-card">
                <h5>{skill}</h5>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Skills;