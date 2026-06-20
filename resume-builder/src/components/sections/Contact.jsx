

const Contact = () => {
  return (
    <section id="contact" className="contact">
      <div className="contact-container">

        <div className="contact-info">
          <span className="section-tag">
            Get In Touch
          </span>

          <h2>
            Have Questions? <br />
            We'd Love To Hear From You
          </h2>

          <p>
            Feel free to reach out for feedback,
            suggestions, or collaboration opportunities.
          </p>

          <div className="contact-details">

            {/* Email */}
            <div className="contact-item">
              <h4>Email</h4>
              <a
                href="mdasif74083@gmail.com"
                target="_blank"
                rel="noreferrer"
                style={{ color: "#6ea47f", textDecoration: "none", fontWeight: "500" }}
              >
                mdasif74083@gmail.com
              </a>
            </div>

            {/* GitHub */}
            <div className="contact-item">
              <h4>GitHub</h4>
              <a
                href="https://github.com/Sheikh-ASif"
                target="_blank"
                rel="noreferrer"
                style={{ color: "#6ea47f", textDecoration: "none", fontWeight: "500" }}
              >
                github.com/Sheikh-ASif
              </a>
            </div>

            {/* LinkedIn */}
            <div className="contact-item">
              <h4>LinkedIn</h4>
              <a
                href="https://www.linkedin.com/in/md-asif-sheikh-74b3b52b8"
                target="_blank"
                rel="noreferrer"
                style={{ color: "#6ea47f", textDecoration: "none", fontWeight: "500" }}
              >
                linkedin.com/in/md-asif-sheikh-74b3b52b8
              </a>
            </div>

          </div>
        </div>

        {/* Form */}
        <form className="contact-form">
          <input type="text" placeholder="Your Name" />
          <input type="email" placeholder="Your Email" />
          <textarea rows="5" placeholder="Your Message"></textarea>

          <button type="submit">
            Send Message
          </button>
        </form>

      </div>
    </section>
  );
};

export default Contact;