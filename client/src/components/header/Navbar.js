import React  from "react"
import {BrowserRouter as Router, Link} from "react-router-dom";
import './Navbar.css'

function Navbar({isLoggedIn, setLogin})
{
    
    return (
            <nav className="navbar p-2  navbar-light bg-light">
                <div className="container ">
                    <Link to="/" className="my-link" style={{color:'black'}}><h5>React Todo App</h5></Link>
                    
                    <div className=" d-flex flex-wrap">
                       { isLoggedIn? 
                        (
                        <React.Fragment>
                            <Link to="/doneTodos" className="my-link">Done Todos</Link>
                            <Link to="/logout" className="my-link">Logout</Link>
                        </React.Fragment>
                        ) 
                       : 
                       (
                        <React.Fragment>
                            <Link to="/login" className="my-link">Login</Link>
                            <Link to="/register" className="my-link">Register</Link>
                        </React.Fragment>
                       )}
                            <Link to="/aboutUs" className="my-link">About us</Link>
                            <Link to="/contactUS" className="my-link">Contact us</Link>
                    </div>
                   
                </div>
            </nav>
    );  
}

export default Navbar;