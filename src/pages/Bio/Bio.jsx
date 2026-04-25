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
    title: "The Storyteller’s Pivot",
    text: "Believe it or not, but karim studied Languages and Translation (Chinese Department). Preferring storylines to syntax, he decided to pivot from translating characters to creating them. He followed his passion for the advertising world by joining Cairo Ad School to master the craft of Ad Filmmaking and Creative Strategy",
    image: university,
  },
  {
    title: "Cairo ad school - Cairo / EGY",
    text: "To bridge the gap between words and visuals, I pursued Cairo Ad School (CAS), enrolling in the Ad Filmmaking Diploma By merging strategic thinking with technical execution, I’ve ensuring that every concept I develop is not only creatively sound but also production-ready and visually compelling",
    image: school,
  },
  {
    title: "Script to Screen",
    text: "I bring scripts to life through hands-on experience on major sets like Careem and Tayar Gedeed This background allows me to bridge the gap between directing and brand messaging, ensuring every project is executed with precision from the first storyboard to the final edit",
    image: location,
  },
  {
    title: "Street Advertising",
    text: "My work doesn't just sit behind screens; it owns the streets. From major highways to city streets across Egypt, my ads are hard to miss and impossible to ignore",
    image: poster,
  },
  {
    title: "The Prime Cut",
    text: `In the world of advertising, I consider myself the osta of this world Much like a master butcher who treats every cut with surgical precision I don't just write I Trim <br /> With 5+ years across Egypt and the Gulf, I know exactly where the prime cuts of a brand’s story lie, stripping away the noise to serve content that is as lean, high-quality, and satisfying as a master’s work.`,
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
                      <p dangerouslySetInnerHTML={{ __html: item.text }} />
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
