
import React, { useState } from 'react'
import '../Assests/css/Login.css'


import user_icon from '../Assests/images/person.png'
import email_icon from '../Assests/images/email.png'
import password_icon from '../Assests/images/password.png'
import { useNavigate } from 'react-router-dom'

const Login = () => {
    const navigate = useNavigate();

    const handlehome =()=>{
        navigate('/')
    }

    const [action, setAction] = useState("Sign ");
    return (
        <>
            <div className='back'>

                <div className='container'>
                    <div className='header'>
                        <div className="text">{action}</div>
                    </div>
                    <div className="inputs">
                        
                        {action === "Sign in" ? <div></div> : <div className="input">
                            <img src={user_icon} alt="" />
                            <input className='text-input' type="text" placeholder="Name" required />
                        </div>}

                        <div className="input">
                            <img src={email_icon} alt="" />
                            <input className='text-input' type="email" placeholder="Email Id" required />
                        </div>
                        <div className="input">
                            <img src={password_icon} alt="" />
                            <input type="password" placeholder="Password" required />
                        </div>
                        {action === "Sign Up" ? <div></div> : <div className="forgot-password"><center>Lost Password?<span> Click Here!</span> </center>  </div>}
                    </div>

                    <div className="submit-container">
                        <div className={action === "Sign Up" ? "submit gray" : "submit"} onClick={handlehome}>Sign in</div>
                        <div className={action === "Sign in" ? "submit gray" : "submit"} onClick={() => { setAction("Sign Up") }}>Sign Up</div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login
