import React from "react";

const Slider = ({ logement }) => {
  return (
    <div>
      {logement.map((images, index) => (
        <div key={index}>
          <img src={images} alt="appart" />
        </div>
      ))}
    </div>
  );
};

export default Slider;
