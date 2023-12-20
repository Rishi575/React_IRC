
import React, { useState } from 'react'
import '../Assests/css/Login.css'
import Users from '../Pages/Users'

import user_icon from '../Assests/images/person.png'
import email_icon from '../Assests/images/email.png'
import password_icon from '../Assests/images/password.png'


const Login = () => {

    const logx=(e)=>
{
  e.preventDefault();
  const a=localStorage.getItem('email');
  const b=localStorage.getItem('pass');
  if(a===data.email && b===data.password)
  {
      
          navigate('/users');
         
  }
  else
      alert('Invalid Credentials');
}

    const [action, setAction] = useState("Sign up");
    return (
        <>
            <div className='back'>
                {/* <img src="https://img.freepik.com/premium-photo/christmas-red-decorations-snow-with-gift-boxes-fir-tree-branches-christmas-lights_186277-2975.jpg?w=900" /> */}
                <div className='container'>
                    <div className='header'>
                        <div className="text">{action}</div>
                    </div>
                    <div className="inputs">
                        {action === "Sign in" ? <div></div> : <div className="input">
                            <img src={user_icon} alt="" />
                            <input type="text" placeholder="Name" />
                        </div>}

                        <div className="input">
                            <img src={email_icon} alt="" />
                            <input type="email" placeholder="Email Id" />
                        </div>
                        <div className="input">
                            <img src={password_icon} alt="" />
                            <input type="password" placeholder="Password" />
                        </div>
                    </div>
                    {action === "Sign Up" ? <div></div> : <div className="forgot-password"><center>Lost Password?<span> Click Here!</span> </center>  </div>}

                    <div className="submit-container" onSubmit={logx}>
                        <div className={action === "Sign in" ? "submit gray" : "submit"} onClick={() => { setAction("Sign Up") }}>Sign Up</div>
                        <div className={action === "Sign Up" ? "submit gray" : "submit"} onClick={() => { setAction("Sign in") }}>Sign in</div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login
