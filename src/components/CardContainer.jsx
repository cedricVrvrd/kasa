import React, { useEffect, useState } from "react";
import Card from "./Card";

const CardContainer = () => {
  // creation de la variable data qui va recevoir les données du fetch
  const [data, setData] = useState([]);

  // fetch sur le fichier json contenant la liste de nos logements
  useEffect(() => {
    fetch("../../dbLogements.json")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      });
  }, []);

  return (
    <div id="container">
      {/* on parcours nos logements, on donne une key, on passe 
             la props logement a notre composant card logement={logement} */}
      {data.map((logement) => (
        <Card key={logement.id} logement={logement} />
      ))}
    </div>
  );
};

export default CardContainer;
