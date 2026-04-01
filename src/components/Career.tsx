import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          Education <span>&</span>
          <br /> Certifications
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>B.Tech in Information Technology</h4>
                <h5>Bhagwan Parshuram Institute of Technology (GGSIPU), Delhi</h5>
              </div>
              <h3>2024-2028</h3>
            </div>
            <p>
              SGPA: 8.4/10.0
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Class XII (CBSE)</h4>
                <h5>Khemo Devi Public School, Delhi</h5>
              </div>
              <h3>2024</h3>
            </div>
            <p>
              Score: 85%
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Class X (CBSE)</h4>
                <h5>St. Xavier's Sr. Sec. School, Delhi</h5>
              </div>
              <h3>2022</h3>
            </div>
            <p>
              Score: 87.2%
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Certifications</h4>
                <h5>Forage Job Simulations</h5>
              </div>
              <h3>2025</h3>
            </div>
            <p>
              Solutions Architecture Job Simulation (Sept 2025)<br/>
              Software Engineering Job Simulation (Oct 2025)
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
