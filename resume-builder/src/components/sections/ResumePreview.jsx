const ResumePreview = ({ resumeData }) => {
  const skills = resumeData.skills
    ? resumeData.skills
        .split(",")
        .map((skill) => skill.trim())
        .filter(Boolean)
    : [];

  return (
    <section className="resume-preview-section">
      <div
        className="resume-preview"
        id="resume-preview"
      >
        {/* Header */}
        <header className="resume-header">
          <h1 className="resume-name">
            {resumeData.name || "Your Name"}
          </h1>

          <div className="resume-contact">
            <span>
              📧 {resumeData.email || "your@email.com"}
            </span>

            <span>
              📱 {resumeData.phone || "+91 98765 XXXXX"}
            </span>

            <span>
              📍 {resumeData.address || "Your Address"}
            </span>
          </div>

          {(resumeData.linkedin ||
            resumeData.github) && (
            <div className="resume-links">
              {resumeData.linkedin && (
                <a
                  href={resumeData.linkedin}
                  target="_blank"
                  rel="noreferrer"
                >
                  LinkedIn
                </a>
              )}

              {resumeData.github && (
                <a
                  href={resumeData.github}
                  target="_blank"
                  rel="noreferrer"
                >
                  GitHub
                </a>
              )}
            </div>
          )}
        </header>

        {/* Summary */}
        <section className="resume-section">
          <h2>Professional Summary</h2>

          <div className="resume-content">
            {resumeData.summary ||
              "Write a short summary about yourself, your skills, achievements and career goals."}
          </div>
        </section>

        {/* Skills */}
        <section className="resume-section">
          <h2>Skills</h2>

          {skills.length > 0 ? (
            <div className="skills-container">
              {skills.map((skill, index) => (
                <span
                  key={index}
                  className="skill-tag"
                >
                  {skill}
                </span>
              ))}
            </div>
          ) : (
            <div className="skills-container">
              {[
                "JavaScript",
                "React",
                "Node.js",
                "MongoDB",
                "HTML",
                "CSS",
              ].map((skill) => (
                <span
                  key={skill}
                  className="skill-tag"
                >
                  {skill}
                </span>
              ))}
            </div>
          )}
        </section>

        {/* Education */}
        <section className="resume-section">
          <h2>Education</h2>

          <div className="resume-content">
            {resumeData.education ||
              "Bachelor of Technology in Computer Science"}
          </div>
        </section>

        {/* Experience */}
        <section className="resume-section">
          <h2>Experience</h2>

          <div className="resume-content">
            {resumeData.experience ||
              "Describe your internships, jobs, responsibilities, and achievements here."}
          </div>
        </section>

        {/* Projects */}
        <section className="resume-section">
          <h2>Projects</h2>

          <div className="resume-content">
            {resumeData.projects ||
              "Mention your key projects, technologies used, and outcomes."}
          </div>
        </section>

        {/* Certifications */}
        <section className="resume-section">
          <h2>Certifications</h2>

          <div className="resume-content">
            {resumeData.certifications ||
              "List your certifications and completed courses here."}
          </div>
        </section>

        {/* Custom Sections */}
        {resumeData.customSections?.map(
          (section) => (
            <section
              key={section.id}
              className="resume-section custom-preview-section"
            >
              <h2>{section.title}</h2>

              <div className="resume-content">
                {section.content ||
                  `Add details for ${section.title}`}
              </div>
            </section>
          )
        )}
      </div>
    </section>
  );
};

export default ResumePreview;
