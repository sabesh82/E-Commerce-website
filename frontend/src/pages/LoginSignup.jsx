import React from 'react'
import './CSS/LoginSignup.css'
import { useNavigate } from 'react-router-dom'

const LoginSignup = () => {

  const navigate = useNavigate();

  const handleLoginClick = () =>{
    navigate('/login')
  }
  return (
    <div className='Signup-login'>
      <div className="header">
        <p>Sign Up</p>
      </div>
      <div className="form">
        <input type="text" name="" id="" placeholder='Your Name'/>
        <br />
        <input type="email" name="" id="" placeholder='Your Email'/>
        <br />
        <input type="password" name="" id="" placeholder='Your Password'/>
        <br />
        <button >Continue</button>
      </div>
      <div className="login">
        <p>Already have an account?<span onClick={handleLoginClick}> Click here</span></p>
      </div>
      <div className="aggrement">
        <input type="checkbox" name="" id="" />
        <p>By continuing, I aggree to the terms of use & privacy policy</p>
      </div>
    </div>
  )
}

export default LoginSignup