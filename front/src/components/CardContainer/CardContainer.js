import React from 'react'
import Marketplace from "../"
import Card from '../Card/Card'
import './CardContainer.css'

export const CardContainer = () => {
    return (
      <div>
          {Marketplace.map((producto) =>{
                return(<Card key={producto.id} producto={producto} />)
              
          })}
      </div>
    )
  }
export default CardContainer