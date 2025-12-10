import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  const projects = [
    {
      id: 1,
      title: 'AI Gemini Chatbot',
      link: 'https://backend-ch-psi.vercel.app/app.html',
      year: '2024',
      shortDescription: 'Full-stack AI chatbot using Google Gemini API, async/await patterns, and RESTful architecture.'
    },
    {
      id: 2,
      title: 'Medicinal Plants Explorer',
      link: 'https://medicinal-plant-1.vercel.app/',
      year: '2024',
      shortDescription: 'Responsive SPA with component-based architecture, lazy loading, and optimized search functionality.'
    },
    {
      id: 3,
      title: "India's Sacred Heritage",
      link: 'https://india-s-sacred-heritage3.vercel.app/',
      year: '2024',
      shortDescription: 'SEO-optimized site with Intersection Observer API, lazy-loaded images, and WCAG compliance.'
    },
    {
      id: 4,
      title: 'Royal Feast Hotel',
      link: 'https://royal-feast-2.vercel.app/',
      year: '2024',
      shortDescription: 'MVC-pattern booking system with localStorage persistence, form validation, and event delegation.'
    },
    {
      id: 5,
      title: 'Interactive DOM Projects',
      link: 'https://domha.netlify.app/',
      year: '2024',
      shortDescription: 'Vanilla JS suite demonstrating ES6+ features, event-driven architecture, and DRY principles.'
    }
  ];

  return (
    <div className="resume-container">
      {/* HEADER */}
      <div className="header">
        <h1>Aashika Singh</h1>
        <p className="role">Full Stack Developer | BCA (Eternal University)</p>
        <div className="contact">
          <a href="mailto:aashikasingh823@gmail.com">aashikasingh823@gmail.com</a>
          <span> | </span>
          <a href="tel:+918102984585">+91 8102984585</a>
          <span> | </span>
          <a href="https://github.com/saurya96" target="_blank" rel="noopener noreferrer">GitHub</a>
          <span> | </span>
          <a href="https://www.linkedin.com/in/aashika-singh-17a28a2a7/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        </div>
        <p className="location">Aurangabad, Bihar</p>
      </div>

      {/* PROFILE */}
      <section>
        <h2>SUMMARY</h2>
        <p>
          Full Stack Developer skilled in MERN stack, RESTful APIs, and responsive SPAs. Proficient in 
          React.js, Node.js, MongoDB with strong DSA and OOP foundation. Experienced in Git workflows, 
          CI/CD, and cloud deployment. CGPA: 9.1/10
        </p>
      </section>

      {/* SKILLS */}
      <section>
        <h2>TECHNICAL SKILLS</h2>
        <div className="skills-inline">
          <p><strong>Languages:</strong> JavaScript (ES6+), Python, HTML5, CSS3/SCSS</p>
          <p><strong>Frontend:</strong> React.js, Redux, Tailwind CSS, Bootstrap, DOM Manipulation</p>
          <p><strong>Backend:</strong> Node.js, Express.js, MongoDB, MySQL, REST APIs, JWT</p>
          <p><strong>Tools:</strong> Git, GitHub, VS Code, Vite, Postman, Vercel, Netlify</p>
        </div>
      </section>

      {/* PROJECTS */}
      <section>
        <h2>PROJECTS</h2>
        {projects.map((project) => (
          <div className="item project-item-compact" key={project.id}>
            <div className="item-header">
              <h3>
                <Link to={`/project/${project.id}`} className="project-title-link">{project.title}</Link>
                <a href={project.link} target="_blank" rel="noopener noreferrer" className="external-link-inline">↗</a>
              </h3>
              <span className="date">{project.year}</span>
            </div>
            <p>{project.shortDescription}</p>
          </div>
        ))}
      </section>

      {/* EDUCATION */}
      <section>
        <h2>EDUCATION</h2>
        <div className="item">
          <div className="item-header">
            <h3>Eternal University — BCA</h3>
            <span className="date">2024 – 2027</span>
          </div>
          <p>Currently in 2nd semester | CGPA: 9.1/10</p>
        </div>
        <div className="item">
          <div className="item-header">
            <h3>Higher Secondary (Class 12) — PCB</h3>
            <span className="date">2024</span>
          </div>
          <p>CGPA: 8.87/10</p>
        </div>
      </section>

      {/* CERTIFICATIONS */}
      <section>
        <h2>CERTIFICATIONS</h2>
        <div className="certifications-compact">
          <div className="cert-item">
            <span>Git & GitHub Foundation</span>
            <a href="https://drive.google.com/file/d/1ExwV8sQlt1WebqZhrG759zhdoFDwpwrA/view?usp=sharing" target="_blank" rel="noopener noreferrer">View ↗</a>
          </div>
          <div className="cert-item">
            <span>Prompt Engineering & AI</span>
            <a href="https://drive.google.com/file/d/1Xnq7pR9smHsirflAnMgfSlL6tJaPMLzj/view?usp=sharing" target="_blank" rel="noopener noreferrer">View ↗</a>
          </div>
          <div className="cert-item">
            <span>Version Control Systems</span>
            <a href="https://drive.google.com/file/d/1AEEX59mD2W50x5ld4PG6SxId46O-pz7_/view?usp=sharing" target="_blank" rel="noopener noreferrer">View ↗</a>
          </div>
          <div className="cert-item">
            <span>AI/ML Fundamentals</span>
            <a href="https://drive.google.com/file/d/1D5KDhMpX2ITbOc8ksL0b1KboeAgmrDOy/view?usp=sharing" target="_blank" rel="noopener noreferrer">View ↗</a>
          </div>
        </div>
      </section>

      {/* EXPERIENCE & ACHIEVEMENTS */}
      <section>
        <h2>EXPERIENCE & ACHIEVEMENTS</h2>
        <ul>
          <li>Communication Coach & Well-being Facilitator at NG Organization (11 months)</li>
          <li>Academic Tutor — 5+ years, 50+ students, 95% success rate</li>
          <li>FOSS Hack Hackathon 2025 Participant</li>
        </ul>
      </section>

      {/* LANGUAGES */}
      <section>
        <h2>LANGUAGES</h2>
        <p>Hindi (Native) • English (Intermediate) • Bhojpuri (Intermediate)</p>
      </section>
    </div>
  );
}

export default Home;
