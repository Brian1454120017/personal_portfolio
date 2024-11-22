import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import AboutMe from './components/AboutMe';
import Projects from './components/Projects';
import HireMe from './components/HireMe';
import Footer from './components/Footer';

import './App.css';

function App() {
  return (
      <div className="App">
        <Header/>
        <Hero />
        <AboutMe/>
        <Projects/>
        <HireMe/>    
        <Footer />
      </div>
  );
}

export default App;
