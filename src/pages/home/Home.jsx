import "./home.css";
import Card from "./components/Card";
import { motion } from "framer-motion";

import work1 from "../../assets/IMG_8644.PNG";
import work2 from "../../assets/IMG_8649.PNG";

// Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import cv from "../../assets/Karim barkat C.V.pdf";
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

// animations (unchanged)
const pageVariant = {
  initial: { opacity: 0, filter: "blur(10px)", y: 20 },
  animate: { opacity: 1, filter: "blur(0px)", y: 0 },
  exit: { opacity: 0, filter: "blur(10px)", y: -20 },
};

const staggerContainer = {
  animate: { transition: { staggerChildren: 0.15 } },
};

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
};

const Home = () => {
  return (
    <motion.div
      className="home-wrapper"
      variants={pageVariant}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{ duration: 0.5 }}
    >
      {/* HERO SECTION */}
      <article className="home-page">
        <div className="home-page-image-wrapper">
          {/* LEFT TEXT BLOCK */}
          <motion.div
            className="hero-text"
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
              className="cv-download-btn"
              href={cv}
              download
            >
              Download CV
            </motion.a>
          </motion.div>

          {/* CENTER NAME (ANIMATED DOWN → UP) */}
          <motion.div
            className="hero-name"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            Karim Barkat
          </motion.div>

          {/* IMAGE */}
          <motion.img
            src={work2}
            alt="Karim Barkat"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="hero-image"
          />
        </div>

        <motion.div
          className="home-page-content"
          variants={staggerContainer}
          initial="initial"
          animate="animate"
        >
          <h1 className="home-page-title" variants={fadeUp}>
            <span>Creative</span>
            <span>Copywriter</span>
          </h1>

          <p className="home-page-description" variants={fadeUp}>
            karim barkat passionate copywriter & content creator based in
            Cairo-Egypt With love for advertising and thirst for knowledge
          </p>
        </motion.div>
      </article>

      {/* 🔥 3D SWIPER WORK SECTION */}
      <article className="work-showcase">
        <motion.h2
          className="work-showcase-title"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          My Work
        </motion.h2>

        <div className="work-swiper-wrapper">
          <Swiper
            effect={"coverflow"}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={"auto"}
            loop={true}
            coverflowEffect={{
              rotate: 50,
              stretch: 0,
              depth: 120,
              modifier: 2,
              slideShadows: true,
            }}
            pagination={{ clickable: true }}
            navigation={true}
            modules={[EffectCoverflow, Pagination, Navigation]}
            className="work-swiper"
          >
            {workItems.map((item, index) => (
              <SwiperSlide key={index} className="swiper-slide-custom">
                <Card {...item} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </article>
    </motion.div>
  );
};

export default Home;
