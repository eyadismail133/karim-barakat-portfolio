import "./home.css";
import { motion } from "framer-motion";
import work1 from "../../assets/work & bio/work-1.JPG";
import work2 from "../../assets/work & bio/work-2.JPG";
// import work3 from "../../assets/work & bio/work-3-11.JPG";
import work4 from "../../assets/work & bio/work-4.JPG";
import work5 from "../../assets/work & bio/work-5.JPG";
import work6 from "../../assets/work & bio/work-6.JPG";
import work7 from "../../assets/work & bio/work-7.JPG";
import work8 from "../../assets/work & bio/work-8.jpg";
import work9 from "../../assets/work & bio/work-9.JPG";
import work10 from "../../assets/work & bio/work-10.JPG";
import work12 from "../../assets/work & bio/work-12.JPG";
import karimWork from "../../assets/IMG_8649.PNG";
import Carousel from "../home/components/Carousel";
import cv from "../../assets/Karim barkat C.V.pdf";
import { Link } from "react-router-dom";

const workItems = [
  {
    title: "Mouchoir",
    subtitle: "Strategy Plan",
    image: work1,
    link: "https://drive.google.com/file/d/1utmmPM6T1_1S-TFWkFbSHzJOWyXd4q8Q/view?usp=drive_link",
  },
  {
    title: "AHMAD TEA",
    subtitle: "Slogan Campaign",
    image: work2,
    link: "https://drive.google.com/file/d/1OBy1AFJRmFfSv7sh0N_Djsh4nNet_EUM/view?usp=drive_link",
  },
  // {
  //   title: "SFC",
  //   subtitle: "Strategy Plan",
  //   image: work3,
  //   link: "https://drive.google.com/file/d/1jCEa_lH0zRRTDPfWEFJWai4CJS-2SZyj/view?usp=drive_link",
  // },
  {
    title: "Johnny Rockets",
    subtitle: "Action Plan",
    image: work4,
    link: "https://drive.google.com/file/d/1xml2Y1SFPSmzOp2j_zWAXqxWAlHplfxm/view?usp=drivesdk",
  },
  {
    title: "Anghami",
    subtitle: "Ad Campaign",
    image: work5,
    link: "https://drive.google.com/file/d/1VSU9f0VtF3gl_oheyp3qZQLnn_inkg-J/view?usp=drive_link",
  },
  {
    title: "Andalusia Hospitals",
    subtitle: "Ad Campaign",
    image: work6,
    link: "https://drive.google.com/file/d/1GS3fmW5Ao9gO4R7Yb5ar0yGo1kduq6YV/view?usp=drive_link",
  },
  {
    title: "Mobily",
    subtitle: "Ad Campaign",
    image: work7,
    link: "https://drive.google.com/file/d/1z8KxAYvVqUUjE8eIfsaYtXtKljrIxvJl/view?usp=drive_link",
  },
  {
    title: "Masab Garden",
    subtitle: "Strategy Plan",
    image: work8,
    link: "https://drive.google.com/file/d/1RR5TLIzWNK6PiSjEb2Iy75OltBiTztSa/view?usp=drive_link",
  },
  {
    title: "Harbi Brands",
    subtitle: "Ad Campaign",
    image: work9,
    link: "https://drive.google.com/file/d/1CBo_-lI0BmOUSClkCsikDHoqwRt-dmey/view?usp=drive_link",
  },
  {
    title: "Almarai",
    subtitle: "Ad Campaign",
    image: work10,
    link: "https://drive.google.com/file/d/1L7QOeqtSKvV-gdNusypVPe3bAYzauhUI/view?usp=drive_link",
  },
  // {
  //   title: "SFC",
  //   subtitle: "Action Plan",
  //   image: work3,
  //   link: "https://drive.google.com/file/d/1pSHdLIThN0sIf7D2w7406uOjvNbUB609/view?usp=drive_link",
  // },
  {
    title: "Rentex",
    subtitle: "Strategy Plan",
    image: work12,
    link: "https://drive.google.com/file/d/1olUgE_G1OWPMYhwF6xaohL42HoOlw3gd/view?usp=drive_link",
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
              <Link to="/contact">
                <span className="home-page-call-to-action">
                  Ready to start the game?
                </span>
              </Link>
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
            <span className="first-name">Karim</span>
            <span className="last-name">Barkat</span>{" "}
          </motion.div>

          {/* IMAGE */}
          <motion.img
            src={karimWork}
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
          <Carousel items={workItems} />
        </div>
      </article>
    </motion.div>
  );
};

export default Home;
