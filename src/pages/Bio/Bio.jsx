import {
  ChevronDown,
  Mail,
  ArrowUpRight,
  Award,
  Film,
  Globe2,
} from "lucide-react";
import karimBioImage from "../../assets/karim-bio-image.png";
import { FaInstagram, FaFacebook, FaTiktok } from "react-icons/fa";
function SocialIcons() {
  return (
    <div>
      <FaInstagram size={30} color="#E4405F" />
      <FaFacebook size={30} color="#1877F2" />
      <FaTiktok size={30} />
    </div>
  );
}

const aboutItems = [
  {
    title: "American University - Cairo / EG",
    text: "It may not be obvious, but Ali studied computer engineering at the American University in Cairo, with a minor in painting. Preferring storyboards to motherboards, he quickly abandoned a mediocre programming career to study Design and Art Direction at the Miami Ad School.",
  },
  {
    title: "Miami ad school - Miami / USA",
    text: "Ali spent a little over a year in Miami before moving to Romania as a Junior Art Director for D’Arcy Bucharest. He met incredible people there, and they’re still friends to this day.",
  },
  {
    title: "Shooting for Coca-Cola - Capetown / ZA (2013)",
    text: "From Romania Ali moved to Germany with Leagas Delaney, Hamburg. He later built a global career across Leo Burnett, JWT, McCann, and DDB-Berlin.",
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

function ImageBlock({ label }) {
  return (
    <div className="image-block" aria-label={label} role="img">
      <div className="image-block__grain" />
      <span>{label}</span>
    </div>
  );
}

export default function Bio() {
  return (
    <div className="page">
      <style>{`
        :root {
          --bg:rgb(0, 0, 0);
          --paper: #fbf8f3;
          --ink:rgb(255, 255, 255);
          --muted: #5f5b56;
          --line: rgba(16,16,16,.12);
          --soft: rgba(16,16,16,.04);
        }
        * { box-sizing: border-box; }
        html, body, #root { height: 100%; }
        body {
          margin: 0;
          background: var(--bg);
          color: var(--ink);
          font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
        }
        a { color: inherit; text-decoration: none; }
        .page {
          min-height: 100vh;
        }
        .container {
          width: min(1160px, calc(100% - 40px));
          margin: 0 auto;
        }
        .brand {
          font-size: 14px;
          text-transform: uppercase;
          letter-spacing: .2em;
          opacity: .86;
        }
        .hero {
          padding: 34px 0 56px;
          border-bottom: 1px solid var(--line);
        }
        .hero-grid {
          display: grid;
          grid-template-columns: 1.05fr .95fr;
          gap: 28px;
          align-items: start;
        }
        .hero-copy {
          padding-top: 12px;
        }
        .eyebrow {
          margin: 0 0 14px;
          text-transform: uppercase;
          letter-spacing: .24em;
          font-size: 12px;
          color: var(--muted);
        }
        .hero h1 {
          margin: 0;
          font-size: clamp(44px, 6vw, 92px);
          line-height: .92;
          letter-spacing: -.06em;
          max-width: 7ch;
        }
        .lead {
          margin: 22px 0 0;
          max-width: 62ch;
          font-size: 17px;
          line-height: 1.8;
          color: var(--muted);
        }
        .hero-actions {
          display: flex;
          gap: 14px;
          flex-wrap: wrap;
          margin-top: 24px;
          align-items: center;
        }
        .pill {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 11px 16px;
          border: 1px solid var(--line);
          border-radius: 999px;
          background: rgba(255,255,255,.32);
          font-size: 14px;
        }
        .pill:hover { background: rgba(255,255,255,.6); }
        .stack-media {
          display: grid;
          gap: 14px;
        }
        .feature-card {
          position: relative;
          border-radius: 28px;
          overflow: hidden;
          border: 1px solid var(--line);
          background: linear-gradient(145deg, rgba(255,255,255,.65), rgba(255,255,255,.16));
          min-height: 500px;
          box-shadow: 0 24px 70px rgba(0,0,0,.08);
        }
        .feature-card::before {
          content: "";
          position: absolute;
          inset: 0;
          background:
            radial-gradient(circle at 20% 20%, rgba(255,255,255,.9), transparent 28%),
            linear-gradient(135deg, rgba(16,16,16,.06), rgba(16,16,16,.0));
        }
        .portrait {
          position: absolute;
          inset: 18px;
          border-radius: 24px;
          border: 1px solid rgba(16,16,16,.08);
          background:
            linear-gradient(180deg, rgba(255,255,255,.3), rgba(255,255,255,0)),
            radial-gradient(circle at 50% 25%, #d7d0c6 0 10%, transparent 11%),
            radial-gradient(circle at 48% 38%, #c6beb2 0 18%, transparent 19%),
            radial-gradient(circle at 50% 56%, #8f8578 0 32%, transparent 33%),
            linear-gradient(180deg, #b1a89c 0%, #e1dbd2 100%);
          filter: grayscale(1) contrast(1.02);
        }
        .photo-caption {
          position: absolute;
          left: 24px;
          bottom: 22px;
          right: 24px;
          display: flex;
          justify-content: space-between;
          align-items: end;
          gap: 16px;
          color: var(--ink);
          z-index: 1;
        }
        .photo-caption strong { display: block; font-size: 18px; margin-bottom: 4px; }
        .photo-caption span { font-size: 13px; color: var(--muted); }
        .scroll-hint {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-size: 13px;
          color: var(--muted);
          letter-spacing: .08em;
          text-transform: uppercase;
        }
        .section {
          padding: 72px 0;
          border-bottom: 1px solid var(--line);
        }
        .section-heading {
          margin-bottom: 28px;
          display: grid;
          gap: 8px;
        }
        .section-heading h2 {
          margin: 0;
          font-size: clamp(28px, 3.6vw, 48px);
          line-height: .98;
          letter-spacing: -.05em;
          max-width: 12ch;
        }
        .subtitle {
          margin: 0;
          font-size: 17px;
          line-height: 1.8;
          color: var(--muted);
          max-width: 64ch;
        }
        .about-grid {
          display: grid;
          grid-template-columns: 1.05fr .95fr;
          gap: 22px;
          align-items: start;
        }
        .about-list {
          display: grid;
          gap: 18px;
        }
        .about-card {
          display: grid;
          grid-template-columns: 170px 1fr;
          gap: 18px;
          padding: 18px;
          border: 1px solid var(--line);
          border-radius: 24px;
          background: rgba(255,255,255,.4);
        }
        .about-card h3,
        .award-row h3,
        .contact-card h3 {
          margin: 0 0 10px;
          font-size: 18px;
          letter-spacing: -.03em;
        }
        .about-card p,
        .award-row p,
        .contact-card p {
          margin: 0;
          line-height: 1.75;
          color: var(--muted);
          font-size: 15px;
        }
        .image-block {
          position: relative;
          min-height: 178px;
          border-radius: 22px;
          overflow: hidden;
          border: 1px solid var(--line);
          background:
            linear-gradient(145deg, rgba(255,255,255,.56), rgba(255,255,255,.14)),
            radial-gradient(circle at 20% 20%, rgba(255,255,255,.65), transparent 35%),
            linear-gradient(135deg, #d8d0c7, #b9b1a7 60%, #a79e92);
        }
        .image-block__grain {
          position: absolute;
          inset: 0;
          background-image: radial-gradient(rgba(0,0,0,.07) 0.7px, transparent 0.7px);
          background-size: 6px 6px;
          opacity: .18;
          mix-blend-mode: multiply;
        }
        .image-block span {
          position: absolute;
          left: 14px;
          bottom: 14px;
          right: 14px;
          z-index: 1;
          font-size: 12px;
          text-transform: uppercase;
          letter-spacing: .18em;
          color: rgba(16,16,16,.82);
        }
        .stat-panel {
          border-radius: 28px;
          border: 1px solid var(--line);
          background: rgba(255,255,255,.42);
          padding: 24px;
        }
        .big-number {
          display: grid;
          gap: 10px;
          padding-bottom: 18px;
          border-bottom: 1px solid var(--line);
          margin-bottom: 18px;
        }
        .big-number strong {
          font-size: clamp(38px, 6vw, 72px);
          line-height: .9;
          letter-spacing: -.06em;
        }
        .big-number span {
          font-size: 14px;
          color: var(--muted);
          text-transform: uppercase;
          letter-spacing: .16em;
        }
        .quote {
          margin: 0 0 18px;
          font-size: clamp(22px, 2.4vw, 34px);
          line-height: 1.1;
          letter-spacing: -.04em;
          max-width: 11ch;
        }
        .tiny-grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 12px;
        }
        .tiny-chip {
          border-radius: 18px;
          border: 1px solid var(--line);
          background: rgba(255,255,255,.34);
          padding: 14px;
        }
        .tiny-chip .label {
          display: block;
          font-size: 12px;
          text-transform: uppercase;
          letter-spacing: .18em;
          color: var(--muted);
          margin-bottom: 6px;
        }
        .tiny-chip .value {
          font-size: 16px;
          letter-spacing: -.02em;
        }
        .awards-wrap {
          display: grid;
          grid-template-columns: 240px 1fr;
          gap: 22px;
        }
        .awards-side {
          display: grid;
          gap: 16px;
          align-content: start;
          position: sticky;
          top: 96px;
        }
        .logo-grid {
          display: grid;
          gap: 12px;
        }
        .logo-item {
          border: 1px solid var(--line);
          border-radius: 18px;
          padding: 14px 16px;
          background: rgba(255,255,255,.36);
          font-size: 14px;
        }
        .award-list {
          display: grid;
          gap: 12px;
        }
        .award-row {
          display: grid;
          grid-template-columns: 64px 1fr auto;
          gap: 18px;
          padding: 18px 20px;
          border: 1px solid var(--line);
          border-radius: 22px;
          background: rgba(255,255,255,.36);
          align-items: center;
        }
        .award-year {
          font-size: 13px;
          letter-spacing: .18em;
          color: var(--muted);
          text-transform: uppercase;
        }
        .award-row .meta {
          display: grid;
          gap: 4px;
        }
        .award-row .meta .type {
          font-size: 18px;
          letter-spacing: -.03em;
        }
        .award-row .meta .work {
          font-size: 14px;
          color: var(--muted);
        }
        .award-badge {
          font-size: 14px;
          padding: 8px 12px;
          border-radius: 999px;
          border: 1px solid var(--line);
          background: rgba(255,255,255,.48);
          white-space: nowrap;
        }
        .contact-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 18px;
        }
        .contact-lead {
          display: grid;
          grid-template-columns: 1.1fr .9fr;
          gap: 22px;
          align-items: start;
          margin-bottom: 22px;
        }
        .contact-quote {
          font-size: clamp(28px, 4vw, 52px);
          line-height: .98;
          letter-spacing: -.06em;
          margin: 0;
          max-width: 10ch;
        }
        .contact-note {
          border: 1px solid var(--line);
          border-radius: 24px;
          padding: 18px;
          background: rgba(255,255,255,.35);
        }
        .contact-note p {
          margin: 0;
          color: var(--muted);
          line-height: 1.8;
          font-size: 16px;
        }
        .contact-list {
          display: grid;
          gap: 12px;
        }
        .contact-card {
          padding: 18px;
          border-radius: 22px;
          border: 1px solid var(--line);
          background: rgba(255,255,255,.38);
          display: grid;
          gap: 10px;
        }
        .contact-card .region {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 10px;
        }
        .contact-card .region strong {
          font-size: 18px;
        }
        .contact-lines {
          display: grid;
          gap: 8px;
          font-size: 14px;
          color: var(--muted);
        }
        .footer {
          padding: 24px 0 40px;
          color: var(--muted);
          font-size: 14px;
        }
        .footer-inner {
          display: flex;
          justify-content: space-between;
          gap: 18px;
          align-items: center;
          flex-wrap: wrap;
          border-top: 1px solid var(--line);
          padding-top: 18px;
        }
        .footer a { opacity: .8; }
        .back-to-top {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          text-transform: uppercase;
          letter-spacing: .18em;
          font-size: 12px;
        }
        @media (max-width: 980px) {
          .hero-grid,
          .about-grid,
          .awards-wrap,
          .contact-lead {
            grid-template-columns: 1fr;
          }
          .awards-side { position: static; }
          .feature-card { min-height: 420px; }
        }
        @media (max-width: 720px) {
          .container { width: min(100% - 24px, 1160px); }
          .topbar-inner { min-height: 64px; }
          .nav { gap: 14px; font-size: 12px; }
          .hero { padding-top: 22px; }
          .about-card,
          .award-row {
            grid-template-columns: 1fr;
          }
          .tiny-grid { grid-template-columns: 1fr; }
          .feature-card { min-height: 360px; }
        }
      `}</style>

      <main>
        <section className="hero" id="bio">
          <div className="container hero-grid" style={{ display: "flex" }}>
            <div className="hero-copy">
              <p className="eyebrow">Biography</p>
              <h1>Karim Barakat</h1>
              <p className="lead">
                A clean editorial biography layout inspired by the reference
                page: bold typography, large image areas, minimal chrome, and
                stacked content blocks with strong spacing.
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
            <div style={{ width: "150px", height: "200px" }}>
              <img
                style={{ width: "100%" }}
                src={karimBioImage}
                alt="Karim Barakat"
              />
            </div>

            <div>
              <SocialIcons />
              <div>instagram: </div>
              <div> twitter: </div>
              <div> linkedin: </div>
            </div>
          </div>
        </section>

        <section className="section" id="work">
          <div className="container">
            <SectionHeading
              eyebrow="About"
              title="A stacked story with image-led sections"
              subtitle="The reference page reads like a magazine profile: short headlines, long body copy, and visual breaks that keep the page moving vertically."
            />

            <div className="about-grid">
              <div className="about-list">
                {aboutItems.map((item, index) => (
                  <article className="about-card" key={index}>
                    <ImageBlock label={item.title} />
                    <div>
                      <h3>{item.title}</h3>
                      <p>{item.text}</p>
                    </div>
                  </article>
                ))}
              </div>

              <aside className="stat-panel">
                <p className="eyebrow">Signature line</p>
                <h3 className="quote">
                  One of the most watched campaigns of all time
                </h3>
                <div className="big-number">
                  <strong>94,082,898</strong>
                  <span>YouTube Views</span>
                </div>
                <div className="tiny-grid">
                  <div className="tiny-chip">
                    <span className="label">Rank</span>
                    <span className="value">Global movie director</span>
                  </div>
                  <div className="tiny-chip">
                    <span className="label">Year</span>
                    <span className="value">2014 Gunn Report</span>
                  </div>
                  <div className="tiny-chip">
                    <span className="label">Founded</span>
                    <span className="value">Elephant / 2010</span>
                  </div>
                  <div className="tiny-chip">
                    <span className="label">Style</span>
                    <span className="value">Editorial minimal</span>
                  </div>
                </div>
              </aside>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <SectionHeading
              eyebrow="Roots"
              title="Raised all over the world"
              subtitle="This block mirrors the location-led storytelling from the reference page, using one strong statement, a large image area, and a concise supporting paragraph."
            />

            <div className="about-grid">
              <div className="feature-card" style={{ minHeight: 420 }}>
                <div
                  className="portrait"
                  style={{
                    background:
                      "linear-gradient(180deg, rgba(255,255,255,.3), rgba(255,255,255,0)), radial-gradient(circle at 35% 24%, #ddd5c7 0 13%, transparent 14%), radial-gradient(circle at 48% 38%, #cabfb1 0 19%, transparent 20%), radial-gradient(circle at 50% 58%, #8e8277 0 32%, transparent 33%), linear-gradient(180deg, #b7ab9d 0%, #e9e3da 100%)",
                  }}
                />
                <div className="photo-caption">
                  <div>
                    <strong>Salma, Sina and Ali</strong>
                    <span>Athens / GR (2018)</span>
                  </div>
                  <span>N 30.048819° / E 31.243666°</span>
                </div>
              </div>

              <div className="stat-panel">
                <p className="eyebrow">Roots</p>
                <h3 className="quote">Born in Cairo, raised all over</h3>
                <p className="lead" style={{ marginTop: 0 }}>
                  His work is attentive to local realities, combined with a
                  global sense for storytelling and a sharp sense of humor.
                </p>
                <div className="logo-grid" style={{ marginTop: 22 }}>
                  <div className="logo-item">
                    <Award
                      size={16}
                      style={{ marginRight: 8, verticalAlign: "-3px" }}
                    />{" "}
                    Awarded direction
                  </div>
                  <div className="logo-item">
                    <Film
                      size={16}
                      style={{ marginRight: 8, verticalAlign: "-3px" }}
                    />{" "}
                    Commercial film work
                  </div>
                  <div className="logo-item">
                    <Globe2
                      size={16}
                      style={{ marginRight: 8, verticalAlign: "-3px" }}
                    />{" "}
                    Global production footprint
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section" id="awards">
          <div className="container">
            <SectionHeading
              eyebrow="Awards & recognitions"
              title="A dense list of achievements"
              subtitle="The original page mixes a dramatic stat line with a long, readable awards ledger. The layout below keeps the same rhythm and hierarchy."
            />

            <div className="awards-wrap">
              <aside className="awards-side">
                <div className="stat-panel">
                  <p className="eyebrow">Total</p>
                  <div
                    className="big-number"
                    style={{
                      borderBottom: "none",
                      marginBottom: 0,
                      paddingBottom: 0,
                    }}
                  >
                    <strong>29</strong>
                    <span>Awards</span>
                  </div>
                </div>
                <div className="logo-grid">
                  <div className="logo-item">Clio</div>
                  <div className="logo-item">Cannes Lion</div>
                  <div className="logo-item">D&AD</div>
                  <div className="logo-item">Dubai Lynx</div>
                  <div className="logo-item">The One Show</div>
                  <div className="logo-item">Art Directors Club</div>
                </div>
              </aside>

              <div className="award-list">
                {awards.map((item, index) => (
                  <article className="award-row" key={index}>
                    <div className="award-year">{item.year}</div>
                    <div className="meta">
                      <div className="type">{item.award}</div>
                      <div className="work">{item.work}</div>
                    </div>
                    <div className="award-badge">{item.level}</div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="section" id="contact">
          <div className="container">
            <SectionHeading
              eyebrow="Contact"
              title="Simple contact area with producer links"
              subtitle="This follows the reference’s understated contact block: strong headline, short note, then a list of producer offices."
            />

            <div className="contact-lead">
              <h3 className="contact-quote">Get in touch</h3>
              <div className="contact-note">
                <p>
                  I’m notoriously slow at getting back to emails. In a hurry?
                  Please contact my awesome producers.
                </p>
              </div>
            </div>

            <div className="contact-list">
              {contacts.map((item, index) => (
                <article className="contact-card" key={index}>
                  <div className="region">
                    <strong>{item.region}</strong>
                    <a
                      className="pill"
                      href={`https://${item.site}`}
                      target="_blank"
                      rel="noreferrer"
                    >
                      Visit site <ArrowUpRight size={16} />
                    </a>
                  </div>
                  <div className="contact-lines">
                    <div>{item.name}</div>
                    <div>{item.address}</div>
                    <div>{item.phone}</div>
                    <div>{item.email}</div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container footer-inner">
          <div>All Rights Reserved © 2020</div>
          <a className="back-to-top" href="#bio">
            ↑ Back to top
          </a>
        </div>
      </footer>
    </div>
  );
}
