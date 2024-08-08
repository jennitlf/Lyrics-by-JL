import React, { useState } from 'react';
import './MobileHeader.css'; // Importar o CSS específico para o MobileHeader
import MenuOptions from './MenuOptions';
import copy from 'clipboard-copy';

const MobileHeader = () => {
  const [menuActive, setMenuActive] = useState(false);

  const onClick = () => {
    setMenuActive((prevMenuActive) => !prevMenuActive);
  };

  const meuEmail = 'thalitalimal143@gmail.com'; // Substitua pelo seu email

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

  return (
    <>
      <header className="App-header-mobile-menu header">
        <div className="menu">
          <button className="menu-button" type="button" onClick={onClick}>
            <i className="fa-solid fa-bars"></i>
          </button>
        </div>
        <div className="social-media">
          <a href="https://www.instagram.com/jennitlf/profilecard">
            <i className="fa-brands fa-instagram"></i>
          </a>
          <button className="email-button" onClick={handleCopyEmail}>
            <i className="fa-regular fa-envelope"></i>
          </button>
        </div>
      </header>

      {menuActive && <MenuOptions menuAtive={menuActive} setMenuActive={setMenuActive} />}
    </>
  );
};

export default MobileHeader;