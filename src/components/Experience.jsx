import "./Experience.css";

function Experience() {
  return (
    <section id="experience" className="experience-section">
      <div className="container">

        <div className="text-center mb-5">
          <h2 className="section-title">Experience</h2>
          <p className="section-subtitle">
            My professional journey
          </p>
        </div>

        <div className="timeline">

          {/* Experience 1 */}
          <div className="timeline-item">
            <div className="timeline-content">
              <h4>Oracle ERP Administrator</h4>

              <span className="timeline-date">
                Current Position
              </span>

              <ul>
                <li>
                  Monitor operational transactions including
                  DO, MO, FPB, NCR, and Interorg Transfer.
                </li>

                <li>
                  Ensure transaction accuracy and completeness
                  within Oracle ERP.
                </li>

                <li>
                  Coordinate with related departments to resolve
                  transaction issues.
                </li>

                <li>
                  Support business process efficiency through
                  ERP monitoring and reporting.
                </li>
              </ul>
            </div>
          </div>

          {/* Experience 2 */}
          <div className="timeline-item">
            <div className="timeline-content">
              <h4>Inventory Planner</h4>

              <span className="timeline-date">
                Current Position
              </span>

              <ul>
                <li>
                  Analyze material requirements based on
                  production planning.
                </li>

                <li>
                  Monitor stock availability and material readiness.
                </li>

                <li>
                  Coordinate with Production, Warehouse,
                  QA and PPIC.
                </li>

                <li>
                  Create inventory reservation requests and
                  support inventory control processes.
                </li>
              </ul>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

export default Experience;