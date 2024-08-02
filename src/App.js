import React from 'react';
import { useMediaQuery } from 'react-responsive';
import DesktopHeader from './components/DesktopHeader';
import MobileHeader from './components/MobileHeader';
import './App.css'; // Estilos gerais
import Home from './components/Home';
import Compositions from './components/Compositions'
import AboutMe from './components/AboutMe'
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';


function App() {
  const isDesktop = useMediaQuery({ query: '(min-width: 769px)' });

  return (
    <Router>
      <div className="App">
        {isDesktop ? <DesktopHeader /> : <MobileHeader />}
        <Routes>
          <Route path="/home" element={<Home/>} />
          <Route  path='/composicoes' element={<Compositions/>}/>
          <Route path='/sobremim' element={<AboutMe/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;