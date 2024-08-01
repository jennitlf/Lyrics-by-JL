import React from 'react';
import './DesktopHeader.css'; // Importar o CSS específico para o DesktopHeader

const DesktopHeader = () => (
  <header className="App-header">
    <div className="logo"></div>
    <ul className="nav">
      <li id="home">Home</li>
      <li>Composições</li>
      <li>Sobre mim</li>
    </ul>
  </header>
);

export default DesktopHeader;