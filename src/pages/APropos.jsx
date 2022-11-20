import React from "react";
import Accordion from "../components/Accordion";
import Mountain from "../assets/images/mountain.png";
import accordionData from "../aboutData/data";

const Apropos = () => {
  return (
    <div className="main">
      <div className="aboutBanner">
        <img
          className="bannerAbout"
          src={Mountain}
          alt=" montagne enneigée avec cours d'eau"
        />
      </div>
      <div className="accordion">
        {accordionData.map(({ title, content }, index) => (
          <Accordion key={index} title={title} content={content} />
        ))}
      </div>
    </div>
  );
};

export default Apropos;
