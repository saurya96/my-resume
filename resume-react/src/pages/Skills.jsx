import React from 'react';

function Skills() {
  const technicalSkills = [
    'HTML / CSS',
    'JavaScript',
    'React.js',
    'Node.js',
    'MongoDB',
    'Git & GitHub',
    'Python'
  ];

  return (
    <div className="container">
      <section>
        <h2>TECHNICAL SKILLS</h2>
        <ul className="skills">
          {technicalSkills.map((skill, index) => (
            <li key={index}>{skill}</li>
          ))}
        </ul>
      </section>

      <section>
        <h2>SOFT SKILLS</h2>
        <ul>
          <li>Communication & Teaching (5+ years experience)</li>
          <li>Problem Solving</li>
          <li>Team Collaboration</li>
          <li>Leadership</li>
          <li>Time Management</li>
        </ul>
      </section>
    </div>
  );
}

export default Skills;
