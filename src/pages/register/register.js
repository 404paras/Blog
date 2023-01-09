import React from 'react'
import './register.css';
export default function register() {
  return (
    <div className="register">

<span className="registerTitle">Register</span>
        <from className="registerForm">
        <label >Username</label>
<input type="text"  placeholder='Enter your username' />



<label >Email</label>
<input type="text"  placeholder='Enter your Email' />
<label >Password</label>
<input type="password"  placeholder="Enter your Password" />
<button className="registerButton">Register</button>

 <button className="registerLoginButton">Login</button>
        </from>
    </div>
  )
}
