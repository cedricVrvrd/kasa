import React from "react";
import logoFooter from "../assets/images/logoFooter.png";

const Footer = () => {
  return (
    <div className="footer">
      <img src={logoFooter} alt="" className="footerLogo" />
      <p>&copy; 2022 Kasa. All rights reserved</p>
    </div>
  );
};

export default Footer;
