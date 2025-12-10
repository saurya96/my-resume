import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  const projects = [
    { id: 1, title: 'AI Gemini Chatbot', link: 'https://backend-ch-psi.vercel.app/app.html', tech: 'Gemini API, REST, Async/Await' },
    { id: 2, title: 'Medicinal Plants Explorer', link: 'https://medicinal-plant-1.vercel.app/', tech: 'React SPA, Lazy Loading' },
    { id: 3, title: "India's Sacred Heritage", link: 'https://india-s-sacred-heritage3.vercel.app/', tech: 'SEO, Intersection Observer' },
    { id: 4, title: 'Royal Feast Hotel', link: 'https://royal-feast-2.vercel.app/', tech: 'MVC, localStorage, Validation' },
    { id: 5, title: 'Interactive DOM Projects', link: 'https://domha.netlify.app/', tech: 'ES6+, Event-Driven' }
  ];

  return (
    <div className="resume-container single-page">
      {/* HEADER */}
      <div className="header-compact">
        <h1>Aashika Singh</h1>
        <div className="contact-line">
          <a href="mailto:aashikasingh823@gmail.com">aashikasingh823@gmail.com</a> | 
          <a href="tel:+918102984585">+91 8102984585</a> | 
          <a href="https://github.com/saurya96" target="_blank" rel="noopener noreferrer">GitHub</a> | 
          <a href="https://www.linkedin.com/in/aashika-singh-17a28a2a7/" target="_blank" rel="noopener noreferrer">LinkedIn</a> | 
          Aurangabad, Bihar
        </div>
      </div>

      {/* SUMMARY */}
      <section className="section-tight">
        <h2>SUMMARY</h2>
        <p>Full Stack Developer (MERN) | BCA @ Eternal University (CGPA: 9.1) | Skilled in React.js, Node.js, MongoDB, REST APIs, Git/CI-CD</p>
      </section>

      {/* SKILLS */}
      <section className="section-tight">
        <h2>TECHNICAL SKILLS</h2>
        <p><strong>Languages:</strong> JavaScript (ES6+), Python, HTML5, CSS3 | <strong>Frontend:</strong> React.js, Redux, Tailwind, Bootstrap | <strong>Backend:</strong> Node.js, Express, MongoDB, MySQL, JWT | <strong>Tools:</strong> Git, Vite, Postman, Vercel</p>
      </section>

      {/* PROJECTS */}
      <section className="section-tight">
        <h2>PROJECTS</h2>
        <div className="projects-grid">
          {projects.map((p) => (
            <div className="project-mini" key={p.id}>
              <Link to={`/project/${p.id}`}>{p.title}</Link>
              <a href={p.link} target="_blank" rel="noopener noreferrer">↗</a>
              <span className="tech">{p.tech}</span>
            </div>
          ))}
        </div>
      </section>

      {/* EDUCATION & CERTIFICATIONS */}
      <section className="section-tight">
        <h2>EDUCATION & CERTIFICATIONS</h2>
        <div className="two-col">
          <div>
            <p><strong>BCA</strong> — Eternal University (2024-2027) | CGPA: 9.1</p>
            <p><strong>Class 12 (PCB)</strong> — 2024 | CGPA: 8.87</p>
          </div>
          <div className="certs-inline">
            <a href="https://drive.google.com/file/d/1ExwV8sQlt1WebqZhrG759zhdoFDwpwrA/view" target="_blank" rel="noopener noreferrer">Git & GitHub ↗</a>
            <a href="https://drive.google.com/file/d/1Xnq7pR9smHsirflAnMgfSlL6tJaPMLzj/view" target="_blank" rel="noopener noreferrer">Prompt Engineering ↗</a>
            <a href="https://drive.google.com/file/d/1AEEX59mD2W50x5ld4PG6SxId46O-pz7_/view" target="_blank" rel="noopener noreferrer">Version Control ↗</a>
            <a href="https://drive.google.com/file/d/1D5KDhMpX2ITbOc8ksL0b1KboeAgmrDOy/view" target="_blank" rel="noopener noreferrer">AI/ML ↗</a>
          </div>
        </div>
      </section>

      {/* EXPERIENCE */}
      <section className="section-tight">
        <h2>EXPERIENCE & ACHIEVEMENTS</h2>
        <p>• Communication Coach @ NG Organization (11 months) • Academic Tutor (5+ yrs, 50+ students) • FOSS Hack 2025 Participant</p>
      </section>

      {/* LANGUAGES */}
      <section className="section-tight last">
        <h2>LANGUAGES</h2>
        <p>Hindi (Native) • English (Intermediate) • Bhojpuri (Intermediate)</p>
      </section>
    </div>
  );
}

export default Home;
