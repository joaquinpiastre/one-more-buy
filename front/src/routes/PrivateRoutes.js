import React from 'react'
import { Route, Routes, Navigate} from "react-router-dom";

import { Dashboard } from '../components/Dashboard'
import { MyApplications } from '../components/MyApplications';
import { Offers } from '../components/Offers';
import { UserList } from '../components/UserList';
import { AddJob } from '../components/AddJob';


export const PrivateRoutes = () => {
  return (
    <Routes>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path='/myApplications' element={<MyApplications />} />
        <Route path='/offers' element={<Offers />} />
        <Route path='/addJob' element={<AddJob />} />
        <Route path='/userList' element={<UserList />} />
        <Route path='*' element={<Navigate to='/' replace />} />
    </Routes>
  )
}
export default PrivateRoutes