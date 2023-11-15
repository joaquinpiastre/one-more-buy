import React from "react";
import  PaginaConFondo from "../PaginaConFondo/PaginaConFondo"
import { CardContainer } from "../CardContainer/CardContainer"

export const Home = () => {
  return (
    <div>
      <div>
        <PaginaConFondo />
        <div className="row">
          <div className="col">
            <CardContainer />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Home
