import React from "react";
import { useState } from "react";
import arrowLeft from "../assets/images/arrowLeft.png";
import arrowRight from "../assets/images/arrowRight.png";

const Slider = ({ logement }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // photo suivante, si a la fin, retourne au debut
  const next = () => {
    setCurrentIndex((currentIndex + 1) % logement.length);
  };

  // photo precedente, si au début, montre la dernière photo
  const prev = () => {
    setCurrentIndex((currentIndex - 1 + logement.length) % logement.length);
  };
  return (
    <div className="carrousel">
      <div className="slider-container">
        {logement.map((photo, index) => (
          <div
            key={index}
            // if the photo is the current photo, show it
            className={logement[currentIndex] === photo ? "fade" : "slide fade"}
          >
            <img src={photo} alt="vue du  bien à louer" className="photo" />
          </div>
        ))}
        {/* si plus de 1 photo, alors mise en place fleche et compteur */}
        {logement.length > 1 ? (
          <div>
            <div className="slider__previous" onClick={prev}>
              <img src={arrowLeft} alt="suivant" className="prev" />
            </div>
            <div className="slider__next" onClick={next}>
              <img src={arrowRight} alt="precedent" className="next" />
            </div>
            {/* affichage index/nombre photos */}
            <div className="photoIndicator">
              {currentIndex + 1}/{logement.length}
            </div>
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default Slider;
