import "./contact.css";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { useState } from "react";
import { FaInstagram, FaLinkedin } from "react-icons/fa";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        "service_5tnirt2",
        "template_i1hibdi",
        formData,
        "de1maxHu7fZqI72or",
      )
      .then(
        () => {
          alert("Message sent successfully!");
          setFormData({
            name: "",
            email: "",
            phone: "",
            message: "",
          });
          setLoading(false);
        },
        (error) => {
          console.log("FAILED...", error.text);
          alert("Something went wrong. Check console.");
          setLoading(false);
        },
      );
  };

  return (
    <div className="page">
      <main>
        <section className="contact-hero" id="contact">
          <div className="container contact-grid">
            {/* LEFT SIDE */}
            <div className="contact-copy">
              <p className="eyebrow">Contact</p>
              <h1>Let’s build something clear, creative, and effective.</h1>
              <p className="lead">
                Whether you need a brand voice, campaign copy, or a simple
                conversation about your next project, this is the place to
                start.
              </p>

              <div className="contact-points">
                <a
                  className="contact-point"
                  href="mailto:karimbarkatt1@gmail.com"
                >
                  <Mail size={18} />
                  <span>karimbarkatt1@gmail.com</span>
                </a>

                <a className="contact-point" href="tel:+201025587792">
                  <Phone size={18} />
                  <span>+20 1025587792</span>
                </a>

                <div className="contact-point">
                  <MapPin size={18} />
                  <span>Cairo, Egypt</span>
                </div>
              </div>

              <div className="social-row">
                <a
                  className="social-link"
                  href="https://www.instagram.com/karimbarkaat"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaInstagram size={18} />
                  Instagram
                </a>

                <a
                  className="social-link"
                  href="https://www.linkedin.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaLinkedin size={18} />
                  LinkedIn
                </a>
              </div>
            </div>

            {/* RIGHT SIDE */}
            <div className="contact-card">
              <div className="form-header">
                <p>Send a message</p>
                <h2>Tell me about your project</h2>
                <p className="form-subtitle">
                  A short message is enough to start.
                </p>
              </div>

              <form className="contact-form" onSubmit={sendEmail}>
                <div className="form-row">
                  <label>
                    Name
                    <input
                      required
                      value={formData.name}
                      onChange={handleChange}
                      name="name"
                      type="text"
                      placeholder="Your name"
                    />
                  </label>

                  <label>
                    Email
                    <input
                      required
                      value={formData.email}
                      onChange={handleChange}
                      name="email"
                      type="email"
                      placeholder="Your email"
                    />
                  </label>

                  <label>
                    Phone
                    <input
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      name="phone"
                      type="tel"
                      placeholder="Your phone number"
                    />
                  </label>
                </div>

                <label>
                  Project brief
                  <textarea
                    required
                    rows="6"
                    value={formData.message}
                    onChange={handleChange}
                    name="message"
                    placeholder="Tell me a little about what you need..."
                  />
                </label>

                <button type="submit" className="submit-btn" disabled={loading}>
                  <Send size={16} />
                  {loading ? "Sending..." : "Send Message"}
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container footer-inner">
          <div>All Rights Reserved © 2026</div>
          <a className="back-to-top" href="#contact">
            ↑ Back to top
          </a>
        </div>
      </footer>
    </div>
  );
}
