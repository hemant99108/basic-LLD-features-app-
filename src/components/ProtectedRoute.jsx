/* eslint-disable react/prop-types */

import { Navigate, Outlet } from "react-router-dom";


const ProtectedRoute = () => {

    const isAuthenticated=true;

    //!outlet is the place where children passed can be rendered 

  return isAuthenticated  ? <Outlet/> : <Navigate to='/login'/> 
}

export default ProtectedRoute
