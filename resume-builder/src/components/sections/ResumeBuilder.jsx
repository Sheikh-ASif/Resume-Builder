
import ResumeForm from "../forms/ResumeForm";
import ActionButtons from "../buttons/ActionButtons";

const ResumeBuilder = ({
  resumeData,
  handleChange,
  handleReset,
  handleDownload,
}) => {
  return (
    <section id="builder" className="resume-builder">
      <div className="section-heading">
        <h2>Create Your Resume</h2>
        <p>
          Fill in your details and watch your resume
          update instantly.
        </p>
      </div>

      <div className="builder-container">
        <div className="builder-form">

          <ResumeForm
            resumeData={resumeData}
            handleChange={handleChange}
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