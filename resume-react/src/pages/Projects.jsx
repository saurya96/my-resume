import React from 'react';

function Projects() {
  const projects = [
    {
      title: 'AI Gemeni Chatbot',
      link: 'https://backend-ch-psi.vercel.app/app.html',
      date: '2024 – Present',
      description: [
        'Developed an AI-powered Gemeni website with chatbot recommendations.',
        'Features: Product recommendations, chatbot responses, "answer" detection.'
      ]
    },
    {
      title: 'Medicinal Plants Explorer',
      link: 'https://medicinal-plant-1.vercel.app/',
      date: '2024',
      description: [
        'Medicinal plant learn about plant which help to survive.'
      ]
    },
    {
      title: "India's Sacred Heritage",
      link: 'https://india-s-sacred-heritage3.vercel.app/',
      date: '2024',
      description: [
        "India is more than just a country — it's a living museum of art, faith, and culture of a sculpture."
      ]
    },
    {
      title: 'Royal Feast Hotel',
      link: 'https://royal-feast-2.vercel.app/',
      date: '2024',
      description: [
        'IT is the kind of booking hotel / booking table in hotel selecting menu from hotel. By using Html / css and js.'
      ]
    },
    {
      title: 'Project Hubs',
      link: 'https://domha.netlify.app/',
      date: '2024',
      description: [
        'Web Page Project – JavaScript & DOM Practice Tasks. I turned JavaScript DOM concepts into a real interactive web page!'
      ]
    }
  ];

  return (
    <div className="container">
      <section>
        <h2>PROJECTS</h2>
        {projects.map((project, index) => (
          <div className="item" key={index}>
            <h3>
              {project.title}
              <a href={project.link} className="project-link" target="_blank" rel="noopener noreferrer">
                🔗 Link
              </a>
            </h3>
            <span className="date">{project.date}</span>
            <ul>
              {project.description.map((desc, i) => (
                <li key={i}>{desc}</li>
              ))}
            </ul>
          </div>
        ))}
      </section>
    </div>
  );
}

export default Projects;
