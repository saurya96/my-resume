import React from 'react';
import { useParams, Link } from 'react-router-dom';

function ProjectDetail() {
  const { id } = useParams();

  const projects = {
    1: {
      title: 'AI Gemini Chatbot',
      link: 'https://backend-ch-psi.vercel.app/app.html',
      year: '2024 – Present',
      description: 'A sophisticated AI-powered chatbot application leveraging Google Gemini API to deliver intelligent conversational experiences. Built with modern web technologies and RESTful architecture for seamless real-time interactions.',
      features: [
        'Real-time AI Integration: Engineered seamless integration with Google Gemini API for natural language processing and intelligent response generation.',
        'Asynchronous Architecture: Implemented async/await patterns for non-blocking API calls ensuring smooth user experience.',
        'Smart Recommendations: Developed intelligent product recommendation system using contextual analysis of user queries.',
        'Responsive UI Design: Created mobile-first responsive interface with intuitive chat-based interaction patterns.',
        'Error Handling: Implemented robust error handling and loading states for enhanced reliability.',
        'Clean Code Architecture: Followed industry best practices with modular, maintainable codebase.'
      ]
    },
    2: {
      title: 'Medicinal Plants Explorer',
      link: 'https://medicinal-plant-1.vercel.app/',
      year: '2024',
      description: 'An educational web platform featuring a comprehensive database of medicinal plants with detailed therapeutic properties, traditional uses, and scientific information. Designed to promote awareness about natural remedies.',
      features: [
        'Comprehensive Database: Curated extensive collection of medicinal plants with detailed botanical and therapeutic information.',
        'Search & Filter System: Implemented advanced search functionality for quick plant discovery by name, property, or use case.',
        'Responsive Gallery: Built optimized image gallery with lazy loading for improved performance.',
        'Educational Content: Structured informative content about plant identification and medicinal applications.',
        'User-Friendly Navigation: Designed intuitive UI/UX enabling seamless exploration of plant database.',
        'Cross-Browser Compatibility: Ensured consistent experience across all modern browsers and devices.'
      ]
    },
    3: {
      title: "India's Sacred Heritage",
      link: 'https://india-s-sacred-heritage3.vercel.app/',
      year: '2024',
      description: "An immersive cultural exploration website showcasing India's magnificent heritage through temples, sculptures, and sacred monuments. Features rich multimedia content celebrating centuries of art, architecture, and spirituality.",
      features: [
        'Interactive Exploration: Built engaging interface for discovering cultural sites with rich visual content.',
        'Dynamic Content Rendering: Implemented efficient content management for heritage site information.',
        'Image Optimization: Utilized lazy loading and optimized assets for fast page load times.',
        'Responsive Design: Created mobile-responsive layouts ensuring accessibility on all devices.',
        'Cultural Documentation: Presented detailed historical and architectural information for each monument.',
        'Smooth Navigation: Designed seamless user journey through different heritage categories.'
      ]
    },
    4: {
      title: 'Royal Feast Hotel',
      link: 'https://royal-feast-2.vercel.app/',
      year: '2024',
      description: 'A comprehensive hotel management web application featuring room booking, restaurant table reservations, and menu browsing. Built with vanilla JavaScript demonstrating strong fundamentals in DOM manipulation and event handling.',
      features: [
        'Room Booking System: Developed intuitive interface for browsing and reserving hotel accommodations.',
        'Table Reservation: Implemented restaurant table booking with date/time selection functionality.',
        'Interactive Menu: Built dynamic menu display with category filtering and item details.',
        'Form Validation: Implemented client-side validation for booking forms ensuring data integrity.',
        'Responsive Layout: Designed mobile-first responsive design for seamless cross-device experience.',
        'DOM Manipulation: Demonstrated advanced JavaScript skills through dynamic content updates without frameworks.'
      ]
    },
    5: {
      title: 'Interactive DOM Projects Hub',
      link: 'https://domha.netlify.app/',
      year: '2024',
      description: 'A curated collection of interactive JavaScript projects showcasing advanced DOM manipulation, event handling, and modern ES6+ features. Serves as both a portfolio piece and learning resource for JavaScript fundamentals.',
      features: [
        'Multiple Interactive Projects: Developed diverse range of projects demonstrating JavaScript capabilities.',
        'Event Handling Mastery: Implemented various event listeners including click, hover, keyboard, and form events.',
        'Dynamic DOM Operations: Showcased createElement, appendChild, innerHTML, and other DOM methods.',
        'ES6+ Features: Utilized modern JavaScript features including arrow functions, destructuring, and template literals.',
        'Clean Code Practices: Followed coding standards with well-documented, maintainable code structure.',
        'Learning Resource: Organized projects progressively from basic to advanced concepts.'
      ]
    }
  };

  const project = projects[id];

  if (!project) {
    return (
      <div className="resume-container">
        <Link to="/" className="back-link">← Back to Home</Link>
        <h2>Project not found</h2>
      </div>
    );
  }

  return (
    <div className="resume-container project-detail">
      <Link to="/" className="back-link">← Back to Home</Link>
      
      <div className="header">
        <h1>{project.title}</h1>
        <p className="role">{project.year}</p>
      </div>

      <section>
        <h2>OVERVIEW</h2>
        <p>{project.description}</p>
      </section>

      <section>
        <h2>KEY FEATURES</h2>
        <ul className="feature-list">
          {project.features.map((feature, index) => (
            <li key={index}>{feature}</li>
          ))}
        </ul>
      </section>

      <section>
        <a href={project.link} target="_blank" rel="noopener noreferrer" className="visit-project-btn">
          Visit Live Project →
        </a>
      </section>
    </div>
  );
}

export default ProjectDetail;
