import React, {useState} from 'react'
import {useNavigate} from 'react-router-dom'
import axios from 'axios'

function Login(props)
{
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const [emailError,setEmailError] = useState('')
    const [passwordError, setPasswordError] = useState('')
    const [errorMessage,setErrorMessage]= useState('')
    const navigate = useNavigate()

    const handleChange = e =>{
        switch(e.target.name)
        {
            case 'email':
                setEmail(e.target.value)
                break;
            case 'password':
                setPassword(e.target.value)
                break;
            default:

        }
    }

    const handleSubmit = e=>{
        e.preventDefault()
        setEmailError('')
        setPasswordError('')
        setErrorMessage('')
        //handing errors 
        const emailValid = (email !== '') && (email.length>4)
        const passwordValid = (password !== '') && (password.length>4)
        if( emailValid && passwordValid)
        {
             console.log(email,password)
             
             axios.post('/api/auth/login',{email,password})
             .then(response =>{
                 if(response.status===200)
                 {
                    localStorage.setItem('loggedIn','yes')
                    localStorage.setItem('userName',response.data.data.name)
                    localStorage.setItem('userId',response.data.data.id)
                    props.setLogin(true)
                    navigate('/')
                 }
                 else 
                 {
                     console.log(response)
                     console.log(response.data.message)
                    setErrorMessage(response.data.data.message)
                 }
             })
             
            //axios call here 
        }
        else 
        {
            if(!emailValid) setEmailError('Invalid Email Id')
            if(!passwordValid) setPasswordError('Invalid Password')
            return 
        }
        
    }

     return (
        <React.Fragment>
            <div className="card">
                <div className="card-header">
                    React Todo App
                </div>
                <div className="container" style={{maxWidth:600}}>
                    <h5 className="mt-4">Login Here</h5>
                    { errorMessage !== ''? <span style={{color:'red'}}>{errorMessage}</span> : null }
                    <form onSubmit={handleSubmit}>
                        <div className="form-group m-2">
                            <label htmlFor="email" style={{float:'left'}}>Email</label>
                            <input type="email" className="form-control"  onChange={handleChange} value={email} id="email" name="email" placeholder="Enter email" />
                            { emailError !== ''? <span style={{color:'red'}}>{emailError}</span> : null }
                        </div>
                        <div className="form-group m-2">
                            <label htmlFor="password" style={{float:'left'}}>Password</label>
                            <input type="password" className="form-control" onChange={handleChange} value={password} id="password" name="password" placeholder="Enter password" />
                            { passwordError !== ''? <span style={{color:'red'}}>{passwordError}</span> : null }
                        </div>
                        <input className="btn btn-primary m-2 mb-4" type="submit" />
                    </form>
                </div> 
            </div>
        </React.Fragment>
    );
}

export default Login;