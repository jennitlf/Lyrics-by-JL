import React, {useEffect, useRef, useState} from "react";
import "./MenuOptions.css";
import {Link} from 'react-router-dom';

const MenuOptions = ({menuActive, setMenuActive}) => {

    const [activeItem, setActiveItem] = useState(null);

    //saves the menu reference
    const menuRef = useRef(null)
    
    //checks if the variable has the reference and if the click event was NOT within the div to which the variable refers
    const handleClickOutside = (event) => {
        if (menuRef.current && !menuRef.current.contains(event.target)){
            setMenuActive(false)
        }
    }

    //creates the click event in the html, specifying the type of event and the function that does something with this event
    useEffect(()=>{
        //add event of click
        document.addEventListener('mousedown', handleClickOutside);
        
        //remove event of click
        return () => {
        document.removeEventListener('mousedown', handleClickOutside)
       
        };
    },[])

    const handleItemClick = (index) => {
        setActiveItem(index); // Define o item ativo
        setTimeout(() => setActiveItem(null), 200); // Remove a classe após um curto período
        setMenuActive(false)
    };

    function removeAccents(texto) {
        return texto
          .normalize("NFD")
          .replace(/[\u0300-\u036f]/g, "")
          .replace(/[ç]/g, "c")
          .replace(/[Ç]/g, "C")
          .replace(/\s/g, "")
          .toLocaleLowerCase();
      }


    return (
        <nav ref={menuRef} className={`options ${menuActive ? 'active' : ''} sidebar`}>
            <div className="profile-mobile">
                <div className="img-profile"></div>
                <p>Jennifer Lima</p>
            </div>
            <ul className="options-list" >
                {['Home', 'Composições', 'Sobre mim'].map((item, index) => (
                    <Link to={`/${removeAccents(item)}`} className="item"  >
                    <li key={index} className={activeItem === index ? 'clicked' : ''} onClick={() => handleItemClick(index)}> {item} </li>
                    </Link>
                ))}
            </ul>
        </nav>
    );
};

export default MenuOptions