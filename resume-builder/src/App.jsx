import { useState } from "react";

import Header from "./components/layout/Header.jsx";
import Footer from "./components/layout/Footer.jsx";

import Hero from "./components/sections/Hero.jsx";
import Templates from "./components/sections/Templates.jsx";
import Features from "./components/sections/Features.jsx";
import About from "./components/sections/About.jsx";
import Contact from "./components/sections/Contact.jsx";
import ResumeBuilder from "./components/sections/ResumeBuilder.jsx";
import ResumePreview from "./components/sections/ResumePreview.jsx";

import { INITIAL_RESUME_DATA } from "./components/utils/constants";
import { downloadResumePDF } from "./components/utils/pdfGenerator";

function App() {
  const [resumeData, setResumeData] = useState({
    ...INITIAL_RESUME_DATA,
    customSections: [],
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setResumeData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleReset = () => {
    setResumeData({
      ...INITIAL_RESUME_DATA,
      customSections: [],
    });
  };

  const handleDownload = () => {
    downloadResumePDF();
  };

  // Add custom section
  const handleAddSection = () => {
    const title = prompt(
      "Enter section name (Example: Achievements, Languages, Extracurricular Activities)"
    );

    if (!title?.trim()) return;

    setResumeData((prev) => ({
      ...prev,
      customSections: [
        ...prev.customSections,
        {
          id: Date.now(),
          title,
          content: "",
        },
      ],
    }));
  };

  // Update custom section content
  const handleCustomSectionChange = (
    id,
    value
  ) => {
    setResumeData((prev) => ({
      ...prev,
      customSections:
        prev.customSections.map((section) =>
          section.id === id
            ? {
                ...section,
                content: value,
              }
            : section
        ),
    }));
  };

  return (
    <>
      <Header />

      <main>
        <Hero />

        <Templates />

        <Features />

        <About />

        <section
          id="builder"
          className="resume-builder-wrapper"
        >
          <ResumeBuilder
            resumeData={resumeData}
            handleChange={handleChange}
            handleReset={handleReset}
            handleDownload={handleDownload}
            handleAddSection={handleAddSection}
            handleCustomSectionChange={
              handleCustomSectionChange
            }
          />

          <ResumePreview
            resumeData={resumeData}
          />
        </section>

        <Contact />
      </main>

      <Footer />
    </>
  );
}

export default App;

