import React from 'react'
import './login.css';
export default function login() {
  return (
    <div className="login">

<span className="loginTitle">Login</span>
        <from className="loginForm">
<label >Email</label>
<input type="text"  placeholder='Enter your Email' />
<label >Password</label>
<input type="password"  placeholder="Enter your Password" />
<button className="loginButton">Login</button>

 <button className="loginRegisterButton">Register</button>
        </from>
    </div>
  )
}
