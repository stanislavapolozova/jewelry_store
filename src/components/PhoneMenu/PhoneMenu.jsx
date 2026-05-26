import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './PhoneMenu.css';

function PhoneMenu() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = function() {
        setIsOpen(!isOpen);
    };

    const closeMenu = function() {
        setIsOpen(false);
    };

    return (
        <div className="phone-menu">
            <button className="phone-menu__burger" onClick={toggleMenu}>
                ☰
            </button>
            {isOpen ? (
                <nav className="phone-menu__nav">
                    <button className="phone-menu__close" onClick={closeMenu}>✕</button>
                    <ul className="phone-menu__list">
                        <li><NavLink to="/" onClick={closeMenu}>
                          Главная
                        </NavLink></li>
                        <li><NavLink to="/catalog" onClick={closeMenu}>
                          Каталог
                        </NavLink></li>
                        <li><NavLink to="/about" onClick={closeMenu}>
                          О магазине
                        </NavLink></li>
                        <li><NavLink to="/contacts" onClick={closeMenu}>
                          Контакты
                        </NavLink></li>
                    </ul>
                </nav>
            ) : null}
        </div>
    );
}

export default PhoneMenu;
