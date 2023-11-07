import React, { useState } from 'react'
import { Route, Routes } from 'react-router-dom';
import { UserContext } from "./context/UserContext";
import { PrivateRoutes } from './routes/PrivateRoutes';
import {PublicRoutes} from "./routes/PublicRoutes";
import { Navbar } from "./components/Navbar/Navbar"


export const App = () => {
  const [ user, setUser ] = useState({
    role: '',
    logged: false
  })

  return (
    <>
      <UserContext.Provider value={{ user, setUser }} >
        <Navbar />
        <Routes>
          {
            user.logged ? (
              <Route path="/*" element={<PrivateRoutes />} /> 
            ):(
              <Route path="/*" element={<PublicRoutes />} />
            )
          } 
        </Routes>
      </UserContext.Provider> 
      
    </>
  );
};
export default App;