import React, { useEffect, useState } from 'react';
import './MobileHeader.css'; // Importar o CSS específico para o MobileHeader
import MenuOptions from './MenuOptions';

const MobileHeader = () => {

  const [menuActive, setMenuActive] = useState(false)

  const onClick = () =>{
    if (menuActive) {
      setMenuActive(false)
    }else{
      setMenuActive(true)
    }
  }



  return (
    <>
      <header className="App-header-mobile-menu">
        <div className="menu">
          <button className="menu-button" type="button" onClick={onClick} > <i className="fa-solid fa-bars"></i> </button>
        </div>
        <div className="social-media">
          <i className="fa-brands fa-instagram"></i>
          <i className="fa-regular fa-envelope"></i>
        </div>
      </header>
      
      {menuActive && 
      (<MenuOptions menuAtive={menuActive} setMenuActive={setMenuActive}/>

      )}
    </>
  )
};

export default MobileHeader;