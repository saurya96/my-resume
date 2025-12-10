import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  const projects = [
    { 
      id: 1, 
      title: 'AI Gemini Chatbot', 
      link: 'https://backend-ch-psi.vercel.app/app.html', 
      tech: 'Google Gemini API, Node.js, REST APIs, Async/Await',
      description: 'Full-stack AI chatbot with natural language processing, context-aware responses, and real-time streaming.'
    },
    { 
      id: 2, 
      title: 'Medicinal Plants Explorer', 
      link: 'https://medicinal-plant-1.vercel.app/', 
      tech: 'React.js, Component Architecture, Lazy Loading, Search Optimization',
      description: 'Responsive SPA featuring 100+ plants database with advanced filtering and image optimization.'
    },
    { 
      id: 3, 
      title: "India's Sacred Heritage", 
      link: 'https://india-s-sacred-heritage3.vercel.app/', 
      tech: 'SEO Optimization, Intersection Observer API, WCAG Compliance',
      description: 'Accessible heritage website with lazy-loaded media, semantic HTML, and performance optimization.'
    },
    { 
      id: 4, 
      title: 'Royal Feast Hotel', 
      link: 'https://royal-feast-2.vercel.app/', 
      tech: 'MVC Pattern, localStorage, Form Validation, Event Delegation',
      description: 'Hotel booking system with room management, cart functionality, and persistent user sessions.'
    },
    { 
      id: 5, 
      title: 'Interactive DOM Projects', 
      link: 'https://domha.netlify.app/', 
      tech: 'ES6+ JavaScript, Event-Driven Architecture, DOM Manipulation',
      description: 'Collection of vanilla JS projects demonstrating advanced DOM techniques and animations.'
    }
  ];

  return (
    <div className="resume-container single-page">
      {/* HEADER */}
      <div className="header-section">
        <h1>AASHIKA SINGH</h1>
        <p className="subtitle">Full Stack Developer</p>
        <div className="contact-row">
          <span><a href="mailto:aashikasingh823@gmail.com">aashikasingh823@gmail.com</a></span>
          <span><a href="tel:+918102984585">+91 8102984585</a></span>
          <span><a href="https://github.com/saurya96" target="_blank" rel="noopener noreferrer">GitHub</a></span>
          <span><a href="https://www.linkedin.com/in/aashika-singh-17a28a2a7/" target="_blank" rel="noopener noreferrer">LinkedIn</a></span>
          <span>Aurangabad, Bihar</span>
        </div>
      </div>

      {/* PROFESSIONAL SUMMARY */}
      <section className="section">
        <h2>PROFESSIONAL SUMMARY</h2>
        <p className="summary-text">
          Motivated Full Stack Developer with expertise in MERN stack, RESTful API development, and responsive web applications. 
          Currently pursuing BCA at Eternal University with a strong academic record (CGPA: 9.1/10). Proficient in modern JavaScript 
          frameworks, database management, and cloud deployment. Passionate about writing clean, maintainable code and implementing 
          best practices in software development. Strong foundation in Data Structures, Algorithms, and Object-Oriented Programming.
        </p>
      </section>

      {/* TECHNICAL SKILLS */}
      <section className="section">
        <h2>TECHNICAL SKILLS</h2>
        <div className="skills-grid">
          <div className="skill-row">
            <span className="skill-label">Languages:</span>
            <span className="skill-value">JavaScript (ES6+), Python, HTML5, CSS3/SCSS, SQL</span>
          </div>
          <div className="skill-row">
            <span className="skill-label">Frontend:</span>
            <span className="skill-value">React.js, Redux, Tailwind CSS, Bootstrap, DOM APIs, Responsive Design</span>
          </div>
          <div className="skill-row">
            <span className="skill-label">Backend:</span>
            <span className="skill-value">Node.js, Express.js, MongoDB, MySQL, REST APIs, JWT Authentication</span>
          </div>
          <div className="skill-row">
            <span className="skill-label">Tools & DevOps:</span>
            <span className="skill-value">Git, GitHub, VS Code, Vite, Postman, Vercel, Netlify, npm</span>
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section className="section">
        <h2>PROJECTS</h2>
        <div className="projects-list">
          {projects.map((p) => (
            <div className="project-item" key={p.id}>
              <div className="project-header">
                <h3>
                  <Link to={`/project/${p.id}`}>{p.title}</Link>
                  <a href={p.link} target="_blank" rel="noopener noreferrer" className="live-link">Live ↗</a>
                </h3>
              </div>
              <p className="project-tech">{p.tech}</p>
              <p className="project-desc">{p.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* EDUCATION */}
      <section className="section">
        <h2>EDUCATION</h2>
        <div className="education-item">
          <div className="edu-header">
            <h3>Bachelor of Computer Applications (BCA)</h3>
            <span className="date">2024 – 2027</span>
          </div>
          <p>Eternal University, Himachal Pradesh | Currently in 2nd Semester | CGPA: 9.1/10</p>
        </div>
        <div className="education-item">
          <div className="edu-header">
            <h3>Higher Secondary Education (Class 12 - PCB)</h3>
            <span className="date">2024</span>
          </div>
          <p>Bihar Board | CGPA: 8.87/10</p>
        </div>
      </section>

      {/* CERTIFICATIONS */}
      <section className="section">
        <h2>CERTIFICATIONS</h2>
        <div className="certs-grid">
          <a href="https://drive.google.com/file/d/1ExwV8sQlt1WebqZhrG759zhdoFDwpwrA/view" target="_blank" rel="noopener noreferrer" className="cert-badge">Git & GitHub Foundation ↗</a>
          <a href="https://drive.google.com/file/d/1Xnq7pR9smHsirflAnMgfSlL6tJaPMLzj/view" target="_blank" rel="noopener noreferrer" className="cert-badge">Prompt Engineering & AI ↗</a>
          <a href="https://drive.google.com/file/d/1AEEX59mD2W50x5ld4PG6SxId46O-pz7_/view" target="_blank" rel="noopener noreferrer" className="cert-badge">Version Control Systems ↗</a>
          <a href="https://drive.google.com/file/d/1D5KDhMpX2ITbOc8ksL0b1KboeAgmrDOy/view" target="_blank" rel="noopener noreferrer" className="cert-badge">AI/ML Fundamentals ↗</a>
        </div>
      </section>

      {/* EXPERIENCE */}
      <section className="section">
        <h2>EXPERIENCE</h2>
        <div className="experience-item">
          <div className="exp-header">
            <h3>Communication Coach & Well-being Facilitator</h3>
            <span className="date">11 Months</span>
          </div>
          <p className="company">NG Organization</p>
          <p>Conducted workshops on effective communication and mental well-being for 100+ participants.</p>
        </div>
        <div className="experience-item">
          <div className="exp-header">
            <h3>Academic Tutor</h3>
            <span className="date">5+ Years</span>
          </div>
          <p>Mentored 50+ students in Science and Mathematics with 95% success rate in board examinations.</p>
        </div>
      </section>

      {/* ACHIEVEMENTS & LANGUAGES */}
      <section className="section last">
        <div className="footer-row">
          <div>
            <h2>ACHIEVEMENTS</h2>
            <p>• FOSS Hack Hackathon 2025 Participant • Academic Excellence Award (CGPA 9.1)</p>
          </div>
          <div>
            <h2>LANGUAGES</h2>
            <p>Hindi (Native) • English (Intermediate) • Bhojpuri (Intermediate)</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
