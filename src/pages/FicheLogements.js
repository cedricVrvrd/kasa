import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useEffect } from "react";

const FicheLogements = () => {
  const [card, setData] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const fetcher = () =>
      fetch("../../dbLogements.json")
        .then((res) => res.json())
        .then((data) => {
          console.log("20", data);
          setData(data);
          console.log("test", card);
        });
    fetcher();
  }, []);

  const logement = card.find((el) => el.id === id);
  console.log("tab", logement);

  return (
    <div>
      <h1>logement</h1>
      {/* exemple pour workplace */}
      <h2>{logement.title}</h2>
      {/* fin exemple */}
    </div>
  );
};

export default FicheLogements;
