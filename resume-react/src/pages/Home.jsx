import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  const projects = [
    {
      id: 1,
      title: 'AI Gemini Chatbot',
      link: 'https://backend-ch-psi.vercel.app/app.html',
      year: '2024 – Present',
      shortDescription: 'Architected full-stack AI chatbot leveraging Google Gemini API with async/await patterns and RESTful architecture.',
      features: [
        'Integrated Gemini API using fetch API with Promise-based error handling and HTTP request optimization',
        'Implemented NLP-driven recommendation engine with JSON data parsing and dynamic DOM rendering'
      ]
    },
    {
      id: 2,
      title: 'Medicinal Plants Explorer',
      link: 'https://medicinal-plant-1.vercel.app/',
      year: '2024',
      shortDescription: 'Engineered responsive SPA with component-based architecture, implementing lazy loading and state management.',
      features: [
        'Built modular UI components with semantic HTML5 and CSS Grid/Flexbox layouts',
        'Implemented O(n) search algorithm with debounced input handling for optimized UX'
      ]
    },
    {
      id: 3,
      title: "India's Sacred Heritage",
      link: 'https://india-s-sacred-heritage3.vercel.app/',
      year: '2024',
      shortDescription: 'Developed SEO-optimized static site with lazy-loaded images, CSS animations, and accessibility (WCAG) compliance.',
      features: [
        'Implemented Intersection Observer API for performant image lazy loading (40% faster LCP)',
        'Built responsive grid system with media queries ensuring cross-browser compatibility'
      ]
    },
    {
      id: 4,
      title: 'Royal Feast Hotel',
      link: 'https://royal-feast-2.vercel.app/',
      year: '2024',
      shortDescription: 'Built MVC-pattern booking system with client-side validation, local storage persistence, and event delegation.',
      features: [
        'Implemented CRUD operations with localStorage API and JSON serialization/deserialization',
        'Built form validation using RegEx patterns and custom event handlers with bubbling/capturing'
      ]
    },
    {
      id: 5,
      title: 'Interactive DOM Projects Hub',
      link: 'https://domha.netlify.app/',
      year: '2024',
      shortDescription: 'Developed vanilla JS project suite demonstrating ES6+ features, closures, and prototype-based inheritance.',
      features: [
        'Implemented event-driven architecture with custom event emitters and observer pattern',
        'Built reusable utility functions following DRY principle and functional programming paradigms'
      ]
    }
  ];

  return (
    <div className="resume-container">
      {/* HEADER */}
      <div className="header">
        <h1>Aashika Singh</h1>
        <p className="role">Full Stack Developer | Bachelor of Computer Applications (BCA)</p>

        <div className="contact">
          <a href="mailto:aashikasingh823@gmail.com">aashikasingh823@gmail.com</a>
          <span> | </span>
          <a href="tel:+918102984585">+91 8102984585</a>
          <span> | </span>
          <a href="https://github.com/saurya96" target="_blank" rel="noopener noreferrer">GitHub</a>
          <span> | </span>
          <a href="https://www.linkedin.com/in/aashika-singh-17a28a2a7/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        </div>
        <p className="location">Jai Maa Colony New Area, Aurangabad (BIHAR)</p>
      </div>

      {/* PROFILE */}
      <section>
        <h2>PROFESSIONAL SUMMARY</h2>
        <p>
          Results-driven Full Stack Developer with expertise in MERN stack (MongoDB, Express.js, React.js, Node.js) 
          and proficiency in building RESTful APIs, microservices architecture, and responsive Single Page Applications (SPAs). 
          Strong foundation in Data Structures, Algorithms, and Object-Oriented Programming with hands-on experience 
          in CI/CD pipelines, version control (Git), and cloud deployment (Vercel, Netlify). Skilled in agile methodologies, 
          test-driven development (TDD), and writing clean, modular, and maintainable code following SOLID principles. 
          Passionate about emerging technologies including AI/ML integration, serverless computing, and DevOps practices.
        </p>
      </section>

      {/* EDUCATION */}
      <section>
        <h2>EDUCATION</h2>
        <div className="item">
          <div className="item-header">
            <h3>Eternal University — Bachelor of Computer Applications (BCA)</h3>
            <span className="date">2024 – 2027</span>
          </div>
          <p>Currently pursuing BCA degree from Eternal University, Himachal Pradesh — 2nd semester.</p>
          <p>Current CGPA: 9.1/10</p>
        </div>

        <div className="item">
          <div className="item-header">
            <h3>Anugrah Inter School — Higher Secondary Education (Class 12)</h3>
            <span className="date">2022 – 2024</span>
          </div>
          <p>Completed 12th with PCB — CGPA: 8.87/10</p>
        </div>

        <div className="item">
          <div className="item-header">
            <h3>St Mary's School — Secondary Education (Class 10)</h3>
            <span className="date">2022</span>
          </div>
          <p>Completed 10th — CGPA: 7.87/10</p>
        </div>
      </section>

      {/* SKILLS */}
      <section>
        <h2>TECHNICAL SKILLS</h2>
        
        <div className="skills-category">
          <h4>PROGRAMMING LANGUAGES</h4>
          <p>JavaScript (ES6+/ES2024), TypeScript, Python 3.x, HTML5, CSS3/SCSS</p>
        </div>

        <div className="skills-category">
          <h4>FRONTEND TECHNOLOGIES</h4>
          <p>React.js (Hooks, Context API, React Router), Redux, Tailwind CSS, Bootstrap, Responsive Web Design (RWD), DOM Manipulation</p>
        </div>

        <div className="skills-category">
          <h4>BACKEND & DATABASES</h4>
          <p>Node.js, Express.js, RESTful APIs, MongoDB (Mongoose ODM), MySQL, CRUD Operations, JWT Authentication</p>
        </div>

        <div className="skills-category">
          <h4>DEVOPS & TOOLS</h4>
          <p>Git, GitHub (Actions, CI/CD), VS Code, npm/yarn, Vite, Webpack, Postman, Vercel, Netlify, Linux CLI</p>
        </div>

        <div className="skills-category">
          <h4>CORE CS FUNDAMENTALS</h4>
          <p>DSA (Arrays, Trees, Graphs, Sorting), OOP (Encapsulation, Polymorphism, Inheritance), SDLC, Agile/Scrum, MVC Architecture</p>
        </div>
      </section>

      {/* WORK EXPERIENCE */}
      <section>
        <h2>WORK EXPERIENCE</h2>
        
        <div className="item">
          <div className="item-header">
            <h3>English Communication Coach</h3>
            <span className="date">6 Months</span>
          </div>
          <p className="company">NG Organization</p>
          <ul>
            <li>Delivered structured English communication training to improve professional speaking skills</li>
            <li>Developed customized learning modules resulting in measurable improvement in participant confidence</li>
          </ul>
        </div>

        <div className="item">
          <div className="item-header">
            <h3>Well-being Facilitator</h3>
            <span className="date">5 Months</span>
          </div>
          <p className="company">NG Organization</p>
          <ul>
            <li>Led well-being programs fostering positive environment and team engagement</li>
            <li>Coordinated events and workshops demonstrating strong organizational and leadership abilities</li>
          </ul>
        </div>

        <div className="item">
          <div className="item-header">
            <h3>Academic Tutor & Mentor</h3>
            <span className="date">5 Years</span>
          </div>
          <p className="company">Self-Employed</p>
          <ul>
            <li>Provided personalized tutoring to 50+ students across multiple subjects with 95% satisfaction rate</li>
            <li>Developed effective teaching methodologies adapting to diverse learning styles</li>
          </ul>
        </div>
      </section>

      {/* PROJECTS */}
      <section>
        <h2>PROJECTS</h2>
        {projects.map((project) => (
          <div className="item project-item" key={project.id}>
            <div className="item-header">
              <h3>
                <Link to={`/project/${project.id}`} className="project-title-link">
                  {project.title}
                </Link>
              </h3>
              <span className="date">{project.year}</span>
            </div>
            <p>{project.shortDescription}</p>
            <ul>
              {project.features.slice(0, 2).map((feature, i) => (
                <li key={i}>{feature}</li>
              ))}
            </ul>
            <a href={project.link} target="_blank" rel="noopener noreferrer" className="external-link">
              ▣
            </a>
          </div>
        ))}
      </section>

      {/* CERTIFICATIONS */}
      <section>
        <h2>CERTIFICATIONS</h2>
        
        <div className="certification-item">
          <h3>GitHub Foundation & Repository Management</h3>
          <p>
            Mastered distributed version control system (DVCS) concepts including branching strategies, 
            merge conflict resolution, and collaborative workflows using Git and GitHub.
          </p>
          <ul>
            <li>Proficient in Git CLI — git clone, commit, push, pull, rebase, cherry-pick, stash</li>
            <li>Implemented GitFlow workflow — feature branches, pull requests, code reviews, CI/CD triggers</li>
            <li>Managed repository configurations — .gitignore, branch protection rules, webhooks</li>
            <li>Resolved merge conflicts using diff tools and rebasing strategies</li>
          </ul>
          <a href="https://drive.google.com/file/d/1ExwV8sQlt1WebqZhrG759zhdoFDwpwrA/view?usp=sharing" 
             target="_blank" 
             rel="noopener noreferrer" 
             className="certificate-link">
            View Certificate
          </a>
        </div>

        <div className="certification-item">
          <h3>Certificate in Prompt Engineering and AI Interaction</h3>
          <p>
            Specialized in LLM (Large Language Model) prompt optimization, chain-of-thought reasoning, 
            and AI API integration techniques for building intelligent applications.
          </p>
          <ul>
            <li>Mastered zero-shot, few-shot, and chain-of-thought prompting strategies</li>
            <li>Implemented token optimization and context window management techniques</li>
            <li>Practiced RAG (Retrieval-Augmented Generation) patterns for enhanced AI responses</li>
          </ul>
          <a href="https://drive.google.com/file/d/1Xnq7pR9smHsirflAnMgfSlL6tJaPMLzj/view?usp=sharing" 
             target="_blank" 
             rel="noopener noreferrer" 
             className="certificate-link">
            View Certificate
          </a>
        </div>

        <div className="certification-item">
          <h3>Version Control Systems (VCS)</h3>
          <p>
            Comprehensive training in distributed version control, CI/CD pipeline integration, 
            and collaborative software development workflows.
          </p>
          <ul>
            <li>Implemented trunk-based development and feature flag strategies</li>
            <li>Configured automated testing hooks and deployment pipelines</li>
            <li>Practiced semantic versioning (SemVer) and release management</li>
            <li>Managed monorepo and multi-repo architectures</li>
          </ul>
          <a href="https://drive.google.com/file/d/1AEEX59mD2W50x5ld4PG6SxId46O-pz7_/view?usp=sharing" 
             target="_blank" 
             rel="noopener noreferrer" 
             className="certificate-link">
            View Certificate
          </a>
        </div>

        <div className="certification-item">
          <h3>AI/ML Fundamentals Certification</h3>
          <p>
            Foundational knowledge in machine learning algorithms, neural network architectures, 
            and ethical AI deployment practices.
          </p>
          <ul>
            <li>Understanding of supervised/unsupervised learning and model training pipelines</li>
            <li>Knowledge of CNN, RNN architectures and transformer-based models (GPT, BERT)</li>
            <li>Implemented AI ethics frameworks and bias mitigation strategies</li>
          </ul>
          <a href="https://drive.google.com/file/d/1D5KDhMpX2ITbOc8ksL0b1KboeAgmrDOy/view?usp=sharing" 
             target="_blank" 
             rel="noopener noreferrer" 
             className="certificate-link">
            View Certificate
          </a>
        </div>
      </section>

      {/* ACHIEVEMENTS */}
      <section>
        <h2>ACHIEVEMENTS</h2>
        <ul>
          <li><strong>FOSS Hack Hackathon 2025:</strong> Participated in 48-hour open-source software development competition, contributing to collaborative codebase using Git workflows</li>
          <li><strong>5+ Years Mentoring:</strong> Delivered 1000+ hours of technical and academic coaching with documented 95% student success rate</li>
        </ul>
      </section>

      {/* LANGUAGES */}
      <section>
        <h2>LANGUAGES</h2>
        <ul>
          <li>Hindi (Native)</li>
          <li>English (Intermediate)</li>
          <li>Bhojpuri (Intermediate)</li>
        </ul>
      </section>
    </div>
  );
}

export default Home;
