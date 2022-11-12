import React from "react";
import { useState } from "react";
import "../styles/slider.css";

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
    <div>
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

        {/* Previous button */}
        <button onClick={prev} className="prev">
          &lt;
        </button>

        {/* Next button */}
        <button onClick={next} className="next">
          &gt;
        </button>
      </div>
      {/* Render dots indicator */}
      <div className="dots">
        {logement.map((photo, index) => (
          <span
            key={index}
            // highlight the dot that corresponds to the current photo
            className={logement[currentIndex] === photo ? "dot activ" : "dot"}
            // when the user clicks on a dot, go to the corresponding photo
            onClick={() => setCurrentIndex(logement.indexOf(photo))}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default Slider;
