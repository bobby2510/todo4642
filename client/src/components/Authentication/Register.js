import React, {useState} from 'react'
import { useNavigate} from 'react-router-dom'
import axios from 'axios'

function Register(props)
{
    const [name,setName] = useState('')
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const [nameError, setNameError] = useState('')
    const [emailError, setEmailError] = useState('')
    const [passwordError, setPasswordError] = useState('')
    const navigate = useNavigate()

    const handleChange = e =>{
        switch(e.target.name)
        {
            case 'name':
                setName(e.target.value)
                break;
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
        setNameError('')
        setEmailError('')
        setPasswordError('')
        //handing errors 
        const nameValid = (name !== '') && (name.length>4) 
        const emailValid = (email !== '') && (email.length>4)
        const passwordValid = (password !== '') && (password.length>4)
        if(nameValid && emailValid && passwordValid)
        {
            axios.post('/api/auth/register',{name,email,password})
            .then((response)=>{
                console.log(response.data.data.message)
            })
            navigate('/login')
        }
        else 
        {
            if(!nameValid) setNameError('Invalid User Name')
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
                <h5 className="mt-4">Register Here</h5>
                <form onSubmit={handleSubmit}>
                    <div className="form-group mt-2 mb-2">
                        <label htmlFor="name" style={{float:'left'}}>User Name</label>
                        <input type="text" name="name" id="name" onChange={handleChange} placeholder="Enter name" value={name} className="form-control" />
                        { nameError !== ''? <span style={{color:'red'}}>{nameError}</span> : null }
                        </div>
                    <div className="form-group mt-2 mb-2">
                        <label htmlFor="email" style={{float:'left'}}>Email</label>
                        <input type="email" name="email" id="email" onChange={handleChange} placeholder="Enter email" value={email} className="form-control" />
                        { emailError !== ''? <span style={{color:'red'}}>{emailError}</span> : null }
                        </div>
                    <div className="form-group mt-2 mb-2">
                        <label htmlFor="password" style={{float:'left'}}>Password</label>
                        <input type="password" name="password" onChange={handleChange} id="password" placeholder="Enter password" value={password} className="form-control" />
                        { passwordError !== ''? <span style={{color:'red'}}>{passwordError}</span> : null }
                        </div>
                    <input type="submit" className="btn btn-primary m-2 mb-4" value="Register" />
                </form>
            </div>
            
        </div>
        </React.Fragment>
    );
}

export default Register;