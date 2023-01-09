import React from 'react'
import './home.css';
import Header from '../../components/header/header.js';
import Post from '../../components/Posts/posts.js';
import SideBar from '../../components/sidebar/sidebar.js';

export default function home() {
  return (
    <>
        <Header/>
        
        <div className="home">
          <Post/>
          <SideBar/>
        </div>

        </>
  )
}
