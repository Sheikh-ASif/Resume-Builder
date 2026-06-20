// src/sections/Hero.jsx

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="hero-content">

        <div className="hero-left">
          <span className="hero-badge">
            Professional Resume Builder
          </span>

          <h1>
            Build Your Dream
            <span> Resume </span>
            In Minutes
          </h1>

          <p>
            Create professional, ATS-friendly resumes with
            real-time preview and PDF export. No design
            skills required.
          </p>

          <div className="hero-buttons">
            <a href="#builder">
              <button className="primary-btn">
                Create Resume
              </button>
            </a>

            <a href="#templates">
              <button className="secondary-btn">
                View Templates
              </button>
            </a>
          </div>

          <div className="hero-stats">
            <div>
              <h3>10K+</h3>
              <p>Resumes Created</p>
            </div>

            <div>
              <h3>98%</h3>
              <p>User Satisfaction</p>
            </div>

            <div>
              <h3>PDF</h3>
              <p>Instant Export</p>
            </div>
          </div>
        </div>

        <div className="hero-right">
          <div className="resume-card">
            <div className="card-header">
              Resume Preview
            </div>

            <div className="card-content">
              <h2>John Doe</h2>

              <p>Frontend Developer</p>

              <hr />

              <h4>Skills</h4>

              <ul>
                <li>React</li>
                <li>JavaScript</li>
                <li>Node.js</li>
              </ul>

              <h4>Experience</h4>

              <p>
                3+ Years Experience in Web Development
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;