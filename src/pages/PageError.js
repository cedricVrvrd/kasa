import React from 'react';
import Header from '../components/Header';
import { NavLink } from 'react-router-dom';


const PageError = () => {
    return (
        <div>
            <Header />
            <div className="errorMsg">
            <h1>404</h1>
            <p>Oups! La page que vous demandez n'existe pas.</p>
            <NavLink className="stepBack" to="/">Retourner sur la page d'accueil</NavLink>
        </div>
        </div>
    );
};

export default PageError;