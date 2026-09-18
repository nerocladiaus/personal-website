import React, { useEffect } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

const profile = {
  name: "Purui Kang",
  initials: "PK",
  location: "Singapore",
  email: "Kangpuruix@gmail.com",
  github: "https://github.com/nerocladiaus",
  phone: "+65 9123 4567",
  phoneLink: "+6591234567",
  linkedin: "https://www.linkedin.com/in/purui-kang",
};

const skills = ["React", "JavaScript", "Python", "Java", "C#", "PostgreSQL", "MongoDB", "Redis", "Embedded C"];

const projects = [
  {
    number: "01",
    title: "Chorevo",
    category: "Android · AR dance learning",
    description: "An Android dance-learning experience that turns a phone into an interactive practice coach. Learners can discover routines, practise with live pose guidance and understand their progress after every session.",
    contribution: "The project combines mobile product design, real-time computer vision and cloud-backed learning features in one end-to-end experience for both learners and educators.",
    highlights: ["Live body, hand and finger landmark tracking", "Session analytics, streaks, achievements and leaderboards", "Educator video uploads with generated pose templates"],
    stack: ["Kotlin", "Jetpack Compose", "MediaPipe", "Firebase"],
    link: "https://github.com/Ryan-wong123/chorevo",
    image: "/assets/projects/chorevo.png",
    imageAlt: "Concept artwork of a mobile dance practice app using pose and hand tracking",
    tone: "blue",
    mark: "AR",
  },
  {
    number: "02",
    title: "Secure AI-Assisted Job Aggregation and Application Support Platform",
    category: "AI platform · Job search security",
    description: "A unified job-search workspace designed to reduce the time and uncertainty involved in finding suitable roles. It brings opportunities together and supports candidates through the research and application process.",
    contribution: "Security and user control shape the product direction: AI assists with understanding roles and preparing applications, while sensitive candidate information stays central to the platform’s design decisions.",
    highlights: ["Consolidated job discovery and opportunity tracking", "AI-assisted role analysis and application preparation", "Security-conscious handling of candidate information"],
    stack: ["AI Assistance", "Job Aggregation", "Secure Workflows"],
    image: "/assets/projects/secure-ai-jobs.png",
    imageAlt: "Concept artwork of a secure AI-assisted job aggregation dashboard",
    tone: "orange",
    mark: "AI",
  },
  {
    number: "03",
    title: "Semi-autonomous Robotic Arm",
    category: "Embedded systems · Robotics",
    description: "A warehouse-inspired robotic system that can be operated manually through a browser or run a coordinated autonomous pick-and-place sequence.",
    contribution: "I assembled the arm and contributed to the embedded control logic, configuration and integration work needed to produce stable movement across multiple servo-driven joints.",
    highlights: ["Browser-based manual control and live status feedback", "Autonomous pick-and-place movement sequences", "Hardware assembly, calibration and integration testing"],
    stack: ["Pico W", "Embedded C", "Servo Control"],
    image: "/assets/projects/robotic-arm.png",
    imageAlt: "Concept artwork of a web-controlled robotic arm moving packages",
    tone: "violet",
    mark: "ARM",
  },
  {
    number: "04",
    title: "Company Feedback System",
    category: "Web & mobile · Sembcorp",
    description: "A feedback collection and management product developed during my Sembcorp internship to support real business workflows across web and mobile experiences.",
    contribution: "I supported the product across backend systems, databases, client requirements, implementation, testing, debugging and ongoing maintenance — gaining experience with the full software delivery lifecycle.",
    highlights: ["Feedback capture across web and mobile", "Backend and database workflow support", "Requirements analysis, testing and issue resolution"],
    stack: ["Web", "Mobile", "Backend"],
    image: "/assets/projects/feedback-system.png",
    imageAlt: "Concept artwork of a web and mobile company feedback analytics system",
    tone: "green",
    mark: "CX",
  },
];

const timeline = [
  ["2024 — 2028", "Singapore Institute of Technology", "BEng (Hons) in ICT, majoring in Software Engineering"],
  ["2023", "Sembcorp Industries", "IT Technician Intern · backend, databases, testing and product support"],
  ["2021 — 2024", "Nanyang Polytechnic", "Diploma in Infocomm & Media Engineering"],
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
    title: "Comfortable across the stack",
    copy: "I enjoy connecting the pieces behind a product — the interface people use, the backend logic that supports it, the data model underneath and, when needed, the hardware it controls.",
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
            <img src="/assets/developer-avatar.png" alt="Illustrated portrait of Purui Kang" />
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
        <p className="intro"><strong>Hello, I&apos;m Purui.</strong> I&apos;m a software engineering undergraduate in Singapore who enjoys turning complex systems into practical, dependable experiences — from mobile apps and backend workflows to databases and embedded hardware.</p>
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
          <p>I&apos;m drawn to work where software meets real operations. I&apos;ve explored Android development, AI-assisted workflows, database systems, dashboards, feedback products and robotics — projects that have taught me to think beyond a single screen or technology.</p>
          <p>During my internship at Sembcorp, I gained experience supporting business software across backend systems, databases, testing and debugging. It strengthened my interest in building reliable software that works for real users and real teams.</p>
          <a className="inline-link" href="#experience">See my journey <span>↓</span></a>
        </div>
        <div className="fact-stack">
          <div><strong>04</strong><span>Featured<br />projects</span></div>
          <div><strong>03</strong><span>Languages<br />spoken</span></div>
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
        <div><span>Exploring</span><strong>Full-stack, AI & embedded systems</strong></div>
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
              <img src={project.image} alt={project.imageAlt} loading="lazy" width="1536" height="1024" />
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
      <SectionHeading eyebrow="03 · My journey">Learning through <em>education, work</em> and making.</SectionHeading>
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
