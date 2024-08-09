import React from 'react';
import { Link } from 'react-router-dom';
import './DesktopHeader.css';
import img from '../img/image4.jpeg';
import copy from 'clipboard-copy';

const DesktopHeader = () => {

  const meuEmail = 'thalitalimal143@gmail.com'; 

  const handleCopyEmail = () => {
    copy(meuEmail)
      .then(() => {
        alert('Email copiado para a área de transferência!');
      })
      .catch((err) => {
        console.error('Erro ao copiar o email: ', err);
        alert('Erro ao copiar o email. Por favor, copie manualmente.');
      });
  };

  return(
  <nav className="App-header">
    <div className="img-profile"> 
      <img src={img} alt="foto de perfil da autora do site" />
    </div>
    <ul className="nav-desktop">
      <li > <Link to={`/home`}>Home</Link> </li>
      <li><Link to={`/composicoes`} >Composições</Link></li>
    </ul>
    <div className='social-media-desktop'>
      <a href="https://www.instagram.com/jennitlf" className='ancora-instagram-desktop'> <i className="fa-brands fa-instagram" id='i1' ></i> </a>
     <button className="button-email-desktop" onClick={handleCopyEmail}> <i className="fa-regular fa-envelope" id="e1" ></i> </button>
    </div>
  </nav>
  )
};

export default DesktopHeader;