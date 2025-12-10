import React from 'react';

function Contact() {
  return (
    <div className="container">
      <section>
        <h2>CONTACT INFORMATION</h2>
        <div className="contact-info">
          <div className="contact-item">
            <h3>📧 Email</h3>
            <a href="mailto:aashikasingh823@gmail.com">aashikasingh823@gmail.com</a>
          </div>

          <div className="contact-item">
            <h3>📞 Phone</h3>
            <a href="tel:+918102984585">+91 8102984585</a>
          </div>

          <div className="contact-item">
            <h3>🐱 GitHub</h3>
            <a href="https://github.com/saurya96" target="_blank" rel="noopener noreferrer">
              github.com/saurya96
            </a>
          </div>

          <div className="contact-item">
            <h3>💼 LinkedIn</h3>
            <a href="https://www.linkedin.com/in/aashika-singh-17a28a2a7/" target="_blank" rel="noopener noreferrer">
              linkedin.com/in/aashika-singh
            </a>
          </div>

          <div className="contact-item">
            <h3>📍 Location</h3>
            <p>Jai Maa Colony New Area<br />Aurangabad, Bihar</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;
