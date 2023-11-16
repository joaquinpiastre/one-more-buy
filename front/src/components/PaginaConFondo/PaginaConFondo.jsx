import React from "react";
import "./PaginaConFondo.css";
import"./Marketplace.png"; 

export function PaginaConFondo() {
  return (
    <div className="fondo-personalizado">
      <img src="./Marketplace.png" alt="Imagen" />{" "}
      <h2>
        En barricas de roble duerme el tesoro, el vino añejo, sublime y
        seductor. Cada sorbo revela historias guardadas, en cada botella hay
        magia desatada.
      </h2>
    </div>
  );
}

export default PaginaConFondo;
