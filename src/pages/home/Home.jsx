import "./home.css";
import Card from "./components/Card";
import { motion } from "framer-motion";

import work1 from "../../assets/IMG_8644.PNG";
import work2 from "../../assets/IMG_8649.PNG";

const workItems = [
  {
    title: "Ad Campaign 1",
    description: "A creative commercial for a major brand.",
    image: work1,
  },
  {
    title: "Ad Campaign 2",
    description: "Award-winning short film direction.",
    image: work2,
  },
  {
    title: "Ad Campaign 3",
    description: "Creative storytelling project.",
    image: work1,
  },
  {
    title: "Ad Campaign 4",
    description: "Brand identity concept.",
    image: work2,
  },
  {
    title: "Ad Campaign 5",
    description: "Visual campaign exploration.",
    image: work1,
  },
  {
    title: "Ad Campaign 6",
    description: "Motion design concept.",
    image: work2,
  },
  {
    title: "Ad Campaign 7",
    description: "Experimental branding work.",
    image: work1,
  },
  {
    title: "Ad Campaign 8",
    description: "Film direction project.",
    image: work2,
  },
  {
    title: "Ad Campaign 9",
    description: "Creative advertisement study.",
    image: work1,
  },
  {
    title: "Ad Campaign 10",
    description: "Social media campaign.",
    image: work2,
  },
  {
    title: "Ad Campaign 11",
    description: "Art direction concept.",
    image: work1,
  },
  {
    title: "Ad Campaign 12",
    description: "Brand storytelling project.",
    image: work2,
  },
  {
    title: "Ad Campaign 13",
    description: "Digital campaign idea.",
    image: work1,
  },
  {
    title: "Ad Campaign 14",
    description: "Final portfolio project.",
    image: work2,
  },
];

// 🔥 animation variants (unchanged)
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

const Home = () => {
  // split into groups of 3 (Bootstrap requirement)
  const slides = [];
  for (let i = 0; i < workItems.length; i += 3) {
    slides.push(workItems.slice(i, i + 3));
  }

  return (
    <motion.div
      className="home-wrapper"
      variants={pageVariant}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{ duration: 0.5 }}
    >
      {/* HERO SECTION (unchanged) */}
      <article className="home-page">
        <div className="home-page-image-wrapper">
          <motion.div
            variants={staggerContainer}
            initial="initial"
            animate="animate"
          >
            <motion.p variants={fadeUp}>
              In a crowded market, advertising
              <br />
              isn’t just about being seen
              <br />
              it’s about being remembered <br />
              <span className="home-page-call-to-action">
                Ready to start the game?
              </span>
            </motion.p>

            <motion.a
              variants={fadeUp}
              className="home-page-email"
              href="mailto:karimbarkatt1@gmail.com"
            >
              karimbarkatt1@gmail.com
            </motion.a>
          </motion.div>

          <motion.img
            src={work2}
            alt="Karim Barakat"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
          />
        </div>

        <motion.div
          className="home-page-content"
          variants={staggerContainer}
          initial="initial"
          animate="animate"
        >
          <motion.h1 className="home-page-title" variants={fadeUp}>
            <span>Creative</span>
            <span>Copywriter</span>
          </motion.h1>

          <motion.p className="home-page-description" variants={fadeUp}>
            karim barakat passionate copywriter & content creator based in
            Cairo-Egypt With my love for advertising and my thirst for knowledge
          </motion.p>
        </motion.div>
      </article>

      {/* WORK SECTION - BOOTSTRAP CAROUSEL */}
      <article className="work-showcase">
        <motion.h2
          className="work-showcase-title"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          My Work
        </motion.h2>

        <div
          id="workCarousel"
          className="carousel slide"
          data-bs-ride="carousel"
          data-bs-interval="3000"
        >
          <div className="carousel-inner">
            {slides.map((group, index) => (
              <div
                key={index}
                className={`carousel-item ${index === 0 ? "active" : ""}`}
              >
                <div className="d-flex justify-content-center gap-3">
                  {group.map((item, idx) => (
                    <div key={idx} style={{ flex: 1 }}>
                      <Card {...item} />
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* controls */}
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#workCarousel"
            data-bs-slide="prev"
          >
            <span className="carousel-control-prev-icon" />
          </button>

          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#workCarousel"
            data-bs-slide="next"
          >
            <span className="carousel-control-next-icon" />
          </button>
        </div>
      </article>
    </motion.div>
  );
};

export default Home;
