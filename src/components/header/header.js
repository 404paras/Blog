import React from 'react'
import './header.css';
import image from './blog.jpg';
export default function header() {
  return (
    <div className="header">
        <div className="headerTitles">
            <span className="headerTitleSmall">Personal
            </span>
            <span className="headerTitleBig">Blog</span>
        </div>
        <img src={image} alt="" className='headerImg'/>

    </div>
  )
}
