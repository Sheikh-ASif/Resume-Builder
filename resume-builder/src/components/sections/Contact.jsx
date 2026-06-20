// src/sections/Contact.jsx

const Contact = () => {
  return (
    <section id="contact" className="contact">
      <div className="contact-container">

        <div className="contact-info">
          <span className="section-tag">
            Get In Touch
          </span>

          <h2>
            Have Questions?
            We'd Love To Hear From You
          </h2>

          <p>
            Feel free to reach out for feedback,
            suggestions, or collaboration opportunities.
          </p>

          <div className="contact-details">
            <div className="contact-item">
              <h4>Email</h4>
              <p>your-email@gmail.com</p>
            </div>

            <div className="contact-item">
              <h4>GitHub</h4>
              <p>github.com/yourusername</p>
            </div>

            <div className="contact-item">
              <h4>LinkedIn</h4>
              <p>linkedin.com/in/yourprofile</p>
            </div>
          </div>
        </div>

        <form className="contact-form">
          <input
            type="text"
            placeholder="Your Name"
          />

          <input
            type="email"
            placeholder="Your Email"
          />

          <textarea
            rows="5"
            placeholder="Your Message"
          ></textarea>

          <button type="submit">
            Send Message
          </button>
        </form>

      </div>
    </section>
  );
};

export default Contact;