import { useState } from "react";
import "./Projects.css";

function Projects() {
    const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
  {
    title: "CLIT Monitoring System",
    tech: "ASP.NET • SQL Server • Bootstrap",
    image: "/clit-project.jpg",
    description:
      "Web-based system developed for PPC department to validate CLIT data and improve checking efficiency.",
    features: [
      "CLIT Data Validation",
      "Monitoring Dashboard",
      "Reporting System",
      "User-Friendly Interface",
    ],
  },

  {
    title: "Inventory Dashboard",
    tech: "Looker Studio • SQL • Excel",
    image: "/inventory-dashboard.jpg",
    description:
      "Dashboard for monitoring stock availability and inventory performance.",
    features: [
      "Stock Monitoring",
      "Material Requirement Analysis",
      "KPI Dashboard",
      "Visual Reports",
    ],
  },

  {
    title: "Oracle ERP Monitoring",
    tech: "Oracle ERP • Reporting • Analysis",
    image: "/oracle-monitoring.jpg",
    description:
      "Monitoring operational transactions including DO, MO, FPB, NCR and Interorg Transfer.",
    features: [
      "DO Monitoring",
      "MO Monitoring",
      "NCR Tracking",
      "Transaction Analysis",
    ],
  },

  {
    title: "Portfolio Website",
    tech: "React JS • Bootstrap • Vercel",
    image: "/portfolio-project.jpg",
    description:
      "Responsive personal portfolio website built using React JS.",
    features: [
      "Responsive Design",
      "Bootstrap Components",
      "Project Showcase",
      "Contact Section",
    ],
  },
];

  return (
    <section id="projects" className="projects-section">
      <div className="container">

        <div className="text-center mb-5">
          <h2 className="section-title">Projects</h2>
          <p className="section-subtitle">
            Some of my recent work
          </p>
        </div>

        <div className="row g-4">
          {projects.map((project, index) => (
            <div className="col-lg-6" key={index}>
              <div className="project-card">

                <h4>{project.title}</h4>

                <span className="project-tech">
                  {project.tech}
                </span>

                <p>{project.description}</p>

                <button
                    className="btn btn-outline-primary"
                    onClick={() => setSelectedProject(project)}
                    >
                    View Details
                </button>

              </div>
            </div>
          ))}
        </div>

      </div>

      {/* section modal */}
      {selectedProject && (
            <div
                className="custom-modal-overlay"
                onClick={() => setSelectedProject(null)}
            >
                <div
                className="custom-modal"
                onClick={(e) => e.stopPropagation()}
                >
                <button
                    className="close-btn"
                    onClick={() => setSelectedProject(null)}
                >
                    ✕
                </button>

                <img
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    className="modal-image"
                />

                <h3>{selectedProject.title}</h3>

                <p className="project-tech">
                    {selectedProject.tech}
                </p>

                <p>{selectedProject.description}</p>

                <h5>Features</h5>

                <ul>
                    {selectedProject.features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                    ))}
                </ul>
                </div>
            </div>
            )}

    </section>
  );
}

export default Projects;