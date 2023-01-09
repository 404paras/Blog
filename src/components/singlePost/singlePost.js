import React from 'react'
import './singlePost.css';
import Img from './d1.jpg';

export default function singlePost() {
  return (
    <div className='singlePost'>
<div className='singlePostWrapper'>
<img src={Img} className='singlePostImg' alt="" />
<h1 className="singlePostTitle">
  Lorem ipsum dolor sit.

  <div className="singlePostEdit">
    <i className="singlePostIcon far fa-edit"></i>
    <i className="singlePostIcon far fa-trash-alt"></i>
  </div>
</h1>
<div className="singlePostInfo">
  <span className="singlePostAuthor">Author: <b>Paras</b></span>
  <span className="singlePostDate">1 hour ago</span>
</div>

<p className="singlePostDes">
  Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde est aliquid earum praesentium rem deserunt quas iusto. Blanditiis laudantium ipsam molestias nostrum laborum exercitationem tempora quo necessitatibus nihil iste quos ipsa iusto officia odio voluptatum, dolorum, nam dolor! Velit, nihil cupiditate optio ducimus a obcaecati consequuntur est minus, reprehenderit qui beatae et neque voluptatem exercitationem? Sit commodi voluptatem voluptate fugiat delectus unde officia! Voluptate in facilis, perferendis molestiae fuga exercitationem ut omnis error a harum eveniet quod dignissimos debitis dolores esse, illum, qui alias eum vel at distinctio saepe cumque nisi iure. Quis ex perferendis natus! Atque fugit soluta illum?Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur necessitatibus maiores aliquid, odio consequatur quibusdam delectus qui cumque quasi, impedit unde dolor perferendis nesciunt ullam. Impedit excepturi nobis odit, natus est commodi nostrum nulla delectus et eligendi tempore incidunt dignissimos quas unde necessitatibus. Enim ipsam placeat similique odit earum dolor.
</p>

</div>
    </div>
  )
}
