import React, { useState } from "react";
import caretDown from "../assets/images/caretDown.png";
import caretUp from "../assets/images/caretUp.png";

const Accordion = ({ title, content }) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className="accordion-item">
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
      {isActive && <div className="accordion-content">{content}</div>}
    </div>
  );
};

export default Accordion;
