import React, { useState, useEffect, useRef } from 'react';

const StatItem = ({ icon, target, label }) => {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const statRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            setHasAnimated(true);
            animateCounter();
          }
        });
      },
      { threshold: 0.5 }
    );

    if (statRef.current) {
      observer.observe(statRef.current);
    }

    return () => {
      if (statRef.current) {
        observer.unobserve(statRef.current);
      }
    };
  }, [hasAnimated]);

  const animateCounter = () => {
    const duration = 2000;
    const increment = target / (duration / 16);
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, 16);
  };

  return (
    <div className="stat-item" ref={statRef}>
      <i className={icon}></i>
      <h3 className="stat-number">{count}</h3>
      <p>{label}</p>
    </div>
  );
};

const Stats = () => {
  const stats = [
    { icon: 'fas fa-users', target: 2500, label: 'Students' },
    { icon: 'fas fa-chalkboard-teacher', target: 150, label: 'Teachers' },
    { icon: 'fas fa-book', target: 50, label: 'Courses' },
    { icon: 'fas fa-trophy', target: 95, label: '% Success Rate' }
  ];

  return (
    <section className="stats">
      <div className="container">
        <div className="stats-grid">
          {stats.map((stat, index) => (
            <StatItem key={index} {...stat} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;

