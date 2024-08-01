import React from 'react';
import { useMediaQuery } from 'react-responsive';
import DesktopHeader from './components/DesktopHeader';
import MobileHeader from './components/MobileHeader';
import './App.css'; // Estilos gerais
import Home from './components/Home';

function App() {
  const isDesktop = useMediaQuery({ query: '(min-width: 769px)' });

  return (
    <div className="App">
      {isDesktop ? <DesktopHeader /> : <MobileHeader />}
      <Home/>
    </div>
  );
}

export default App;