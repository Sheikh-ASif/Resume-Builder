
const ActionButtons = ({
  handleDownload,
  handleReset,
}) => {
  return (
    <div className="builder-actions">

      <button
        type="button"
        className="download-btn"
        onClick={handleDownload}
      >
        Download PDF
      </button>

      <button
        type="button"
        className="reset-btn"
        onClick={handleReset}
      >
        Reset Resume
      </button>

    </div>
  );
};

export default ActionButtons;