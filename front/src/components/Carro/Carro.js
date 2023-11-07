import React from "react";
import "./Carro.css";

export const Carro = ({ vino }) => {
  return (
    <div className="cardContainer">
      <div className="textContainer">
        <p className="priceText">{vino.titulo}</p>
        <p className="priceText">{vino.descripcion}</p>
        <p className="priceText">{vino.cualidades}</p>
      </div>
    </div>
  );
};
