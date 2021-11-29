import React from 'react'
import {Navigate} from 'react-router-dom'


const Logout = (props)=>{
    localStorage.setItem('loggedIn','no')
    localStorage.removeItem('userId')
    localStorage.removeItem('userName')
    props.setLogin(false)
    return (
        <React.Fragment>
            <Navigate to="/" />
        </React.Fragment>
    );
}

export default Logout;