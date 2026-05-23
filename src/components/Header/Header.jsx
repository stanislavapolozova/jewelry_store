// компонент шапки сайта с адаптивным бургер-меню
import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Header.css';

function Header() {
    // состояние для открытия/закрытия мобильного меню
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <header className="header">
            <div className="container header__container">
                <Link to="/" className="header__logo">
                    KISÉTI
                </Link>
                <button className="header__burger" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
                <nav className={`header__nav ${isMenuOpen ? 'header__nav--open' : ''}`}>
                    <NavLink to="/" onClick={() => setIsMenuOpen(false)}>
                        Главная
                    </NavLink>
                    <NavLink to="/catalog" onClick={() => setIsMenuOpen(false)}>
                        Каталог
                    </NavLink>
                    <NavLink to="/about" onClick={() => setIsMenuOpen(false)}>
                        О магазине
                    </NavLink>
                    <NavLink to="/contacts" onClick={() => setIsMenuOpen(false)}>
                        Контакты
                    </NavLink>
                </nav>
            </div>
        </header>
    );
}

export default Header;
