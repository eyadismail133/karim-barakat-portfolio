import "./contact.css";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { useState, useRef, useCallback } from "react";
import { FaInstagram, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  /* ── TiltCard for the form ── */
  const cardRef = useRef(null);

  const handleMouseMove = useCallback((e) => {
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const rx = ((e.clientY - rect.top) / rect.height - 0.5) * 7;
    const ry = (0.5 - (e.clientX - rect.left) / rect.width) * 7;
    card.style.transform = `perspective(1200px) rotateX(${rx}deg) rotateY(${ry}deg) translateZ(6px)`;
    card.style.transition = "transform 0.1s ease";
  }, []);

  const handleMouseLeave = useCallback(() => {
    const card = cardRef.current;
    if (!card) return;
    card.style.transform =
      "perspective(1200px) rotateX(0deg) rotateY(0deg) translateZ(0px)";
    card.style.transition = "transform 0.7s cubic-bezier(0.16, 1, 0.3, 1)";
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);
    emailjs
      .send("service_5tnirt2", "template_i1hibdi", formData, "de1maxHu7fZqI72or")
      .then(
        () => {
          alert("Message sent successfully!");
          setFormData({ name: "", email: "", phone: "", message: "" });
          setLoading(false);
        },
        (error) => {
          console.log("FAILED...", error.text);
          alert("Something went wrong. Check console.");
          setLoading(false);
        }
      );
  };

  return (
    <div className="contact-page">
      {/* ── Ambient background ── */}
      <div className="contact-orb contact-orb-1" />
      <div className="contact-orb contact-orb-2" />
      <div className="contact-dot-grid" />

      <main>
        <section className="contact-hero" id="contact">
          <div className="container contact-grid">

            {/* ════ LEFT COPY ════ */}
            <div className="contact-copy">

              <p className="contact-eyebrow">Get in touch</p>

              {/* ── Special "open to work" badge ── */}
              <div className="remote-badge">
                <span className="remote-dot" />
                Available remotely worldwide
              </div>

              <h1 className="contact-h1">
                <span className="rw" style={{ animationDelay: "0s" }}>Let's</span>{" "}
                <span className="rw" style={{ animationDelay: "0.07s" }}>build</span>{" "}
                <span className="rw" style={{ animationDelay: "0.14s" }}>something</span>
                <br />
                <span className="rw contact-gold" style={{ animationDelay: "0.21s" }}>clear,</span>{" "}
                <span className="rw contact-gold" style={{ animationDelay: "0.28s" }}>creative,</span>
                <br />
                <span className="rw" style={{ animationDelay: "0.35s" }}>and</span>{" "}
                <span className="rw" style={{ animationDelay: "0.42s" }}>effective</span>
              </h1>

              <p className="contact-lead">
                Whether you need a brand voice, campaign copy, or a simple
                conversation about your next project — this is the place to start.
              </p>

              {/* ── Contact info rows ── */}
              <div className="contact-points">
                <a className="contact-point" href="mailto:karimbarkatt1@gmail.com">
                  <span className="cp-bar" />
                  <span className="cp-icon"><Mail size={15} /></span>
                  <span>karimbarkatt1@gmail.com</span>
                </a>

                <a className="contact-point" href="tel:+201025587792">
                  <span className="cp-bar" />
                  <span className="cp-icon"><Phone size={15} /></span>
                  <span>+20 1025587792</span>
                </a>

                <div className="contact-point">
                  <span className="cp-bar" />
                  <span className="cp-icon"><MapPin size={15} /></span>
                  <span>Cairo, Egypt</span>
                </div>
              </div>

              {/* ── Social pills ── */}
              <div className="social-row">
                <a
                  className="social-link"
                  href="https://www.instagram.com/karimbarkaat?igsh=MXVvZ3VxN3Z0eG1lNQ%3D%3D&utm_source=qr"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaInstagram size={15} />
                  Instagram
                </a>
                <a
                  className="social-link"
                  href="https://www.linkedin.com/in/karim-barkat-33baaa216?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaLinkedin size={15} />
                  LinkedIn
                </a>
                <a
                  className="social-link"
                  href="https://wa.me/201025587792"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaWhatsapp size={15} />
                  WhatsApp
                </a>
              </div>
            </div>

            {/* ════ RIGHT: FORM CARD (3-D tilt) ════ */}
            <div
              ref={cardRef}
              className="contact-card"
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              style={{ transformStyle: "preserve-3d" }}
            >
              {/* radial gold glow – fades in on hover via CSS */}
              <div className="card-glow" />

              <div className="form-header">
                <p className="form-eyebrow">Send a message</p>
                <h2>Tell me about your project</h2>
                <p className="form-subtitle">A short message is enough to start.</p>
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
                </div>

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

                <label>
                  Project brief
                  <textarea
                    required
                    rows="5"
                    value={formData.message}
                    onChange={handleChange}
                    name="message"
                    placeholder="Tell me a little about what you need..."
                  />
                </label>

                <button type="submit" className="submit-btn" disabled={loading}>
                  <Send size={15} />
                  {loading ? "Sending…" : "Send Message"}
                </button>
              </form>
            </div>

          </div>
        </section>
      </main>

      <footer className="contact-footer">
        <div className="container footer-inner">
          <span>All Rights Reserved © 2026</span>
          <a className="back-to-top" href="#contact">↑ Back to top</a>
        </div>
      </footer>
    </div>
  );
}
