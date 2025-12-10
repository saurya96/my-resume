import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  const projects = [
    {
      id: 1,
      title: 'AI Gemini Chatbot',
      link: 'https://backend-ch-psi.vercel.app/app.html',
      year: '2024 – Present',
      shortDescription: 'Built an AI-powered chatbot application leveraging Google Gemini API for intelligent conversational experiences.',
      features: [
        'Engineered real-time AI chatbot using RESTful APIs and asynchronous JavaScript',
        'Implemented smart product recommendation system with natural language processing capabilities'
      ]
    },
    {
      id: 2,
      title: 'Medicinal Plants Explorer',
      link: 'https://medicinal-plant-1.vercel.app/',
      year: '2024',
      shortDescription: 'Developed an educational web platform featuring comprehensive database of medicinal plants and their therapeutic properties.',
      features: [
        'Designed intuitive UI/UX for seamless plant discovery and information retrieval',
        'Implemented search and filter functionality for enhanced user experience'
      ]
    },
    {
      id: 3,
      title: "India's Sacred Heritage",
      link: 'https://india-s-sacred-heritage3.vercel.app/',
      year: '2024',
      shortDescription: 'Created an interactive cultural exploration website showcasing India\'s rich heritage, temples, and sacred monuments.',
      features: [
        'Built responsive gallery with optimized image loading and smooth navigation',
        'Implemented dynamic content rendering for cultural sites and historical information'
      ]
    },
    {
      id: 4,
      title: 'Royal Feast Hotel',
      link: 'https://royal-feast-2.vercel.app/',
      year: '2024',
      shortDescription: 'Developed a full-featured hotel management system with room booking, table reservations, and menu browsing capabilities.',
      features: [
        'Built end-to-end booking system using vanilla JavaScript with DOM manipulation',
        'Implemented responsive design ensuring cross-device compatibility'
      ]
    },
    {
      id: 5,
      title: 'Interactive DOM Projects Hub',
      link: 'https://domha.netlify.app/',
      year: '2024',
      shortDescription: 'Created a collection of interactive JavaScript projects demonstrating advanced DOM manipulation and event handling.',
      features: [
        'Developed multiple interactive components showcasing JavaScript fundamentals',
        'Implemented clean code architecture following industry best practices'
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
          Results-driven Full Stack Developer with a strong foundation in computer science and hands-on experience 
          building scalable web applications. Proficient in modern JavaScript frameworks (React.js, Node.js) and 
          database technologies (MongoDB, SQL). Combines technical expertise with 5+ years of communication and 
          mentoring experience, bringing excellent problem-solving abilities and a collaborative mindset. 
          Passionate about writing clean, maintainable code and staying current with emerging technologies 
          including AI/ML integration and cloud services.
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
          <p>JavaScript (ES6+), Python, HTML5, CSS3</p>
        </div>

        <div className="skills-category">
          <h4>FRAMEWORKS & LIBRARIES</h4>
          <p>React.js, Node.js, Express.js, Tailwind CSS</p>
        </div>

        <div className="skills-category">
          <h4>DATABASES</h4>
          <p>MongoDB, MySQL, SQL</p>
        </div>

        <div className="skills-category">
          <h4>DEVELOPER TOOLS</h4>
          <p>Git, GitHub, VS Code, npm, Vite, REST APIs, Vercel, Netlify</p>
        </div>

        <div className="skills-category">
          <h4>CORE COMPETENCIES</h4>
          <p>Data Structures & Algorithms, Object-Oriented Programming, Agile Methodology, Problem Solving</p>
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
            Learned how Git works for version control and how GitHub is used for collaboration, 
            including repositories, branches, commits, pull requests, merging, and resolving conflicts.
          </p>
          <ul>
            <li>Learned Git fundamentals — repositories, staging, commits, branching</li>
            <li>Worked with GitHub — pull requests, issues, code reviews</li>
            <li>Understood collaborative workflows and version history management</li>
            <li>Practiced resolving merge conflicts and managing remote repos</li>
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
            This course covered AI prompt engineering concepts, effective communication with AI models, 
            and optimizing AI responses for various applications.
          </p>
          <ul>
            <li>Learned prompt engineering techniques and best practices</li>
            <li>Understood AI model behavior and response optimization</li>
            <li>Practiced creating effective prompts for different use cases</li>
          </ul>
          <a href="https://drive.google.com/file/d/1Xnq7pR9smHsirflAnMgfSlL6tJaPMLzj/view?usp=sharing" 
             target="_blank" 
             rel="noopener noreferrer" 
             className="certificate-link">
            View Certificate
          </a>
        </div>

        <div className="certification-item">
          <h3>Version Control</h3>
          <p>
            This course covered version control concepts, tracking changes, collaborating with teams, and managing code efficiently.
          </p>
          <ul>
            <li>Learned the importance of version control in software development</li>
            <li>Understood change tracking, snapshots, and repository structure</li>
            <li>Learned branching strategies and collaborative workflows</li>
            <li>Gained hands-on practice with real development scenarios</li>
          </ul>
          <a href="https://drive.google.com/file/d/1AEEX59mD2W50x5ld4PG6SxId46O-pz7_/view?usp=sharing" 
             target="_blank" 
             rel="noopener noreferrer" 
             className="certificate-link">
            View Certificate
          </a>
        </div>

        <div className="certification-item">
          <h3>AI Fundamentals Certification</h3>
          <p>
            Understanding core concepts of Artificial Intelligence, workflows, ethics, and applications.
          </p>
          <ul>
            <li>Learned the importance of AI in modern technology</li>
            <li>Understood AI workflows, ethics, and responsible AI practices</li>
            <li>Gained hands-on practice with AI applications and scenarios</li>
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
          <li>Participated in FOSS Hack Hackathon 2025</li>
          <li>4+ Years of Teaching Experience</li>
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
