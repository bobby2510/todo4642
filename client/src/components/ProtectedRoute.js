import React from 'react'
import {Outlet, Navigate , useLocation} from 'react-router-dom'


function ProtectRoute(){

    let value = localStorage.getItem('loggedIn')
    let login = (value!==null) && (value ==='yes')
    let location = useLocation()

    return (
        <React.Fragment>
            {login? <Outlet/> : <Navigate to="/login" state={{from: location }} /> }
        </React.Fragment>
    );
}

export default ProtectRoute;