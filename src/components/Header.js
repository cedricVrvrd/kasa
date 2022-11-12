import React from "react";
import { NavLink } from "react-router-dom";
import LOGO from "../assets/images/LOGO.png";

const Header = () => {
  return (
    <div id="header">
      <div>
        <img src={LOGO} alt="logo kasa" />
      </div>

      <nav>
        <ul>
          <NavLink to="/">
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
