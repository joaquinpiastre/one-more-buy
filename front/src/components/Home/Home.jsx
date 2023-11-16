import React from "react";
import { PaginaConFondo } from "../PaginaConFondo/PaginaConFondo"
import { CardContainer } from "../CardContainer/CardContainer"
import "../../imagenes/cortadora_pasto.jpg"
import "../../imagenes/iphone11.jpg"
import "../../imagenes/notebook_Lenovo.jpg"
import "../../imagenes/televisor_tcl.jpg"

export const Home = () => {
  return (
    <div>
      <PaginaConFondo />
      <CardContainer />
    </div>
  );
};
