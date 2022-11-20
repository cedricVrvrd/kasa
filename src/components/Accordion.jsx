import React, { useState } from "react";
import caretDown from "../assets/images/caretDown.png";
import caretUp from "../assets/images/caretUp.png";

const Accordion = ({ title, content }) => {
  // par defaut, isActive = false
  const [isActive, setIsActive] = useState(false);

  return (
    <div className="accordion-item">
      {/* au clic on inverse valeur de isActive */}
      <div className="accordion-title" onClick={() => setIsActive(!isActive)}>
        <div>{title}</div>
        <div>
          {isActive ? (
            <img src={caretUp} alt="cacher le texte" />
          ) : (
            <img src={caretDown} alt="montrer le texte" />
          )}
        </div>
      </div>
      {/* si active, alors montre le contenu */}
      {isActive && <div className="accordion-content">{content}</div>}
    </div>
  );
};

export default Accordion;
