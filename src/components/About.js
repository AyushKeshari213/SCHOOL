import React from 'react';

const About = () => {
  const features = [
    'State-of-the-art facilities',
    'Experienced faculty',
    'Holistic education',
    'Extracurricular activities'
  ];

  return (
    <section id="about" className="about">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">About Our School</h2>
          <p className="section-subtitle">Excellence in Education Since 1995</p>
        </div>
        <div className="about-content">
          <div className="about-text">
            <h3>Our Mission</h3>
            <p>
              Maa Vaishno Inter College is committed to providing a world-class education that nurtures intellectual curiosity,
              fosters creativity, and develops character. We believe in empowering every student to reach their full potential.
            </p>
            <h3>Our Vision</h3>
            <p>
              To be a leading educational institution that prepares students to be global citizens, critical thinkers,
              and lifelong learners who contribute positively to society.
            </p>
            <div className="features">
              {features.map((feature, index) => (
                <div key={index} className="feature-item">
                  <i className="fas fa-check-circle"></i>
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="about-image">
            <div className="image-placeholder">
              <i className="fas fa-school"></i>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

