import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const FicheLogements = () => {
  //
  const [logement, setLogement] = useState();
  const { id } = useParams();

  // on fetch sur la base de donnée et on tri avec l'id via .find()
  useEffect(() => {
    const fetcher = () =>
      fetch("../../dbLogements.json")
        .then((res) => res.json())
        .then((data) => {
          setLogement(data.find((el) => el.id === id));
        });
    fetcher();
  }, [logement, id]);

  // si cardData...
  return logement ? (
    <div>
      <h1>logement</h1>
      {/* exemple pour workplace */}
      <h2>{logement.title}</h2>
      {/* fin exemple */}
    </div>
  ) : (
    ""
  );
};

export default FicheLogements;
