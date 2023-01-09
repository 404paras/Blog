import React, { Component }  from 'react';

import Topbar from './components/Topbar/topbar.js';
import Home from './pages/home/home.js';
import Single from './pages/single/single.js';
import Write from './pages/write/write.js';
import Setting from './pages/setting/setting.js';
import Login from './pages/login/login.js';
import Register from './pages/register/register.js';
import { Routes, Route } from "react-router-dom"




function App() {
  const user = true;
  return (

   <>
    <Topbar/>

    <Routes>
        <Route exact path="/" element={ <Home/> } />
        <Route exact path="/Register" element={ user?  <Home/> : <Register/> } />
        <Route exact path="/Login" element={ user?  <Home/> : <Login/> } />
        <Route exact path="/Write" element={ user?  <Write/> :<Register/> } />
        <Route exact path="/Setting" element={ user? <Setting/> : <Register/>} />
        <Route exact path="/post/:postId" element={ <Single/> } />
        
      </Routes>


   
    </>
  );
}

export default App;
