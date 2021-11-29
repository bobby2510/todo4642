import React,{useState,useEffect} from "react";
import { BrowserRouter as Router,Routes, Route, Link } from "react-router-dom";
import Navbar from './components/header/Navbar';
import TodoHome from './components/todos/TodoHome';
import Welcome from './components/todos/Welcome';
import Register from './components/Authentication/Register';
import Login from './components/Authentication/Login';
import AboutUs from "./components/header/AboutUs";
import ContactUs from "./components/header/ContactUs";
import DoneTodos from "./components/todos/DoneTodos"
import Logout from './components/Authentication/Logout'
import ProtectRoute from "./components/ProtectedRoute";
import IndexRoute from "./components/IndexRoute";

function App() {
  const [isLoggedIn,setLogin] = useState(false) 
  useEffect(()=>{
    let value = localStorage.getItem('loggedIn')
    if(value!== null && value ==="yes")
        setLogin(true)
    else 
        setLogin(false)
  },[])
  return (
    <React.Fragment>
        <Router>
        <Navbar isLoggedIn = {isLoggedIn} setLogin = {setLogin} />
        <div className="container mt-4 text-center" style={{maxWidth:900}}>
           <Routes>
            
            <Route exact path="/" element={<IndexRoute/> } >
              <Route path="/" element={<TodoHome/>} />
            </Route>
            <Route  path="/login" element={<Login isLoggedIn = {isLoggedIn} setLogin = {setLogin} />} />
            <Route path="/register" element={<Register />} />
            <Route path="/aboutUs" element = {<AboutUs />} />
            <Route path="/contactUs" element = {<ContactUs/>} />
            <Route path="/logout" element = { <Logout isLoggedIn = {isLoggedIn} setLogin = {setLogin} /> } />
            <Route path="/doneTodos" element={<ProtectRoute/>}>
              <Route path="/doneTodos"  element={<DoneTodos />} />
            </Route>
           </Routes>
          </div>
        </Router> 
    </React.Fragment>
  );
    
}

export default App;
