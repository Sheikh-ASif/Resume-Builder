

const Footer = () => {
  return (
    <footer
      style={{
        marginTop: "100px",
        background: "linear-gradient(135deg, #111827, #0f172a)",
        color: "#fff",
        padding: "60px 20px 30px",
        borderTop: "1px solid rgba(255,255,255,0.08)",
        boxShadow: "0 -10px 30px rgba(0,0,0,0.25)"
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "auto",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
          gap: "40px",
          textAlign: "left"
        }}
      >
        {/* Brand */}
        <div>
          <h2
            style={{
              fontSize: "24px",
              fontWeight: "800",
              marginBottom: "10px"
            }}
          >
            Resume<span style={{ color: "#6ea47f" }}>Forge</span>
          </h2>

          <p style={{ color: "#cbd5e1", lineHeight: "1.6" }}>
            Build professional resumes in minutes.
          </p>
        </div>

        {/* Developer */}
        <div>
          <h3
            style={{
              fontSize: "18px",
              marginBottom: "10px",
              fontWeight: "700"
            }}
          >
            Developer
          </h3>

          <p style={{ color: "#cbd5e1", marginBottom: "5px" }}>
            Md Asif Sheikh
          </p>

          <p style={{ color: "#94a3b8" }}>
            email:{" mdasif74083@gmail.com"}
          </p>
        </div>

        {/* Link */}
        <div>
          <a
            href="/https://digitalheroesco.com"
            target="_blank"
            rel="noreferrer"
            style={{
              display: "inline-block",
              padding: "12px 18px",
              borderRadius: "999px",
              background: "#6ea47f",
              color: "#fff",
              textDecoration: "none",
              fontWeight: "600",
              transition: "0.3s",
              boxShadow: "0 8px 20px rgba(110,164,127,0.3)"
            }}
            onMouseOver={(e) => {
              e.target.style.transform = "translateY(-3px)";
              e.target.style.background = "#5a8f6b";
            }}
            onMouseOut={(e) => {
              e.target.style.transform = "translateY(0)";
              e.target.style.background = "#6ea47f";
            }}
          >
            Built for Digital Heroes
          </a>
        </div>
      </div>

      {/* Bottom */}
      <div
        style={{
          marginTop: "40px",
          textAlign: "center",
          fontSize: "14px",
          color: "#94a3b8",
          borderTop: "1px solid rgba(255,255,255,0.08)",
          paddingTop: "20px"
        }}
      >
        © {new Date().getFullYear()} ResumeForge. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;