import React from 'react';
import './topbar.css';
import image from './images.jpg';
import { Link } from 'react-router-dom';
export default function topbar() {
  const user=true;
  return (


    <div className='topbar'>
      <div className="topbarleft">
      <i className='topbarIcon fa-brands fa-square-facebook'></i>
      <i className="topbarIcon  fa-brands fa-square-twitter"></i>
      <i className="topbarIcon  fa-brands fa-square-instagram"></i>
      <i className=" topbarIcon  fa-brands fa-pinterest"></i>
      </div>
      <div className="topbarcenter">
<ul className="topList">
    <li className="topListItem">
      
<Link to='/' className='link'>Home</Link>

    </li>
    <li className="topListItem"><Link to='/' className='link'>About</Link></li>
    <li className="topListItem"><Link to='/' className='link'>Contact</Link></li>
    <li className="topListItem"><Link to='/Write' className='link'>Write</Link></li>
    <li className="topListItem">
      {user && 'LogOut'}
      </li>
</ul>



      </div>
      <div className="topbarright">
{user ? (<img className='topbarImg'src={image} alt="" />): (

  <ul className='topList'>
    <li className="topListItem">
  <Link to='/Login' className='link'>Login</Link></li><li className="topListItem">
  <Link to='/Register' className='link' >Register</Link></li>
  </ul>
)}

      
      <i className=" topbarSearch fa-solid fa-magnifying-glass"></i>



      </div>
    </div>
  )
}
