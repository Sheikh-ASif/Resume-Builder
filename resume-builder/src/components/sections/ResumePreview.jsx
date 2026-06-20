// src/sections/ResumePreview.jsx

const ResumePreview = ({ resumeData }) => {
  return (
    <section className="resume-preview-section">
      <div
        className="resume-preview"
        id="resume-preview"
      >
        {/* Resume Header */}
        <div className="resume-header">
          <h1>
            {resumeData.name || "Your Name"}
          </h1>

          <div className="resume-contact">
            <span>
              {resumeData.email || "your@email.com"}
            </span>

            <span>
              {resumeData.phone || "+91 9876543210"}
            </span>

            <span>
              {resumeData.address || "Your Address"}
            </span>
          </div>

          {(resumeData.linkedin || resumeData.github) && (
            <div className="resume-links">
              {resumeData.linkedin && (
                <p>
                  <strong>LinkedIn:</strong>{" "}
                  {resumeData.linkedin}
                </p>
              )}

              {resumeData.github && (
                <p>
                  <strong>GitHub:</strong>{" "}
                  {resumeData.github}
                </p>
              )}
            </div>
          )}
        </div>

        {/* Summary */}
        <div className="resume-section">
          <h2>Professional Summary</h2>

          <p>
            {resumeData.summary ||
              "Your professional summary will appear here."}
          </p>
        </div>

        {/* Education */}
        <div className="resume-section">
          <h2>Education</h2>

          <p>
            {resumeData.education ||
              "Your education details will appear here."}
          </p>
        </div>

        {/* Skills */}
        <div className="resume-section">
          <h2>Skills</h2>

          <p>
            {resumeData.skills ||
              "Your skills will appear here."}
          </p>
        </div>

        {/* Experience */}
        <div className="resume-section">
          <h2>Experience</h2>

          <p>
            {resumeData.experience ||
              "Your work experience will appear here."}
          </p>
        </div>

        {/* Projects */}
        <div className="resume-section">
          <h2>Projects</h2>

          <p>
            {resumeData.projects ||
              "Your projects will appear here."}
          </p>
        </div>

        {/* Certifications */}
        <div className="resume-section">
          <h2>Certifications</h2>

          <p>
            {resumeData.certifications ||
              "Your certifications will appear here."}
          </p>
        </div>
      </div>
    </section>
  );
};

export default ResumePreview;