import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>

        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>

          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Production Employee</h4>
                <h5>BMW Group – Werk Regensburg</h5>
              </div>
              <h3>2025</h3>
            </div>
            <p>
              Worked in engine assembly production under takt-time conditions.
              Performed component assembly, quality checks, and supported
              smooth production flow while maintaining BMW manufacturing
              standards.
            </p>
          </div>

          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Production Supervisor</h4>
                <h5>Rajshree Engineering Pvt. Ltd.</h5>
              </div>
              <h3>2023 – 2024</h3>
            </div>
            <p>
              Supervised front axle assembly production for commercial
              vehicles. Responsible for production planning, defect analysis,
              quality control, and implementing continuous improvement methods
              like PDCA and Kaizen.
            </p>
          </div>

          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Graduate Engineer Trainee</h4>
                <h5>Tata Motors</h5>
              </div>
              <h3>2022 – 2023</h3>
            </div>
            <p>
              Assisted in component design validation and production
              processes. Applied lean manufacturing techniques, prepared
              technical documentation, and supported testing of mechanical
              systems.
            </p>
          </div>

          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Graduate Engineer Trainee</h4>
                <h5>Wonder Cement Ltd.</h5>
              </div>
              <h3>2021</h3>
            </div>
            <p>
              Gained hands-on experience in cement manufacturing processes.
              Assisted with production monitoring, documentation, and process
              optimization in an industrial environment.
            </p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Career;