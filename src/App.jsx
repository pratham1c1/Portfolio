import { useEffect, useRef, useState } from 'react';
import { motion, useReducedMotion } from 'motion/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const asset = (path) => `${import.meta.env.BASE_URL}${path}`;

const skills = [
  { label: 'Java & JVM', icon: '☕', items: ['Java 8 / 11 / 17', 'Streams & Lambdas', 'Multithreading', 'Collections', 'JVM fundamentals'] },
  { label: 'Backend Engineering', icon: '⌘', items: ['Spring Boot', 'Spring MVC', 'Spring Security', 'REST APIs', 'JPA / Hibernate', 'Design Patterns'] },
  { label: 'Distributed Systems', icon: '◎', items: ['Microservices', 'Apache Kafka', 'Redis caching', 'Resilience patterns', 'API Gateway', 'Eureka / OpenFeign'] },
  { label: 'Data & Storage', icon: '▤', items: ['Oracle SQL', 'Query optimization', 'MySQL', 'PostgreSQL', 'MongoDB', 'pgvector'] },
  { label: 'Cloud & Delivery', icon: '↗', items: ['OCI', 'Docker', 'Kubernetes', 'Jenkins', 'GitHub Actions', 'CI/CD'] },
  { label: 'Quality & AI', icon: '✳', items: ['JUnit 5', 'Mockito', 'JMeter', 'SonarCloud', 'Spring AI', 'RAG / embeddings'] },
];

const experiences = [
  {
    year: '2023 — NOW', date: 'June 2023 – Present', role: 'Software Developer', company: 'Oracle', logo: 'img/oracle_logo.png', location: 'Bengaluru, India', tag: 'FINANCIAL CLOUD · DAMS',
    intro: 'Building backend capabilities for Oracle Accounting Foundation Cloud Service, with a focus on Data Adjustment Management Service.',
    bullets: [
      'Built Java and Spring Boot backend microservices for AFCS DAMS, supporting 10M+ financial records and requests of up to 50K records for 10+ enterprise banking clients.',
      'Designed and maintained 15+ REST APIs and optimized Oracle SQL, reducing API latency by about 40% and query time by about 60%; financial report generation improved from 45 minutes to 15–20 minutes.',
      'Built maker-checker approval workflows and Kafka-based pipelines, integrating OCI IAM / IDCS and Object Storage into template-management workflows.',
      'Resolved 200+ defects and contributed to 15+ production enhancements; added unit and integration tests with JUnit, Mockito and Postman, and supported CI/CD using Jenkins, Docker and Kubernetes.'
    ],
    stack: ['Java', 'Spring Boot', 'Oracle SQL', 'Kafka', 'OCI', 'Docker', 'Kubernetes']
  },
  {
    year: '2023', date: 'January 2023 – June 2023', role: 'Java Backend Developer Intern', company: 'Turtlemint', logo: 'img/turtlemint_logo.png', location: 'Pune, India', tag: 'INSURTECH · API INTEGRATION',
    intro: 'Worked on backend integration services for insurance-plan data and resilient API communication.',
    bullets: [
      'Developed Java / Spring Boot services to consume, normalize and expose insurance-plan data from external insurer APIs.',
      'Worked with REST and GraphQL interfaces, Redis caching and MongoDB to support reliable access to plan and user data.',
      'Contributed to service integration, error handling and backend maintainability.'
    ],
    stack: ['Java', 'Spring Boot', 'REST', 'GraphQL', 'Redis', 'MongoDB']
  }
];

const projects = [
  {
    number: '01', category: 'BACKEND · DISTRIBUTED SYSTEMS', title: 'E-commerce Microservices', description: 'A monolith-to-microservices migration that separates core commerce domains into independently deployable services.',
    image: 'img/Ecommerce_Microservices_Cinematic_Preview.gif', alt: 'E-commerce backend workflow diagram', stack: ['Spring Boot', 'Eureka', 'OpenFeign', 'API Gateway', 'JWT', 'Kafka', 'Spring AI', 'pgvector'],
    highlights: ['Four independently deployable services: User, Product, Order and Payment', 'JMeter validation at 100 concurrent users with ~48.7 requests/sec and 46.7 ms average latency', 'Kafka consumer groups, retries, idempotent processing and dead-letter handling; RAG retrieval with Spring AI and pgvector'],
    links: [{ label: 'GitHub', href: 'https://github.com/pratham1c1/Ecommerce_Microservices.git' },
      { label: 'Demo', href: 'https://pratham1c1.github.io/Ecommerce_FrontEnd/' }
    ]
  },
  {
    number: '02', category: 'FULL-STACK · COMMUNITY', title: 'GameJam Platform', description: 'A community platform for creating, uploading and discovering games, built with a React frontend and Spring Boot backend.',
    image: 'img/GameJam.png', alt: 'GameJam platform interface', stack: ['React', 'Spring Boot', 'MongoDB', 'GridFS', 'JWT'],
    highlights: ['Game upload and download flows', 'Secure authentication and REST APIs', 'Community-oriented browsing experience'],
    links: [{ label: 'Live demo', href: 'https://pc-gamejam.netlify.app/' }, { label: 'GitHub', href: 'https://github.com/pratham1c1/Game_Jam/tree/main' }]
  },
  {
    number: '03', category: 'ENTERPRISE · FINANCIAL WORKFLOWS', title: 'Template Configuration Automation', description: 'A self-service template configuration workflow for financial adjustments, integrating identity validation, data mapping and asynchronous status updates.',
    image: 'img/img-1.png', alt: 'Enterprise workflow project illustration', stack: ['Java', 'Spring Boot', 'Oracle SQL', 'OCI IAM', 'Object Storage', 'Kafka'],
    highlights: ['Attribute mapping and validation APIs for financial adjustment templates', 'OCI IAM / IDCS and Object Storage integration', 'Designed to reduce manual configuration effort by about 60%'],
    links: []
  }
];

function Arrow({ diagonal = false }) {
  return <span aria-hidden="true" className="arrow">{diagonal ? '↗' : '→'}</span>;
}

function Header({ theme, setTheme }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  const links = [['Experience', '#experience'], ['Projects', '#projects'], ['Tech wall', '#learning-map-section'], ['Credentials', '#credentials'], ['About', '#about']];
  return <header className={`site-header ${scrolled ? 'is-scrolled' : ''}`}>
    <a className="wordmark" href="#home" aria-label="Prathamesh Chandekar home"><span className="wordmark-mark">PC</span><span>PCthings</span></a>
    <nav className={menuOpen ? 'nav-open' : ''} aria-label="Main navigation">
      {links.map(([label, href]) => <a key={href} href={href} onClick={() => setMenuOpen(false)}>{label}</a>)}
      <a className="nav-contact" href="#contact" onClick={() => setMenuOpen(false)}>Let's talk <Arrow diagonal /></a>
    </nav>
    <div className="header-actions">
      <button className="theme-toggle" onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')} aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`} title="Toggle theme"><span>{theme === 'dark' ? '☼' : '☾'}</span></button>
      <button className={`menu-toggle ${menuOpen ? 'active' : ''}`} onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle navigation"><span></span><span></span></button>
    </div>
  </header>;
}

function Hero({ reducedMotion }) {
  return <section className="hero section-shell" id="home">
    <div className="hero-grid" aria-hidden="true"></div>
    <div className="hero-copy">
      <motion.div className="eyebrow" initial={reducedMotion ? false : { opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .6 }} style={{fontSize:'15px'}}><span className="status-dot"></span> JAVA BACKEND DEVELOPER <span className="eyebrow-divider">/</span> BENGALURU, IN</motion.div>
      <motion.h1 initial={reducedMotion ? false : { opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .8, delay: .08 }}>Building systems<br />that <span className="text-gradient">scale with purpose.</span></motion.h1>
      <motion.p className="hero-summary" initial={reducedMotion ? false : { opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .7, delay: .2 }}><span style={{fontSize:'30px', color:'#2EB130'}}>I'm Prathamesh </span>— a backend engineer focused on Java, Spring Boot and distributed systems. I turn complex workflows into reliable, maintainable software.</motion.p>
      <motion.div className="hero-actions" initial={reducedMotion ? false : { opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .6, delay: .3 }}>
        <a className="button button-primary" href="#projects">Explore my work <Arrow /></a>
        <a className="button button-ghost" href={`${asset('resume/Prathamesh_3YOE_backend_v4.pdf')}`} download="Prathamesh_3YOE_backend_v4.pdf">Download resume <Arrow diagonal /></a>
      </motion.div>
      <div className="hero-proof"><div><strong>Java</strong><span>Core strength</span></div><i></i><div><strong>Spring Boot</strong><span>Backend systems</span></div><i></i><div><strong>Distributed</strong><span>System mindset</span></div></div>
    </div>
    <motion.div className="hero-visual" initial={reducedMotion ? false : { opacity: 0, scale: .94, rotate: 2 }} animate={{ opacity: 1, scale: 1, rotate: 0 }} transition={{ duration: 1, delay: .18 }}>
      <div className="visual-orbit orbit-one"></div><div className="visual-orbit orbit-two"></div><div className="visual-glow"></div>
      <div className="visual-card main-code-card"><div className="code-window-top"><div className="window-dots"><i></i><i></i><i></i></div><span>service.java</span><span className="code-live">● LIVE</span></div><div className="code-lines"><div><em>01</em><code><b>public</b> <strong>class</strong> <span>ScalableService</span> {'{'}</code></div><div><em>02</em><code>&nbsp;&nbsp;<b>private final</b> <span>KafkaTemplate</span> events;</code></div><div><em>03</em><code>&nbsp;</code></div><div><em>04</em><code>&nbsp;&nbsp;<b>public</b> <span>Result</span> <strong>process</strong>(Request req) {'{'}</code></div><div><em>05</em><code>&nbsp;&nbsp;&nbsp;&nbsp;<i>// validate, process, publish</i></code></div><div><em>06</em><code>&nbsp;&nbsp;&nbsp;&nbsp;<b>return</b> pipeline.execute(req);</code></div><div><em>07</em><code>&nbsp;&nbsp;{'}'}</code></div><div><em>08</em><code>{'}'}</code></div></div><div className="code-window-bottom"><span><i className="status-dot"></i> build passing</span><span>Java · Spring Boot</span></div></div>
      <motion.div className="floating-chip chip-kafka" animate={reducedMotion ? {} : { y: [0, -9, 0] }} transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}><span className="chip-icon orange">↯</span><span><b>Event-driven</b><small>Kafka pipelines</small></span></motion.div>
      <motion.div className="floating-chip chip-spring" animate={reducedMotion ? {} : { y: [0, 8, 0] }} transition={{ duration: 4.6, repeat: Infinity, ease: 'easeInOut' }}><span className="chip-icon green">⌘</span><span><b>Spring Boot</b><small>REST · Microservices</small></span></motion.div>
      <div className="visual-coordinate">12°58' N<br />77°35' E</div>
    </motion.div>
    <a className="scroll-cue" href="#experience"><span className="scroll-line"></span> SCROLL TO EXPLORE</a>
    <div className="hero-index">01 <span>/</span> 06</div>
  </section>;
}

function SectionHeading({ index, eyebrow, title, accent, description }) {
  return <div className="section-heading reveal"><div className="section-index">{index} <span>—</span> {eyebrow}</div><h2>{title} <span className="text-gradient">{accent}</span></h2>{description && <p>{description}</p>}</div>;
}

function Experience({ reducedMotion }) {
  const pathRef = useRef(null);
  const travelerRef = useRef(null);
  useEffect(() => {
    if (reducedMotion || !pathRef.current || !travelerRef.current) return;
    const path = pathRef.current;
    const traveler = travelerRef.current;
    const svg = path.ownerSVGElement;
    const length = path.getTotalLength();
    const travelerProgress = { value: 0 };
    const placeTraveler = () => {
      const point = path.getPointAtLength(length * travelerProgress.value);
      const scaleY = svg.clientHeight / 1000;
      gsap.set(traveler, { x: point.x - 50, y: point.y * scaleY, xPercent: -50, yPercent: -50 });
    };
    gsap.set(path, { strokeDasharray: length, strokeDashoffset: length });
    placeTraveler();
    const draw = gsap.to(path, { strokeDashoffset: 0, ease: 'none', scrollTrigger: { trigger: '#experience', start: 'top 65%', end: 'bottom 65%', scrub: 1 } });
    const move = gsap.to(travelerProgress, { value: 1, ease: 'none', onUpdate: placeTraveler, scrollTrigger: { trigger: '#experience', start: 'top 70%', end: 'bottom 60%', scrub: 1 } });
    return () => { draw.scrollTrigger?.kill(); move.scrollTrigger?.kill(); draw.kill(); move.kill(); };
  }, [reducedMotion]);
  return <section id="experience" className="section-block experience-section">
    <div className="section-shell"><SectionHeading index="01" eyebrow="THE JOURNEY" title="From learning to" accent="building." description="A path through the teams, systems and problems that have shaped how I engineer software." />
      <div className="journey-wrap">
        <div className="journey-route" aria-hidden="true"><svg viewBox="0 0 100 1000" preserveAspectRatio="none"><path className="route-base" d="M50 0 C50 100 14 110 18 210 S82 330 78 430 S14 560 20 660 S78 790 50 1000"/><path ref={pathRef} className="route-progress" d="M50 0 C50 100 14 110 18 210 S82 330 78 430 S14 560 20 660 S78 790 50 1000"/></svg><div className="journey-traveler" ref={travelerRef}><span className="traveler-backpack"></span><span className="traveler-head"></span><span className="traveler-body"></span><span className="traveler-leg leg-a"></span><span className="traveler-leg leg-b"></span></div></div>
        <div className="journey-stops">{experiences.map((item, i) => <article className={`experience-card reveal ${i % 2 ? 'experience-card-right' : ''}`} key={item.company}>
          <div className="experience-card-top"><span className="experience-year">{item.year}</span><span className="experience-tag">{item.tag}</span></div>
          <div className="experience-company"><div className="company-logo"><img src={asset(item.logo)} alt={`${item.company} logo`} /></div><div><h3>{item.role}</h3><p>{item.company} <span>·</span> {item.location}</p></div></div>
          <p className="experience-intro">{item.intro}</p><ul className="experience-bullets">{item.bullets.map((b) => <li key={b}>{b}</li>)}</ul>
          <div className="tag-list">{item.stack.map((s) => <span key={s}>{s}</span>)}</div>
        </article>)}</div>
      </div>
    </div>
  </section>;
}

function Projects() {
  const [expanded, setExpanded] = useState('01');
  return <section id="projects" className="section-block projects-section"><div className="section-shell"><SectionHeading index="02" eyebrow="SELECTED WORK" title="Projects with a" accent="purpose." description="A selection of systems and tools that demonstrate how I approach APIs, architecture, data and user-facing workflows." />
    <div className="project-list">{projects.map((project, i) => <motion.article key={project.number} className={`project-card reveal ${expanded === project.number ? 'project-expanded' : ''}`} whileHover={{ y: -3 }} transition={{ duration: .22 }}>
      <button className="project-card-head" onClick={() => setExpanded(expanded === project.number ? '' : project.number)} aria-expanded={expanded === project.number}><span className="project-number">{project.number}</span><span className="project-title-wrap"><span className="project-category">{project.category}</span><strong>{project.title}</strong></span><span className="project-toggle">{expanded === project.number ? '−' : '+'}</span></button>
      {expanded === project.number && <div className="project-card-body"><div className="project-description"><p>{project.description}</p><ul>{project.highlights.map(h => <li key={h}>{h}</li>)}</ul><div className="tag-list">{project.stack.map(s => <span key={s}>{s}</span>)}</div><div className="project-links">{project.links.length ? project.links.map(link => <a href={link.href} target="_blank" rel="noreferrer" key={link.label}>{link.label} <Arrow diagonal /></a>) : <span className="private-project-note">Selected work · details available on request</span>}</div></div><div className="project-preview"><img src={asset(project.image)} alt={project.alt} loading="lazy" /></div></div>}
    </motion.article>)}</div>
    <div className="projects-footer"><span>More experiments, code and notes live on GitHub.</span><a className="text-link" href="https://github.com/pratham1c1?tab=repositories" target="_blank" rel="noreferrer">Browse repositories <Arrow diagonal /></a></div>
  </div></section>;
}

const techWallGroups = [
  { title: 'Java & JVM', subtitle: 'Language fundamentals', icon: '☕', tone: 'violet', skills: ['Java 8 / 11 / 17', 'Core Java', 'Streams & Lambdas', 'Collections', 'Multithreading', 'Generics'] },
  { title: 'Backend Engineering', subtitle: 'APIs & application design', icon: '⌘', tone: 'cyan', skills: ['Spring Boot', 'Spring MVC', 'Spring Security', 'JPA / Hibernate', 'REST APIs', 'Design Patterns'] },
  { title: 'Distributed Systems', subtitle: 'Resilient service communication', icon: '⟷', tone: 'blue', skills: ['Microservices', 'Apache Kafka', 'Redis', 'API Gateway', 'Eureka', 'OpenFeign'] },
  { title: 'Databases & Search', subtitle: 'Data modeling and performance', icon: '▤', tone: 'orange', skills: ['Oracle SQL', 'Query Optimization', 'MySQL', 'PostgreSQL', 'MongoDB', 'pgvector'] },
  { title: 'Cloud & DevOps', subtitle: 'Build, ship and operate', icon: '☁', tone: 'green', skills: ['OCI', 'Docker', 'Kubernetes', 'Jenkins', 'GitHub Actions', 'CI/CD'] },
  { title: 'AI & GenAI', subtitle: 'Retrieval and language models', icon: '✳', tone: 'pink', skills: ['RAG', 'LLMs', 'Spring AI', 'Ollama', 'Vector Embeddings', 'Prompt Engineering'] },
  { title: 'Testing & Quality', subtitle: 'Confidence through verification', icon: '⌁', tone: 'yellow', skills: ['JUnit 5', 'Mockito', 'JMeter', 'Integration Testing', 'SonarCloud', 'Postman', 'Swagger'] },
  { title: 'Frontend & Tools', subtitle: 'Interfaces and daily workflow', icon: '◈', tone: 'teal', skills: ['JavaScript', 'React', 'HTML', 'CSS', 'Git', 'IntelliJ'] },
  { title: 'Engineering Practices', subtitle: 'How I approach problems', icon: '◎', tone: 'violet', skills: ['System Design', 'SOLID Principles', 'Agile / Scrum', 'API Design', 'Microservices Architecture'] },
];

function TechWall() {
  const reducedMotion = useReducedMotion();
  const [activeGroup, setActiveGroup] = useState('All skills');
  const filters = ['All skills', ...techWallGroups.map((group) => group.title)];
  const visibleGroups = activeGroup === 'All skills' ? techWallGroups : techWallGroups.filter((group) => group.title === activeGroup);
  return <section id="learning-map-section" className="section-block map-section tech-wall-section">
    <div className="section-shell">
      <SectionHeading index="03" eyebrow="THE TOOLKIT, AT A GLANCE" title="My technical" accent="stack." description="A visual wall of the technologies, tools and engineering practices I use across backend development, distributed systems, data and AI." />
      <div className="tech-wall-toolbar">
        <div className="tech-wall-status"><span className="status-dot"></span><span>TECH STACK</span></div>
        <label className="tech-wall-filter-label">Filter by area
          <select value={activeGroup} onChange={(event) => setActiveGroup(event.target.value)} aria-label="Filter technology cards">
            {filters.map((filter) => <option key={filter} value={filter}>{filter}</option>)}
          </select>
        </label>
      </div>
      <motion.div layout className="tech-wall-grid">
        {visibleGroups.map((group, index) => <motion.article
          layout
          key={group.title}
          className={`tech-wall-card tone-${group.tone}`}
          initial={reducedMotion ? false : { opacity: 0, y: 24, scale: .97 }}
          whileInView={reducedMotion ? undefined : { opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, amount: .15 }}
          transition={{ duration: reducedMotion ? 0 : .48, delay: reducedMotion ? 0 : (index % 3) * .07, ease: 'easeOut' }}
          whileHover={reducedMotion ? undefined : { y: -6, rotateX: 2, rotateY: index % 2 ? -1 : 1 }}
        >
          <div className="tech-wall-card-top"><span className="tech-wall-icon" aria-hidden="true">{group.icon}</span><span className="tech-wall-index">{String(techWallGroups.findIndex((item) => item.title === group.title) + 1).padStart(2, '0')}</span></div>
          <div className="tech-wall-card-heading"><h3>{group.title}</h3><p>{group.subtitle}</p></div>
          <div className="tech-wall-energy" aria-hidden="true"><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span></div>
          <div className="tech-wall-tags">{group.skills.map((skill, skillIndex) => <motion.span key={skill} initial={reducedMotion ? false : { opacity: 0, scale: .92 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: .22, delay: reducedMotion ? 0 : Math.min(skillIndex * .035, .2) }}>{skill}</motion.span>)}</div>
          <div className="tech-wall-card-foot"><span><i></i> SKILL CLUSTER</span><span>{String(group.skills.length).padStart(2, '0')} ITEMS</span></div>
        </motion.article>)}
      </motion.div>
      <div className="tech-wall-note"><span className="tech-wall-note-mark">✳</span><p><strong>Backend-first. Systems-minded.</strong> Java and Spring Boot are at the core, supported by databases, messaging, cloud delivery, testing and AI-assisted exploration.</p></div>
    </div>
  </section>;
}

function Credentials() {
  const items = [
    { type: 'EDUCATION', year: '2019 — 2023', title: "Bachelor’s in Information Technology", place: 'VIIT, Pune', detail: 'CGPA 9.63 / 10' },
    { type: 'CERTIFICATION', year: 'CREDENTIAL', title: 'Container & Kubernetes Essentials', place: 'IBM', detail: 'Cloud-native foundations' },
    { type: 'CERTIFICATION', year: 'CREDENTIAL', title: 'Java Programming', place: 'Duke University', detail: 'Programming fundamentals' },
    { type: 'ACHIEVEMENT', year: '2023', title: 'GATE Qualified', place: 'Graduate Aptitude Test in Engineering', detail: 'All India Rank 8295' },
  ];
  return <section id="credentials" className="section-block credentials-section"><div className="section-shell"><SectionHeading index="04" eyebrow="FOUNDATIONS & CREDENTIALS" title="The fundamentals" accent="behind the work." description="Education and credentials that support my approach to software engineering." /><div className="credentials-grid">{items.map((item, i) => <article className="credential-card reveal" key={item.title}><div className="credential-top"><span>{item.type}</span><span>{item.year}</span></div><div className="credential-icon">{item.type === 'EDUCATION' ? '⌂' : item.type === 'ACHIEVEMENT' ? '✦' : '◇'}</div><h3>{item.title}</h3><p>{item.place}</p><div className="credential-detail">{item.detail}</div></article>)}</div><div className="education-note"><span>ALSO COMPLETED</span><p>HSC · 84.6% · Manere High School & Jr. College, Kolhapur · 2017–2019</p></div></div></section>;
}

function About() {
  return <section id="about" className="section-block about-section"><div className="section-shell about-grid"><div className="about-portrait reveal"><div className="portrait-frame"><img src={asset('img/PC_Image.png')} alt="Portrait of Prathamesh Chandekar" loading="lazy" /><div className="portrait-corner portrait-corner-tl"></div><div className="portrait-corner portrait-corner-br"></div></div><div className="portrait-caption"><span className="status-dot"></span> OPEN TO BACKEND ENGINEERING OPPORTUNITIES</div></div><div className="about-copy reveal"><div className="section-index">05 <span>—</span> A LITTLE ABOUT ME</div><h2>Engineer by craft.<br /><span className="text-gradient">Curious by default.</span></h2><p className="about-lead">I enjoy understanding what happens behind the interface: how services communicate, how data moves, and how to make systems more reliable as they grow.</p><p>My day-to-day work spans Java and Spring Boot APIs, SQL-backed workflows, asynchronous processing, testing and delivery. Outside work, I explore distributed systems, build full-stack projects and keep sharpening my fundamentals through hands-on learning.</p><div className="about-facts"><div><strong>400+</strong><span>LeetCode problems</span></div><div><strong>15+</strong><span>Production APIs</span></div><div><strong>90%+</strong><span>Test coverage</span></div></div><a className="button button-primary" href={asset('resume/Prathamesh_3YOE_backend_v4.pdf')} download="Prathamesh_3YOE_backend_v4.pdf">Download latest resume <Arrow diagonal /></a><div className="footer-links"><a href="https://github.com/pratham1c1?tab=repositories" target="_blank" rel="noreferrer">GitHub <Arrow diagonal /></a><a href="https://www.linkedin.com/in/prathamesh-chandekar/" target="_blank" rel="noreferrer">LinkedIn <Arrow diagonal /></a><a href="https://leetcode.com/u/user5591sk/" target="_blank" rel="noreferrer">LeetCode <Arrow diagonal /></a></div></div></div></section>;
}

function Contact() {
  return <section id="contact" className="section-block contact-section"><div className="section-shell"><div className="contact-panel reveal"><div className="contact-orb" aria-hidden="true"></div><div className="section-index">06 <span>—</span> WHAT'S NEXT?</div><h2>Have a good problem?<br /><span className="text-gradient">Let's solve it.</span></h2><p>I'm interested in backend engineering roles where thoughtful design, reliable systems and continuous learning matter.</p><a className="button button-primary" href="mailto:prathamchandra2001@gmail.com">Start a conversation <Arrow diagonal /></a><div className="contact-meta"><a href="mailto:prathamchandra2001@gmail.com">prathamchandra2001@gmail.com</a><span>·</span><a href="tel:+919421809466">+91 94218 09466</a></div></div></div></section>;
}

function Footer() {
  return <footer className="site-footer"><div className="section-shell footer-inner"><a className="wordmark" href="#home"><span className="wordmark-mark">PC</span><span>PCthings</span></a><p>Designed with curiosity. Built with intention.</p><span className="copyright">© {new Date().getFullYear()} Prathamesh Chandekar</span></div></footer>;
}

export default function App() {
  const [theme, setTheme] = useState(() => localStorage.getItem('pc-theme') || (window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark'));
  const reducedMotion = useReducedMotion();
  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    localStorage.setItem('pc-theme', theme);
  }, [theme]);
  useEffect(() => {
    if (reducedMotion) return;
    const ctx = gsap.context(() => {
      gsap.utils.toArray('.reveal').forEach((element) => {
        gsap.fromTo(element, { y: 24, opacity: 0 }, { y: 0, opacity: 1, duration: .7, ease: 'power2.out', scrollTrigger: { trigger: element, start: 'top 88%', once: true } });
      });
    });
    return () => ctx.revert();
  }, [reducedMotion]);
  return <div className="app-shell"><Header theme={theme} setTheme={setTheme} /><main><Hero reducedMotion={reducedMotion} /><Experience reducedMotion={reducedMotion} /><Projects /><TechWall /><Credentials /><About /><Contact /></main><Footer /><a className="back-to-top" href="#home" aria-label="Back to top">↑</a></div>;
}
