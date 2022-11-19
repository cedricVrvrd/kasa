import React from "react";
import { useState } from "react";
import arrowLeft from "../assets/images/arrowLeft.png";
import arrowRight from "../assets/images/arrowRight.png";

const Slider = ({ logement }) => {
  // show the photo with this index
  const [currentIndex, setCurrentIndex] = useState(0);

  // move to the next photo
  // if we are at the end, go to the first photo
  const next = () => {
    setCurrentIndex((currentIndex + 1) % logement.length);
  };

  // move to the previous photo
  // if we are at the beginning, go to the last photo
  const prev = () => {
    setCurrentIndex((currentIndex - 1 + logement.length) % logement.length);
  };
  return (
    <div className="carrousel">
      {/* Render the carousel */}
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
