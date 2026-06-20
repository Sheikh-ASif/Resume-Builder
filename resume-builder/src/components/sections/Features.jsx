

const Features = () => {
  const features = [
    {
      title: "Live Preview",
      description:
        "See your resume update instantly as you type.",
      icon: "⚡",
    },
    {
      title: "PDF Export",
      description:
        "Download professional resumes in PDF format.",
      icon: "📄",
    },
    {
      title: "ATS Friendly",
      description:
        "Templates designed to work with ATS systems.",
      icon: "🎯",
    },
    {
      title: "Responsive Design",
      description:
        "Works perfectly on desktop, tablet, and mobile.",
      icon: "📱",
    },
    {
      title: "Easy Customization",
      description:
        "Edit and update your resume anytime.",
      icon: "✏️",
    },
    {
      title: "Professional Templates",
      description:
        "Choose from multiple modern resume layouts.",
      icon: "🚀",
    },
  ];

  return (
    <section id="features" className="features">
      <div className="section-heading">
        <h2>Why Choose ResumeForge?</h2>

        <p>
          Everything you need to build a professional
          resume quickly and easily.
        </p>
      </div>

      <div className="features-grid">
        {features.map((feature, index) => (
          <div
            key={index}
            className="feature-card"
          >
            <div className="feature-icon">
              {feature.icon}
            </div>

            <h3>{feature.title}</h3>

            <p>{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;