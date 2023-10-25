import React from "react"


export const Navbar = () => {
  return  (
    <header>
      <div class="logo">
        <h1>TUMARKETPLACE</h1>
      </div>
      <nav>
        <ul>
          <li><a href="#">Inicio</a></li>
          <li><a href="#">Categorías</a></li>
          <li><a href="#">Ofertas</a></li>
          <li><a href="#">Mi cuenta</a></li>
        </ul>
      </nav>
      <div class="cart">
        <a href="#"><img src="https://e7.pngegg.com/pngimages/833/426/png-clipart-shopping-cart-shopping-cart.png" width="5px" height="5px" alt="Carrito de compras"/></a>
      </div>
    </header>
        );
    }
export default Navbar
