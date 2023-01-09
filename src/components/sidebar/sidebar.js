import React from 'react';
import image from './sidebarimg.jpg';
import './sidebar.css';
const Sidebar = () => {
    return (
        <div className="sidebar">
        <div className="sidebarItem">

            <span className="sidebarTitle">About Me
            </span>
            <img src={image} alt="" srcset="" className='sidebarImg'/>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facilis consequuntur explicabo dolorem a. Ullam doloribus vitae voluptas nam debitis placeat delectus, ipsam laudantium dolor quae necessitatibus eaque obcaecati dignissimos, nemo officiis accusamus nisi dolorum nihil a qui quo, culpa aut! Expedita ipsa esse consequuntur. Harum illum eos natus ducimus ad!</p>
        </div>

<div className="sidebarItem">
    <span className="sidebarTitle">Categories</span>
     <ul className="sidebarList">
        <li className="sidebarListItem">Life</li>
        <li className="sidebarListItem">Music</li>
        <li className="sidebarListItem">Style</li>
        <li className="sidebarListItem">Tech</li>
        <li className="sidebarListItem">Cinema</li>
        <li className="sidebarListItem">Sport</li>
     </ul>
</div>
<div className="sidebarItem">
    <span className="sidebarTitle">Follow Us</span>
    <div className="sidebarSocial">
    <i className='sidebarIcon fa-brands fa-square-facebook'></i>
      <i className="sidebarIcon  fa-brands fa-square-twitter"></i>
      <i className="sidebarIcon  fa-brands fa-square-instagram"></i>
      <i className=" sidebarIcon  fa-brands fa-pinterest"></i>
      
    </div>

</div>
       </div>
    );
}

export default Sidebar;
