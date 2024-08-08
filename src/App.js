import React from 'react';
import './App.css';
import { useMediaQuery } from 'react-responsive';
import DesktopHeader from './components desktop/DesktopHeader';
import HomeDesktop from './components desktop/HomeDesktop.jsx'
import CompositionsDesktop from './components desktop/CompositionsDesktop.jsx'
import LyricsDesktop from './components desktop/LyricsDesktop.jsx'
import MobileHeader from './components mobile/MobileHeader';
import Home from './components mobile/Home';
import Compositions from './components mobile/Compositions';
import Lyrics from './components mobile/Lyrics.jsx';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';

function App() {
  
  const isDesktop = useMediaQuery({ query: '(min-width: 769px)' });

  return (
    <Router>
      <div className="App">
        {isDesktop ? <DesktopHeader /> : <MobileHeader />}
        <Routes>
          <Route path="/" element={<Navigate to="/home" />} />
          <Route path="/home" element={isDesktop ? <HomeDesktop/> : <Home />} />
          <Route path="/composicoes" element={isDesktop ? <CompositionsDesktop/> : <Compositions />} />
          <Route path="/composicoes/:index" element={isDesktop ? <LyricsDesktop/> : <Lyrics />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;