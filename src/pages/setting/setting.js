import React from 'react'
import './setting.css';
import Img from './download.jpg';
import Sidebar from '../../components/sidebar/sidebar.js';
export default function setting() {
  return (
    <div className="setting">
        <div className="settingWrapper">
<div className="settingTitle">
    <span className="settingUpdateTitle">Update your Account</span>
    <span className="settingDeleteTitle">Delete Account</span>
</div>

<from className="settingForm">

<label >Profile Picture</label>
<div className="settingPP">

    <img src={Img}  />

    <label htmlFor="fileInput">
        <i className='settingppIcon far fa-user-circle'></i>
    </label>
<input type="file" name="" id="fileInput" style={{display:'none'}} />
</div>

<label>UserName</label>
<input type="text" placeholder='Paras'/>
<label>Email</label>
<input type="email" placeholder='parasgarg@gmail.com'/>
<label>Password</label>
<input type="password"/>
<button className="settingSubmit">Update</button>




</from>











        </div>
        <Sidebar/>
    </div>
  )
}
