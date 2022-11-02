import React from 'react';
import "../styles/header.css"
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <div id='header'>
            <div>
                <img src="./LOGO.png" alt="logo kasa" />
            </div>

            <nav>
                <ul>
                    <NavLink className={(nav) => (nav.isActive ? "nav-active" : "")} to="/">
                        <li>Accueil</li>
                    </NavLink>
                    <NavLink to="a_propos">
                        <li>A Propos</li>
                    </NavLink>
                </ul>
            </nav>
        </div>

    );
};

export default Header;


