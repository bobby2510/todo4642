import React,{useState,useEffect} from 'react'
import {Outlet} from 'react-router-dom'
import Welcome from './todos/Welcome'


const IndexRoute  = ()=>{

    
    let value = localStorage.getItem('loggedIn')
    let login = (value!==null) && (value ==='yes')
          
    return (
        <React.Fragment>
            {login? <Outlet/> : <Welcome />}
        </React.Fragment>
    );
}

export default IndexRoute;