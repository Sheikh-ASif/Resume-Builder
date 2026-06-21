const ResumeForm = ({
  resumeData,
  handleChange,
  handleCustomSectionChange,
}) => {
  return (
    <div className="resume-form">

      {/* Personal Info */}
      <div className="form-section">
        <h3>👤 Personal Information</h3>

        <div className="input-group">
          <label>Full Name</label>
          <input
            type="text"
            name="name"
            placeholder="John Doe"
            value={resumeData.name}
            onChange={handleChange}
          />
        </div>

        <div className="input-row">
          <div className="input-group">
            <label>Email</label>
            <input
              type="email"
              name="email"
              placeholder="john@example.com"
              value={resumeData.email}
              onChange={handleChange}
            />
          </div>

          <div className="input-group">
            <label>Phone</label>
            <input
              type="text"
              name="phone"
              placeholder="+91 98765XXXXX"
              value={resumeData.phone}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="input-group">
          <label>Address</label>
          <input
            type="text"
            name="address"
            placeholder="Varanasi, Uttar Pradesh"
            value={resumeData.address}
            onChange={handleChange}
          />
        </div>
      </div>

      {/* Professional Profiles */}
      <div className="form-section">
        <h3>🌐 Professional Profiles</h3>

        <div className="input-group">
          <label>LinkedIn</label>
          <input
            type="text"
            name="linkedin"
            placeholder="https://linkedin.com/in/username"
            value={resumeData.linkedin}
            onChange={handleChange}
          />
        </div>

        <div className="input-group">
          <label>GitHub</label>
          <input
            type="text"
            name="github"
            placeholder="https://github.com/username"
            value={resumeData.github}
            onChange={handleChange}
          />
        </div>
      </div>

      {/* Summary */}
      <div className="form-section">
        <h3>📝 Professional Summary</h3>

        <div className="input-group">
          <textarea
            rows="5"
            name="summary"
            placeholder="Briefly describe yourself, your skills, achievements and career goals..."
            value={resumeData.summary}
            onChange={handleChange}
          />
        </div>
      </div>

      {/* Education */}
      <div className="form-section">
        <h3>🎓 Education</h3>

        <div className="input-group">
          <textarea
            rows="4"
            name="education"
            placeholder="B.Tech Computer Science | XYZ University | 2022 - 2026"
            value={resumeData.education}
            onChange={handleChange}
          />
        </div>
      </div>

      {/* Skills */}
      <div className="form-section">
        <h3>⚡ Skills</h3>

        <div className="input-group">
          <textarea
            rows="3"
            name="skills"
            placeholder="React, JavaScript, Node.js, MongoDB..."
            value={resumeData.skills}
            onChange={handleChange}
          />
        </div>
      </div>

      {/* Experience */}
      <div className="form-section">
        <h3>💼 Experience</h3>

        <div className="input-group">
          <textarea
            rows="5"
            name="experience"
            placeholder="Describe your work experience..."
            value={resumeData.experience}
            onChange={handleChange}
          />
        </div>
      </div>

      {/* Projects */}
      <div className="form-section">
        <h3>🚀 Projects</h3>

        <div className="input-group">
          <textarea
            rows="5"
            name="projects"
            placeholder="Describe your key projects..."
            value={resumeData.projects}
            onChange={handleChange}
          />
        </div>
      </div>

      {/* Certifications */}
      <div className="form-section">
        <h3>🏆 Certifications</h3>

        <div className="input-group">
          <textarea
            rows="4"
            name="certifications"
            placeholder="AWS Cloud Practitioner, Meta Frontend Developer..."
            value={resumeData.certifications}
            onChange={handleChange}
          />
        </div>
      </div>

      {/* Dynamic Custom Sections */}
      {resumeData.customSections?.map(
        (section) => (
          <div
            key={section.id}
            className="form-section custom-section"
          >
            <h3>✨ {section.title}</h3>

            <div className="input-group">
              <textarea
                rows="4"
                placeholder={`Enter ${section.title} details...`}
                value={section.content}
                onChange={(e) =>
                  handleCustomSectionChange(
                    section.id,
                    e.target.value
                  )
                }
              />
            </div>
          </div>
        )
      )}
    </div>
  );
};

export default ResumeForm;

