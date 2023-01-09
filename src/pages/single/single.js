import React from 'react'
import './single.css';
import Sidebar from '../../components/sidebar/sidebar.js';
import SinglePost from '../../components/singlePost/singlePost.js';
export default function single() {
  return (
    <div className="single">
<SinglePost/>
<Sidebar/>
    </div>
  )
}
