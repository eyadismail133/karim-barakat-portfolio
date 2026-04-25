import "./bio.css";
import {
  ChevronDown,
  Mail,
  ArrowUpRight,
  Award,
  Film,
  Globe2,
} from "lucide-react";
import { useRef } from "react"; // ✅ added
import karimBioImage from "../../assets/kareem-bio.png";
import { FaInstagram, FaLinkedin } from "react-icons/fa";
import osta from "../../assets/osta.JPG";
import school from "../../assets/school.JPG";
import university from "../../assets/university.jpg";
import location from "../../assets/location.mov";

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
    title: "American University - Cairo / EG",
    text: "It may not be obvious, but Ali studied computer engineering at the American University in Cairo, with a minor in painting. Preferring storyboards to motherboards, he quickly abandoned a mediocre programming career to study Design and Art Direction at the Miami Ad School.",
    image: osta,
  },
];

const awards = [
  {
    year: "/20",
    award: "The One Show",
    level: "Gold",
    work: "Diesel / Be a Follower",
  },
  {
    year: "/19",
    award: "Cannes Lion",
    level: "Gold Lion (Social Film)",
    work: "Diesel / Be a Follower",
  },
  {
    year: "/17",
    award: "Dubai Lynx Film",
    level: "Craft Silver",
    work: "Emirates / Travel for Real",
  },
  {
    year: "/16",
    award: "Dubai Lynx Film",
    level: "Grand Prix",
    work: "Du Interviews",
  },
  {
    year: "/15",
    award: "D&AD",
    level: "Yellow Pencil (Direction)",
    work: "Du Telecom",
  },
  {
    year: "/11",
    award: "Dubai Lynx Film",
    level: "Craft Grand Prix",
    work: "Never Say No To Panda",
  },
];

const contacts = [
  {
    region: "United Kingdom",
    name: "Caviar",
    address: "Suite 2, 25-26 Dering Street, Mayfair, London W1S 1AT",
    phone: "+44 (0) 786 797 1545",
    email: "james@artsandsciences.com",
    site: "uk.artsandsciences.com",
  },
  {
    region: "France",
    name: "Wanda",
    address:
      "50 Avenue Du Président Wilson Bâtiment 126A 93210 Saint Denis La Plaine CEDEX",
    phone: "+33 (0)1 49 46 63 63",
    email: "hello@wanda.fr",
    site: "wanda.net",
  },
  {
    region: "United States",
    name: "Little Minx",
    address: "1758 Berkeley St. Santa Monica, CA 90404",
    phone: "(310) 566-0536",
    email: "rhea@littleminx.tv",
    site: "www.littleminx.tv",
  },
  {
    region: "Germany and Austria",
    name: "Markenfilm",
    address: "Vorwerkstraße 12, 20357 Hamburg",
    phone: "+49 40 8000770",
    email: "stephan.brockmann@markenfilm.de",
    site: "www.markenfilm.com",
  },
  {
    region: "Middle East",
    name: "Good People",
    address: "20 Saray El Gezira, Cairo, Zamalek 11211",
    phone: "+201002512085",
    email: "khaled@goodpeople.film",
    site: "www.goodpeople.film",
  },
];

function SectionHeading({ eyebrow, title, subtitle }) {
  return (
    <div className="section-heading">
      {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
      <h2>{title}</h2>
      {subtitle ? <p className="subtitle">{subtitle}</p> : null}
    </div>
  );
}

export default function Bio() {
  const videoRef = useRef(null); // ✅ added

  return (
    <div className="page">
      <main>
        <section className="hero" id="bio">
          <div className="container" style={{ display: "flex" }}>
            <div className="hero-copy">
              <p className="eyebrow">Biography</p>
              <h1>Karim Barakat</h1>
              <p className="lead">
                As a Creative Copywriter, my job is to transform your business
                goals into psychological triggers and creative narratives that
                don’t just capture attention but convert it into revenue...
              </p>

              <div className="hero-actions">
                <a className="pill" href="mailto:karimbarakatt1@gmail.com">
                  <Mail size={16} /> Mail
                </a>
                <a className="scroll-hint" href="#work">
                  Explore sections <ChevronDown size={16} />
                </a>
              </div>
            </div>

            <div>
              <img src={karimBioImage} alt="Karim Barakat" />
            </div>

            <div className="social-link">
              <div>
                <FaInstagram size={30} color="#E4405F" />
                <a href="#">Instagram</a>
              </div>
              <div>
                <FaLinkedin size={30} color="#0077B5" />
                <a href="#">LinkedIn</a>
              </div>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <SectionHeading
              eyebrow="About"
              title="A stacked story with image-led sections"
              subtitle="Magazine-style layout"
            />

            <div className="about-grid">
              <div className="about-list">
                {aboutItems.map((item, index) => (
                  <article className="about-card" key={index}>
                    <div className="about-media">
                      {item.image.endsWith(".mov") ? (
                        <video
                          ref={videoRef} // ✅ attach ref
                          className="about-video"
                          src={item.image}
                          muted
                          autoPlay
                          loop
                          onLoadedMetadata={() => {
                            if (videoRef.current) {
                              videoRef.current.playbackRate = 1.25; // ✅ 2x speed
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
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
