import React from 'react';
import { NavLink } from 'react-router-dom';


const PageError = () => {
    return (
        <div>
            <div id="errorMsg">
            <h1>404</h1>
            <p>Oups ! La page que vous demandez n'existe pas.</p>
            <NavLink className="stepBack" to="/">Retourner sur la page d'accueil</NavLink>
        </div>
        

        </div>
    );
};

export default PageError;