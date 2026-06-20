
const ResumeForm = ({
  resumeData,
  handleChange,
}) => {
  return (
    <>
      <div className="input-group">
        <label>Full Name</label>
        <input
          type="text"
          name="name"
          value={resumeData.name}
          onChange={handleChange}
        />
      </div>

      <div className="input-group">
        <label>Email</label>
        <input
          type="email"
          name="email"
          value={resumeData.email}
          onChange={handleChange}
        />
      </div>

      <div className="input-group">
        <label>Phone</label>
        <input
          type="text"
          name="phone"
          value={resumeData.phone}
          onChange={handleChange}
        />
      </div>

      <div className="input-group">
        <label>Address</label>
        <input
          type="text"
          name="address"
          value={resumeData.address}
          onChange={handleChange}
        />
      </div>

      <div className="input-group">
        <label>LinkedIn</label>
        <input
          type="text"
          name="linkedin"
          value={resumeData.linkedin}
          onChange={handleChange}
        />
      </div>

      <div className="input-group">
        <label>GitHub</label>
        <input
          type="text"
          name="github"
          value={resumeData.github}
          onChange={handleChange}
        />
      </div>

      <div className="input-group">
        <label>Professional Summary</label>
        <textarea
          rows="4"
          name="summary"
          value={resumeData.summary}
          onChange={handleChange}
        />
      </div>

      <div className="input-group">
        <label>Education</label>
        <textarea
          rows="4"
          name="education"
          value={resumeData.education}
          onChange={handleChange}
        />
      </div>

      <div className="input-group">
        <label>Skills</label>
        <textarea
          rows="4"
          name="skills"
          value={resumeData.skills}
          onChange={handleChange}
        />
      </div>

      <div className="input-group">
        <label>Experience</label>
        <textarea
          rows="4"
          name="experience"
          value={resumeData.experience}
          onChange={handleChange}
        />
      </div>

      <div className="input-group">
        <label>Projects</label>
        <textarea
          rows="4"
          name="projects"
          value={resumeData.projects}
          onChange={handleChange}
        />
      </div>

      <div className="input-group">
        <label>Certifications</label>
        <textarea
          rows="4"
          name="certifications"
          value={resumeData.certifications}
          onChange={handleChange}
        />
      </div>
    </>
  );
};

export default ResumeForm;