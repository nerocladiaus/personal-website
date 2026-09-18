import React, { useEffect } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

const assetPath = (path) => `${import.meta.env.BASE_URL}${path.replace(/^\/+/, "")}`;

const profile = {
  name: "Purui Kang",
  initials: "PK",
  location: "Singapore",
  email: "Kangpuruix@gmail.com",
  github: "https://github.com/nerocladiaus",
  phone: "+65 9131 7815",
  phoneLink: "+6591317815",
  linkedin: "https://www.linkedin.com/in/purui-kang",
};

const skills = ["React", "JavaScript", "Python", "Java", "C#", "PostgreSQL", "MongoDB", "Redis", "Docker", "REST APIs", "Embedded C"];

const projects = [
  {
    number: "01",
    title: "SIT@Punggol PeerConnect",
    category: "Raspberry Pi · LAN campus platform",
    description: "A LAN-based campus kiosk platform where students can browse and post help requests, announcements and interest groups.",
    contribution: "I built the network communication logic and monitoring dashboard, connecting the student-facing kiosk experience with the tools operators need to oversee the platform.",
    highlights: ["LAN-based communication between campus kiosks", "Dashboard for monitoring community activity", "Filtering and moderation workflows for operators"],
    stack: ["Raspberry Pi", "LAN", "Dashboard"],
    image: "/assets/projects/peerconnect.png",
    imageAlt: "Concept artwork of a Raspberry Pi connected to a campus community kiosk",
    tone: "blue",
    mark: "LAN",
  },
  {
    number: "02",
    title: "Community Food Donations",
    category: "Hybrid databases · Donation workflows",
    description: "A community donation platform supporting donors, recipients, household profiles, inventory, bookings and donation history across a hybrid data architecture.",
    contribution: "I designed stored procedures and booking workflows, then created MongoDB read models and Redis helpers for recommendation data, caching and idempotent operations.",
    highlights: ["Structured donor, recipient and inventory workflows", "MongoDB read models for recommendation data", "Redis caching and idempotent operation helpers"],
    stack: ["PostgreSQL", "MongoDB", "Redis", "Express"],
    image: "/assets/projects/community-food-donations.png",
    imageAlt: "Concept artwork of a community food donation and inventory platform",
    tone: "orange",
    mark: "DB",
  },
  {
    number: "03",
    title: "Semi-autonomous Robotic Arm",
    category: "Embedded systems · Robotics",
    description: "A web-controlled robotic arm supporting manual operation and autonomous pick-and-place workflows with live sensor feedback.",
    contribution: "I assembled and programmed the arm, improving coordinated movement through embedded control logic, configuration and integration testing.",
    highlights: ["Browser-based manual control", "Autonomous pick-and-place workflows", "Live sensor feedback and coordinated movement"],
    stack: ["Pico W", "Embedded C", "HTTP"],
    image: "/assets/projects/robotic-arm.png",
    imageAlt: "Concept artwork of a web-controlled robotic arm moving packages",
    tone: "violet",
    mark: "ARM",
  },
  {
    number: "04",
    title: "Internal Feedback System",
    category: "Backend & database · Sembcorp",
    description: "An internal feedback system now in operational use, supporting web and mobile users across real business workflows.",
    contribution: "During my internship, I developed and maintained backend and database components and implemented audit logging to record user activity in dedicated tables for security monitoring and traceability.",
    highlights: ["Backend and database component development", "Database audit logging and activity traceability", "Implementation, testing, debugging and maintenance"],
    stack: ["Backend", "Databases", "Web & Mobile"],
    image: "/assets/projects/feedback-system.png",
    imageAlt: "Concept artwork of a web and mobile company feedback analytics system",
    tone: "green",
    mark: "CX",
  },
];

const timeline = [
  ["Sep 2024 — Apr 2028", "Singapore Institute of Technology", "BEng (Hons) in ICT, majoring in Software Engineering · expected Apr 2028"],
  ["Feb — Aug 2023", "Sembcorp Industries Ltd", "IT Technician Intern · backend development, databases, testing and system maintenance"],
  ["2021 — 2024", "Nanyang Polytechnic", "Diploma in Infocomm & Media Engineering"],
  ["Oct 2020 — Jan 2021", "RWPrince", "Web Management Intern · website design, marketing campaigns, system updates and stock records"],
  ["2019 — 2021", "Institute of Technical Education", "Higher Nitec in IT Application Development"],
];

const personalDetails = [
  {
    number: "01",
    title: "A hands-on path into software",
    copy: "My journey through ITE, Nanyang Polytechnic and now SIT has been practical from the start. Each stage has given me a stronger foundation in application development, engineering fundamentals and solving problems with working systems.",
  },
  {
    number: "02",
    title: "Backend, data and embedded systems",
    copy: "I enjoy connecting the parts behind a product — web interfaces, backend logic, relational and document databases, caching layers and the embedded hardware a system depends on.",
  },
  {
    number: "03",
    title: "Curious, methodical and dependable",
    copy: "My approach is to understand the real need, break it into testable parts and improve it through feedback. I value clear communication, careful debugging and solutions that remain maintainable after the first demo.",
  },
];

function usePageMotion() {
  useEffect(() => {
    const root = document.documentElement;
    const updatePointer = (event) => {
      root.style.setProperty("--pointer-x", `${event.clientX}px`);
      root.style.setProperty("--pointer-y", `${event.clientY}px`);
    };
    const updateScroll = () => {
      const total = document.documentElement.scrollHeight - window.innerHeight;
      root.style.setProperty("--scroll", total > 0 ? `${(window.scrollY / total) * 100}%` : "0%");
    };
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((entry) => entry.isIntersecting && entry.target.classList.add("is-visible")),
      { threshold: 0.14 },
    );
    document.querySelectorAll("[data-reveal]").forEach((element) => observer.observe(element));
    window.addEventListener("pointermove", updatePointer, { passive: true });
    window.addEventListener("scroll", updateScroll, { passive: true });
    updateScroll();
    return () => {
      observer.disconnect();
      window.removeEventListener("pointermove", updatePointer);
      window.removeEventListener("scroll", updateScroll);
    };
  }, []);
}

function App() {
  usePageMotion();
  return (
    <>
      <div className="scroll-progress" aria-hidden="true" />
      <Navigation />
      <main>
        <Hero />
        <Marquee />
        <About />
        <Projects />
        <Experience />
        <Contact />
      </main>
    </>
  );
}

function Navigation() {
  return (
    <header className="site-header">
      <a className="brand" href="#top" aria-label="Purui Kang, back to top">
        <span>{profile.initials}</span>
        <strong>Purui Kang</strong>
      </a>
      <nav className="nav-links" aria-label="Primary navigation">
        <a href="#about">About</a>
        <a href="#work">Work</a>
        <a href="#experience">Journey</a>
      </nav>
      <a className="nav-contact" href="#contact">Contact me <span>↗</span></a>
    </header>
  );
}

function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero-grid">
        <div className="hero-word hero-word-left">
          <span>I design & build</span>
          <h1>soft<span>ware</span></h1>
          <p>Thoughtful digital products<br />with real-world purpose.</p>
        </div>
        <div className="portrait-wrap">
          <div className="orbit orbit-one" />
          <div className="orbit orbit-two" />
          <div className="portrait-frame">
            <img src={assetPath("/assets/developer-avatar.png")} alt="Illustrated portrait of Purui Kang" />
          </div>
          <div className="availability"><i /> Open to opportunities</div>
          <div className="hero-badge">Based in<br /><strong>Singapore</strong></div>
        </div>
        <div className="hero-word hero-word-right">
          <span>Software engineering</span>
          <h1>engin<span>eer</span></h1>
          <p>Web, data and embedded<br />systems — end to end.</p>
        </div>
      </div>
      <div className="hero-bottom">
        <p className="intro"><strong>Hello, I&apos;m Purui.</strong> I&apos;m a software engineering undergraduate in Singapore with hands-on experience in web applications, backend development, database systems, embedded development and system integration.</p>
        <a className="circle-link" href="#work" aria-label="Explore selected work"><span>Explore<br />my work</span><b>↓</b></a>
      </div>
    </section>
  );
}

function Marquee() {
  return (
    <div className="marquee" aria-hidden="true">
      <div>{[...skills, ...skills].map((skill, i) => <span key={`${skill}-${i}`}>{skill}<b>✦</b></span>)}</div>
    </div>
  );
}

function SectionHeading({ eyebrow, children }) {
  return <div className="section-heading" data-reveal><p>{eyebrow}</p><h2>{children}</h2></div>;
}

function About() {
  return (
    <section className="section about" id="about">
      <SectionHeading eyebrow="01 · About me">I make technology feel <em>useful, clear</em> and human.</SectionHeading>
      <div className="about-layout" data-reveal>
        <div className="about-note"><span>How I think</span><div className="scribble">build → test → learn</div></div>
        <div className="about-copy">
          <p>I&apos;m currently pursuing a BEng (Hons) in ICT, majoring in Software Engineering at Singapore Institute of Technology, with an expected graduation in 2028.</p>
          <p>I&apos;m drawn to work where software meets real operations. My projects span web applications, hybrid databases, networked Raspberry Pi systems and embedded robotics — experiences that have taught me to think beyond a single screen or technology.</p>
          <p>During my internship at Sembcorp, I developed and maintained backend and database components for an operational feedback system. I also implemented database audit logging and supported testing, debugging and issue resolution across the application lifecycle.</p>
          <a className="inline-link" href="#experience">See my journey <span>↓</span></a>
        </div>
        <div className="fact-stack">
          <div><strong>04</strong><span>Featured<br />projects</span></div>
          <div><strong>02</strong><span>Languages<br />spoken</span></div>
          <div><strong>∞</strong><span>Curiosity<br />for building</span></div>
        </div>
      </div>
      <div className="personal-intro" data-reveal>
        <div className="personal-intro-lead">
          <p className="mini-kicker">A little more about me</p>
          <h3>I grow by building things that challenge me to connect <em>people, software</em> and systems.</h3>
        </div>
        <div className="personal-detail-list">
          {personalDetails.map((item) => (
            <article key={item.number}>
              <span>{item.number}</span>
              <div><h4>{item.title}</h4><p>{item.copy}</p></div>
            </article>
          ))}
        </div>
      </div>
      <div className="now-strip" data-reveal>
        <div><span>Currently</span><strong>Studying at SIT</strong></div>
        <div><span>Exploring</span><strong>Full-stack, databases & embedded systems</strong></div>
        <div><span>Looking for</span><strong>Internships & collaborative projects</strong></div>
        <div><span>Communicating in</span><strong>English & Chinese</strong></div>
      </div>
    </section>
  );
}

function Projects() {
  return (
    <section className="section work" id="work">
      <SectionHeading eyebrow="02 · Selected work">Projects with <em>systems thinking</em> behind them.</SectionHeading>
      <div className="project-list">
        {projects.map((project) => (
          <article className="project" data-reveal key={project.title}>
            <div className={`project-visual ${project.tone}`}>
              <img src={assetPath(project.image)} alt={project.imageAlt} loading="lazy" width="1536" height="1024" />
              <span className="project-number">{project.number}</span>
              <div className="project-mark" aria-hidden="true">{project.mark}</div>
            </div>
            <div className="project-copy">
              <p className="project-category">{project.category}</p>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="project-contribution">
                <span>Project perspective</span>
                <p>{project.contribution}</p>
              </div>
              <ul className="project-highlights">
                {project.highlights.map((highlight) => <li key={highlight}>{highlight}</li>)}
              </ul>
              <div className="tags">{project.stack.map((tag) => <span key={tag}>{tag}</span>)}</div>
              {project.link && <a className="project-link" href={project.link} target="_blank" rel="noreferrer">View case study <span>↗</span></a>}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function Experience() {
  return (
    <section className="section journey" id="experience">
      <SectionHeading eyebrow="03 · My journey">Learning through <em>education, internships</em> and making.</SectionHeading>
      <div className="timeline" data-reveal>
        {timeline.map(([year, place, detail]) => <article key={`${year}-${place}`}><time>{year}</time><h3>{place}</h3><p>{detail}</p><span>↗</span></article>)}
      </div>
    </section>
  );
}

function Contact() {
  return (
    <footer className="contact" id="contact">
      <div className="contact-kicker"><i /> Available for internships & collaborations</div>
      <h2>Contact me.</h2>
      <p className="contact-intro">Have an internship, collaboration or software project in mind? Choose the best way to reach me below.</p>
      <div className="contact-grid">
        <a href={`mailto:${profile.email}`}>
          <span>Email</span>
          <strong>{profile.email}</strong>
          <b>↗</b>
        </a>
        <a href={profile.github} target="_blank" rel="noreferrer">
          <span>GitHub</span>
          <strong>github.com/nerocladiaus</strong>
          <b>↗</b>
        </a>
        <a href={`tel:${profile.phoneLink}`}>
          <span>Phone</span>
          <strong>{profile.phone}</strong>
          <b>↗</b>
        </a>
      </div>
      <div className="footer-row">
        <p>© 2026 Purui Kang</p>
        <p>{profile.location} · GMT+8</p>
        <div><a href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn</a><a href={profile.github} target="_blank" rel="noreferrer">GitHub</a><a href="#top">Back to top ↑</a></div>
      </div>
    </footer>
  );
}

createRoot(document.getElementById("root")).render(<App />);
