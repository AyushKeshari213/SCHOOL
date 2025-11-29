import React from 'react';

const Courses = () => {
  const courses = [
    {
      icon: 'fas fa-flask',
      title: 'Science & Technology',
      description: 'Advanced programs in Physics, Chemistry, Biology, and Computer Science with hands-on laboratory experience.'
    },
    {
      icon: 'fas fa-paint-brush',
      title: 'Arts & Humanities',
      description: 'Creative expression through Literature, History, Art, Music, and Drama to develop well-rounded individuals.'
    },
    {
      icon: 'fas fa-calculator',
      title: 'Mathematics',
      description: 'Comprehensive math curriculum from basic arithmetic to advanced calculus and statistics.'
    },
    {
      icon: 'fas fa-globe',
      title: 'Languages',
      description: 'Multiple language programs including English, Spanish, French, and Mandarin with cultural immersion.'
    },
    {
      icon: 'fas fa-dumbbell',
      title: 'Physical Education',
      description: 'Sports and fitness programs to promote physical health, teamwork, and sportsmanship.'
    },
    {
      icon: 'fas fa-lightbulb',
      title: 'Innovation Lab',
      description: 'STEM innovation programs including Robotics, Coding, and Engineering projects.'
    }
  ];

  return (
    <section id="courses" className="courses">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Our Courses</h2>
          <p className="section-subtitle">Comprehensive Programs for Every Student</p>
        </div>
        <div className="courses-grid">
          {courses.map((course, index) => (
            <div key={index} className="course-card">
              <div className="course-icon">
                <i className={course.icon}></i>
              </div>
              <h3>{course.title}</h3>
              <p>{course.description}</p>
              <a href="#" className="course-link">
                Learn More <i className="fas fa-arrow-right"></i>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Courses;

