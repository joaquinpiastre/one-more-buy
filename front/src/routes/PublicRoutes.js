import React from 'react'
import { Route, Routes, Navigate} from "react-router-dom";

import  { Login } from '../components/Login/Login';
import { Register } from '../components/Register/Register';
import { Home } from '../components/Home/Home';


export const PublicRoutes = () => {
  return (
    <Routes>
        <Route path='/Home' element={<Home />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Register" element={<Register />} />
        <Route path='*' element={<Navigate to='/Login' replace />} />
    </Routes>
  )
}