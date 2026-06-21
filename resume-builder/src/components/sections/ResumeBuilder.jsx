import ResumeForm from "../Forms/ResumeForm";
import ActionButtons from "../buttons/ActionButtons";

const ResumeBuilder = ({
  resumeData,
  handleChange,
  handleReset,
  handleDownload,
  handleAddSection,
  handleCustomSectionChange,
}) => {
  return (
    <section
      id="builder"
      className="resume-builder"
    >
      <div className="section-heading">
        <h2>Create Your Resume</h2>

        <p>
          Build a professional resume in
          real-time and customize it with
          your own sections.
        </p>
      </div>

      <div className="builder-container">
        <div className="builder-form">

          {/* Add Custom Section */}
          <div className="builder-tools">
            <button
              type="button"
              className="add-section-btn"
              onClick={handleAddSection}
            >
              ➕ Add Custom Section
            </button>
          </div>

          <ResumeForm
            resumeData={resumeData}
            handleChange={handleChange}
            handleCustomSectionChange={
              handleCustomSectionChange
            }
          />

          <ActionButtons
            handleDownload={handleDownload}
            handleReset={handleReset}
          />
        </div>
      </div>
    </section>
  );
};

export default ResumeBuilder;
