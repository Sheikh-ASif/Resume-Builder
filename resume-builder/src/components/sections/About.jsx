// src/sections/About.jsx

const About = () => {
  return (
    <section id="about" className="about">
      <div className="about-container">

        <div className="about-left">
          <span className="section-tag">
            About ResumeForge
          </span>

          <h2>
            Helping Job Seekers Create
            Professional Resumes Faster
          </h2>

          <p>
            ResumeForge was built to simplify the
            resume creation process. Instead of
            spending hours formatting documents,
            users can focus on showcasing their
            skills and experience.
          </p>

          <p>
            Whether you're a student, fresher,
            freelancer, or experienced professional,
            ResumeForge helps you create clean,
            ATS-friendly resumes in minutes.
          </p>

          <div className="about-stats">
            <div>
              <h3>10K+</h3>
              <p>Resumes Generated</p>
            </div>

            <div>
              <h3>100%</h3>
              <p>Free to Use</p>
            </div>

            <div>
              <h3>24/7</h3>
              <p>Available Online</p>
            </div>
          </div>
        </div>

        <div className="about-right">
          <div className="about-card">
            <h3>Our Mission</h3>

            <p>
              To make resume building simple,
              accessible, and professional for
              everyone.
            </p>
          </div>

          <div className="about-card">
            <h3>Our Vision</h3>

            <p>
              Empower job seekers with modern
              tools that increase their chances
              of getting hired.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;