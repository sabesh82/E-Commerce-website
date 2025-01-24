import React from 'react'
import './CSS/LoginSignup.css'

const LoginSignup = () => {
  
  return (
    <div className='Signup-login'>
      <div className="header">
        <p>Log in</p>
      </div>
      <div className="form">
        <input type="email" name="" id="" placeholder='Your Email'/>
        <br />
        <input type="password" name="" id="" placeholder='Your Password'/>
        <br />
        <button>Login</button>
      </div>
    </div>
  )
}

export default LoginSignup