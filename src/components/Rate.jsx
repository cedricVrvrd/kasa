import React from "react";
import RedStar from "../assets/images/redStar.png";
import GreyStar from "../assets/images/greyStar.png";

const Rate = ({ rate }) => {
  const stars = [1, 2, 3, 4, 5];

  return (
    <div className="rating">
      {/* Loop to display star by rating */}
      {stars.map((star, index) =>
        rate >= star ? (
          <img
            key={index}
            className="ratingStar"
            src={RedStar}
            alt={" étoile colorée n° " + { index }}
          />
        ) : (
          <img
            key={index}
            className="ratingStar"
            src={GreyStar}
            alt={" étoile grise n° " + { index }}
          />
        )
      )}
    </div>
  );
};

export default Rate;
