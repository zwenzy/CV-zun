import React from 'react';
import './components/components.css';
import Profile from './components/Profile';
import Skills from './components/Skills';
import Experiences from './components/Experiences';

function App() {
  return (
    <div className="container" style={{ paddingTop: '2rem', paddingBottom: '4rem' }}>
      <Profile />
      <Skills />
      <Experiences />
    </div>
  );
}

export default App;