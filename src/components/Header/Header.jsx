import { Link, NavLink } from 'react-router-dom';
import PhoneMenu from '../PhoneMenu/PhoneMenu';
import './Header.css';

function Header() {
    return (
        <header className="header">
            <div className="container header__container">
                <Link to="/" className="header__logo">KISÉTI</Link>
                <PhoneMenu />
                <nav className="header__nav">
                    <NavLink to="/">Главная</NavLink>
                    <NavLink to="/catalog">Каталог</NavLink>
                    <NavLink to="/about">О магазине</NavLink>
                    <NavLink to="/contacts">Контакты</NavLink>
                </nav>
            </div>
        </header>
    );
}

export default Header;
