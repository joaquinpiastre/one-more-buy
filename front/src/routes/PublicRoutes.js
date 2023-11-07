import React from 'react'
import { Route, Routes, Navigate} from "react-router-dom";

import  { LoginForm } from '../components/Login/LoginForm';
import { Register } from '../components/Register/Register';
import { Home } from '../components/Home/Home';


export const PublicRoutes = () => {
  return (
    <Routes>
        <Route path='/Home' element={<Home />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/register" element={<Register />} />
        <Route path='*' element={<Navigate to='/login' replace />} />
    </Routes>
  )
}