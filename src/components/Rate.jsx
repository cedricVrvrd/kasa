import React from "react";
import RedStar from "../assets/images/redStar.png";
import GreyStar from "../assets/images/greyStar.png";

const Rate = ({ rate }) => {
  // on crée un tableau intermediaire afin de pouvoir "mapper"
  const stars = [1, 2, 3, 4, 5];

  return (
    <div className="rating">
      {/* on map sur le tableau, on compare avec la valeur de rate */}
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
