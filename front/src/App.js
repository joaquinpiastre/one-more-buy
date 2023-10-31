import React from 'react'
import { Navbar } from "./components/Navbar"
import { PrivateRoutes } from './routes/PrivateRoutes'
import { PublicRoutes } from './routes/PublicRoutes'
import { UserContext } from './context/UserContext'

const App = () => {

  const [user, setUser] = useState({
    role:'',
    logged:false
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
  )
}
export default App