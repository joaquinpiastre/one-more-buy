import React from 'react'
import { Route, Routes} from "react-router-dom";
import { User } from '../components/Usuario/User';
import {Card} from '../components/Card/Card.js';
import { UserList } from '../components/UserList/UserList.js';
import { Home } from '../components/Home/Home';
import { Offers } from '../components/Offers/Offers';
import { AddProducts } from '../components/AddProducts/AddProducts.js';
import { ProductList } from '../components/Productlist/ProductList';


export const PrivateRoutes = () => {
  return (
    <Routes>
        <Route path='/Home' element={ <Home />} />
        <Route path='/Perfil' element={ <User />} />
        <Route path='/Card' element={<Card />} />
        <Route path='/Userlist' element={<UserList />} />
        <Route path='/Offers' element={<Offers />} />
        <Route path='/AddProducts' element={<AddProducts />} />
        <Route path='/ProductList' element={<ProductList />} />
        
    </Routes>
  )
}