import React from 'react';

const Faculty = () => {
  const facultyMembers = [
    {
      name: 'Dr. Sarah Johnson',
      role: 'Principal',
      bio: 'Ph.D. in Education with 20+ years of experience in educational leadership.'
    },
    {
      name: 'Prof. Michael Chen',
      role: 'Science Department Head',
      bio: 'M.Sc. in Physics, passionate about making science accessible and engaging.'
    },
    {
      name: 'Ms. Emily Rodriguez',
      role: 'Arts Director',
      bio: 'B.F.A. in Fine Arts, inspiring creativity and artistic expression in students.'
    },
    {
      name: 'Dr. James Wilson',
      role: 'Mathematics Coordinator',
      bio: 'Ph.D. in Mathematics, dedicated to making math fun and understandable.'
    }
  ];

  return (
    <section id="faculty" className="faculty">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Our Faculty</h2>
          <p className="section-subtitle">Meet Our Dedicated Educators</p>
        </div>
        <div className="faculty-grid">
          {facultyMembers.map((member, index) => (
            <div key={index} className="faculty-card">
              <div className="faculty-image">
                <i className="fas fa-user-tie"></i>
              </div>
              <h3>{member.name}</h3>
              <p className="faculty-role">{member.role}</p>
              <p className="faculty-bio">{member.bio}</p>
              <div className="faculty-social">
                <a href="#"><i className="fab fa-linkedin"></i></a>
                <a href="#"><i className="fas fa-envelope"></i></a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Faculty;

