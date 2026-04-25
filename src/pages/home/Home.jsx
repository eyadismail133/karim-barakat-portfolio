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
  // Add more work items as needed
];

const Home = () => {
  return (
    <>
      <article className="home-page">
        <div className="home-page-image-wrapper">
          <div>
            <p>
              In a crowded market,
              <br /> advertising isn’t just about being seen—it’s about being
              remembered <br />
              As a Creative Copywriter, my job is to transform your business
              goals
              <br /> into psychological triggers and creative narratives that
              don’t just capture attention
              <br /> but convert it into revenue A single powerful idea can
              scale your brand faster
              <br /> than any massive budget ever could, turning every word into
              a ROI-driven asset
              <br /> Your brand has a story I have the strategy to make it
              profitable
              <br />
              <span className="home-page-call-to-action">
                Ready to start the game?
              </span>
            </p>
            <a
              className="home-page-email"
              href="mailto:karimbarakatt1@gmail.com"
            >
              karimbarakatt1@gmail.com
            </a>
          </div>
          <img src="src/assets/IMG_8649.PNG" alt="Karim Barakat" />
        </div>
        <div>
          <div className="home-page-content">
            <h1 className="home-page-title">
              <span>Creative</span>
              <span>Copywriter</span>
            </h1>
            <p className="home-page-description">
              karim barakat passionate copywriter & content creator based in
              Cairo-Egypt With my love for advertising and my thirst for
              knowledge
            </p>
          </div>
        </div>
      </article>
      {/* Work Showcase Section */}
      <article className="work-showcase">
        <h2 className="work-showcase-title">My Work</h2>
        <motion.div
          className="work-cards-bar"
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ type: "spring", stiffness: 60 }}
        >
          {workItems.map((item, idx) => (
            <Card key={idx} {...item} />
          ))}
        </motion.div>
      </article>
    </>
  );
};

export default Home;
