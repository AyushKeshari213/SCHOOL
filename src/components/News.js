import React from 'react';

const News = () => {
  const newsItems = [
    {
      icon: 'fas fa-calendar-alt',
      date: 'March 15, 2024',
      title: 'Annual Science Fair 2024',
      description: 'Join us for our annual science fair showcasing innovative projects from students across all grades.'
    },
    {
      icon: 'fas fa-trophy',
      date: 'March 10, 2024',
      title: 'Basketball Team Wins Championship',
      description: 'Congratulations to our basketball team for winning the regional championship tournament!'
    },
    {
      icon: 'fas fa-graduation-cap',
      date: 'March 5, 2024',
      title: 'College Admission Workshop',
      description: 'Free workshop for seniors on college applications, essays, and scholarship opportunities.'
    }
  ];

  return (
    <section id="news" className="news">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">News & Events</h2>
          <p className="section-subtitle">Stay Updated with Our Latest News</p>
        </div>
        <div className="news-grid">
          {newsItems.map((item, index) => (
            <article key={index} className="news-card">
              <div className="news-image">
                <i className={item.icon}></i>
              </div>
              <div className="news-content">
                <span className="news-date">{item.date}</span>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                <a href="#" className="news-link">
                  Read More <i className="fas fa-arrow-right"></i>
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default News;

