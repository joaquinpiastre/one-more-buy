import React from "react";
import "./Card.css";

export const Card = ({ Card }) => {
  return (
    <div className="cardContainer">
      <div className="textContainer">
        <p className="priceText">{Producto.titulo}</p>
        <p className="priceText">{Producto.descripcion}</p>
        <p className="priceText">{Producto.cualidades}</p>
      </div>
    </div>
  );
};
export default Card
