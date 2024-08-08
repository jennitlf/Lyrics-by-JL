import React from 'react';
import './App.css';
import { useMediaQuery } from 'react-responsive';
import DesktopHeader from './components desktop/DesktopHeader';
import MobileHeader from './components mobile/MobileHeader';
import Home from './components mobile/Home';
import Compositions from './components mobile/Compositions';
import Lyrics from './components mobile/Lyrics.jsx';
import AboutMe from './components mobile/AboutMe.jsx';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';

function App() {
  
  const isDesktop = useMediaQuery({ query: '(min-width: 769px)' });

  return (
    <Router>
      <div className="App">
        {isDesktop ? <DesktopHeader /> : <MobileHeader />}
        <Routes>
          {/* Redireciona de "/" para "/home" */}
          <Route path="/" element={<Navigate to="/home" />} />
          <Route path="/home" element={<Home />} />
          <Route path="/composicoes" element={<Compositions />} />
          <Route path="/composicoes/:index" element={<Lyrics />} />
          <Route path="/sobremim" element={<AboutMe />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;