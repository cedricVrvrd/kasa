import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Slider from "../components/Slider";
import Header from "../components/Header";

const FicheLogement = () => {
  // variables necessaires.
  const [logement, setLogement] = useState();
  const { id } = useParams();

  // on fetch sur la base de donnée et on tri sur l'id via .find()
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
      <Header />
      <Slider logement={logement.pictures} />
      <h2>{logement.title}</h2>
      {/* fin exemple */}
    </div>
  ) : (
    ""
  );
};

export default FicheLogement;
