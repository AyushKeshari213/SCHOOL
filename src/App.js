import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Stats from './components/Stats';
import About from './components/About';
import Courses from './components/Courses';
import Faculty from './components/Faculty';
import News from './components/News';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Stats />
      <About />
      <Courses />
      <Faculty />
      <News />
      <Contact />
      <Footer />
      <ScrollToTop />
    </div>
  );
}

export default App;

