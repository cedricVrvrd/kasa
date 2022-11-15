import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Slider from "../components/Slider";
import Header from "../components/Header";
import Accordion from "../components/Accordion";
import Tags from "../components/Tags";

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
      <section className="container_info">
        <div className="container_tittle">
          <h2>{logement.title}</h2>
          <span>{logement.location}</span>
          <div className="list">
            <Tags
              getTag={logement.tags.map((tag, index) => (
                <span className="spanList" key={index}>
                  {tag}
                </span>
              ))}
            />
          </div>
        </div>
        <div className="container_hostRating">
          <p>{logement.host.name}</p>
          <img src={logement.host.picture} alt="proprietaire" />
        </div>
      </section>

      <div className="accordionFiche">
        <Accordion title="Description" content={logement.description} />
        <Accordion
          title="Equipement"
          content={logement.equipments.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        />
      </div>
    </div>
  ) : (
    ""
  );
};

export default FicheLogement;
