

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">

        <div className="footer-brand">
          <h2>ResumeForge</h2>
          <p>
            Build professional resumes in minutes.
          </p>
        </div>

        <div className="footer-contact">
          <h3>Developer</h3>

          <p>
            Sheikh Asif
          </p>

          <p>
            your-email@gmail.com
          </p>
        </div>

        <div className="footer-links">
          <a
            href="https://digitalheroesco.com"
            target="_blank"
            rel="noreferrer"
            className="digital-heroes-btn"
          >
            Built for Digital Heroes
          </a>
        </div>

      </div>

      <div className="footer-bottom">
        © {new Date().getFullYear()} ResumeForge.
        All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;