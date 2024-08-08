import React from 'react';
import { Link } from 'react-router-dom';
import './DesktopHeader.css'; // Importar o CSS específico para o DesktopHeader
import img from '../img/image4.jpeg';

const DesktopHeader = () => (
  <nav className="App-header">
    <div className="img-profile"> 
      <img src={img} alt="foto de perfil da autora do site" />
    </div>
    <ul className="nav-desktop">
      <li > <Link to={`/home`}>Home</Link> </li>
      <li><Link to={`/composicoes`} >Composições</Link></li>
    </ul>
    <div className='social-media-desktop'>
      <i className="fa-brands fa-instagram" id='i1' ></i>
      <i className="fa-regular fa-envelope" ></i>
    </div>
  </nav>
);

export default DesktopHeader;