import React from "react";
import { useState } from "react";

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
      <div>
        {currentIndex + 1}/{logement.length}
      </div>
    </div>
  );
};

export default Slider;
