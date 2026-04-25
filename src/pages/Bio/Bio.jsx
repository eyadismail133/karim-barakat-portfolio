import "./bio.css";
import { ChevronDown, Mail } from "lucide-react";
import { motion } from "framer-motion";
import karimBioImage from "../../assets/kareem-bio.png";
import osta from "../../assets/osta.JPG";
import school from "../../assets/school.JPG";
import university from "../../assets/university.jpg";
import location from "../../assets/karim.mov";
import poster from "../../assets/poster.JPG";
import { useRef } from "react";

const aboutItems = [
  {
    title: "Shooting for Coca-Cola - Capetown / ZA (2013)",
    text: "From Romania Ali moved to Germany with Leagas Delaney, Hamburg. He later built a global career across Leo Burnett, JWT, McCann, and DDB-Berlin.",
    image: university,
  },
  {
    title: "Miami ad school - Miami / USA",
    text: "Ali spent a little over a year in Miami before moving to Romania as a Junior Art Director for D’Arcy Bucharest. He met incredible people there, and they’re still friends to this day.",
    image: school,
  },
  {
    title: "Miami ad school - Miami / USA",
    text: "Ali spent a little over a year in Miami before moving to Romania as a Junior Art Director for D’Arcy Bucharest. He met incredible people there, and they’re still friends to this day.",
    image: location,
  },
  {
    title: "Born in Cairo / EG",
    text: "Karim was born in Cairo, Egypt, where he spent his childhood and teenage years before moving abroad for his studies and career.",
    image: poster,
  },
  {
    title: "American University - Cairo / EG",
    text: "It may not be obvious, but Ali studied computer engineering at the American University in Cairo, with a minor in painting.",
    image: osta,
  },
];

// 🔥 animation variants
const pageVariant = {
  initial: { opacity: 0, filter: "blur(10px)", y: 20 },
  animate: { opacity: 1, filter: "blur(0px)", y: 0 },
  exit: { opacity: 0, filter: "blur(10px)", y: -20 },
};
const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
};

export default function Bio() {
  const videoRef = useRef(null);

  return (
    <motion.div
      className="page"
      variants={pageVariant}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{ duration: 0.5 }}
    >
      <main>
        {/* HERO */}
        <section className="hero" id="bio">
          <div className="container" style={{ display: "flex" }}>
            <motion.div
              className="hero-copy"
              variants={staggerContainer}
              initial="initial"
              animate="animate"
            >
              <motion.p className="eyebrow" variants={fadeUp}>
                Biography
              </motion.p>

              <motion.h1 variants={fadeUp}>Karim Barakat</motion.h1>

              <motion.p className="lead" variants={fadeUp}>
                As a Creative Copywriter, my job is to transform your business
                goals into psychological triggers and creative narratives that
                don’t just capture attention but convert it into revenue.
              </motion.p>

              <motion.div className="hero-actions" variants={fadeUp}>
                <a className="pill" href="mailto:karimbarkatt1@gmail.com">
                  <Mail size={16} /> Mail
                </a>

                <a className="scroll-hint" href="#about">
                  Explore sections <ChevronDown size={16} />
                </a>
              </motion.div>
            </motion.div>

            {/* IMAGE */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
            >
              <img src={karimBioImage} alt="Karim Barakat" />
            </motion.div>

            {/* SOCIAL */}
            <motion.div
              className="social-link"
              variants={staggerContainer}
              initial="initial"
              animate="animate"
            >
              <motion.div variants={fadeUp}>
                <a
                  className="instagram"
                  href="https://www.instagram.com/karimbarkaat?igsh=MXVvZ3VxN3Z0eG1lNQ%3D%3D&utm_source=qr"
                >
                  Instagram
                </a>
              </motion.div>

              <motion.div variants={fadeUp}>
                <a
                  className="linkedin"
                  href="https://www.linkedin.com/in/karim-barkat-33baaa216?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
                >
                  LinkedIn
                </a>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* ABOUT */}
        <section className="section" id="about">
          <div className="container">
            <motion.div
              className="section-heading"
              variants={staggerContainer}
              initial="initial"
              animate="animate"
            >
              <motion.p className="eyebrow" variants={fadeUp}>
                About
              </motion.p>
              <motion.h2 variants={fadeUp}>
                A stacked story with image-led sections
              </motion.h2>
              <motion.p className="subtitle" variants={fadeUp}>
                The page reads like a magazine profile with visual rhythm.
              </motion.p>
            </motion.div>

            <div className="about-grid">
              <div className="about-list">
                {aboutItems.map((item, index) => (
                  <motion.article
                    className="about-card"
                    key={index}
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.15 }}
                  >
                    <div className="about-media">
                      {item.image.endsWith(".mov") ? (
                        <video
                          className="about-video"
                          ref={videoRef}
                          src={item.image}
                          muted
                          autoPlay
                          loop
                          onLoadedMetadata={() => {
                            if (videoRef.current) {
                              videoRef.current.playbackRate = 1.25;
                            }
                          }}
                        />
                      ) : (
                        <img src={item.image} alt={item.title} />
                      )}
                    </div>

                    <div className="about-content">
                      <h3>{item.title}</h3>
                      <p>{item.text}</p>
                    </div>
                  </motion.article>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="footer">
        <div className="container footer-inner">
          <div>All Rights Reserved © 2026</div>
          <a className="back-to-top" href="#bio">
            ↑ Back to top
          </a>
        </div>
      </footer>
    </motion.div>
  );
}
