import React, { useCallback, useEffect, useRef, useState } from "react";
import "./MenuOptions.css";
import { Link } from 'react-router-dom';
import img from '../img/image4.jpeg';

const MenuOptions = ({ menuActive, setMenuActive }) => {
    const [activeItem, setActiveItem] = useState(null);

    // Reference to the menu element
    const menuRef = useRef(null);

    // Memorize the handleClickOutside function
    const handleClickOutside = useCallback((event) => {
        if (menuRef.current && !menuRef.current.contains(event.target)) {
            setMenuActive(false);
        }
    }, [setMenuActive]);

    // Effect to add/remove the event listener
    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);

        // Cleanup function to remove the event listener
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [handleClickOutside]);

    const handleItemClick = (index) => {
        setActiveItem(index); // Define o item ativo
        setTimeout(() => setActiveItem(null), 200); // Remove a classe após um curto período
        setMenuActive(false);
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
                <img src={img} alt="foto de jennifer" />
            </div>
            <ul className="options-list">
                {['Home', 'Composições'].map((item, index) => (
                    <li key={index} className={activeItem === index ? 'clicked' : ''} onClick={() => handleItemClick(index)}>
                        <Link to={`/${removeAccents(item)}`} className="link1">{item}</Link>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default MenuOptions;