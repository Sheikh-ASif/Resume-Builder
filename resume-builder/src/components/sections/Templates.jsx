

const Templates = () => {
  const templates = [
    {
      id: 1,
      title: "Modern",
      description:
        "Clean and stylish design for modern professionals.",
    },
    {
      id: 2,
      title: "Professional",
      description:
        "Perfect for corporate and business roles.",
    },
    {
      id: 3,
      title: "Minimal",
      description:
        "Simple ATS-friendly resume layout.",
    },
  ];

  return (
    <section id="templates" className="templates">
      <div className="section-heading">
        <h2>Resume Templates</h2>
        <p>
          Choose from professionally designed resume
          layouts.
        </p>
      </div>

      <div className="template-grid">
        {templates.map((template) => (
          <div
            className="template-card"
            key={template.id}
          >
            <div className="template-preview">
              <div className="template-top"></div>

              <div className="template-lines">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>

            <h3>{template.title}</h3>

            <p>{template.description}</p>

            <button className="template-btn">
              Use Template
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Templates;