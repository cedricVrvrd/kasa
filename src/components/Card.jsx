import React from "react";
import { Link } from "react-router-dom";

const Card = ({ logement }) => {
  console.log(logement);
  return (
    <Link to={`/fiche_logement/${logement.id}`}>
      <div className="globalCard">
        <div className="card">
          <img src={logement.cover} alt={"photo " + logement.title}></img>
          <h2 className="cardTitle">{logement.title}</h2>
        </div>
      </div>
    </Link>
  );
};

export default Card;
