import React from 'react';

const Hero = () => {
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      const offsetTop = section.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="home" className="hero">
      <div className="hero-overlay"></div>
      <div className="hero-content">
        <h1 className="hero-title">Welcome to Maa Vaishno Inter College</h1>
        <p className="hero-subtitle">Empowering Minds, Shaping Futures</p>
        <p className="hero-description">
          Where excellence meets opportunity, and every student is prepared for success in an ever-changing world.
        </p>
        <div className="hero-buttons">
          <a href="#about" className="btn btn-primary" onClick={(e) => { e.preventDefault(); scrollToSection('about'); }}>
            Learn More
          </a>
          <a href="#contact" className="btn btn-secondary" onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }}>
            Apply Now
          </a>
        </div>
      </div>
      <div className="scroll-indicator">
        <i className="fas fa-chevron-down"></i>
      </div>
    </section>
  );
};

export default Hero;

