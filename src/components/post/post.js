import React from 'react';
import './post.css';
import Img from './postimg.jpg';
const Post = () => {
    return (
        <div className="post">
          <img src={Img} className='postImg'alt='' />


          <div className="postInfo">
            <div className="postCats">
                <span className="postCat">
                    Music
                </span>
            <span className="postCat">Life</span>
            </div>
            <span className="postTitle">
                Lorem ipsum dolor sit amet.
            </span>
            
            <hr />
            <span className="postDate">1 hour ago</span>
            </div>

        <p className="postDec">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas et culpa accusantium dolor? Nisi omnis, distinctio voluptas a sunt error labore porro modi nihil accusamus beatae magnam aut enim voluptatum nam ipsum sapiente architecto voluptatem iusto, provident molestias, reprehenderit esse tempora. Quod pariatur laudantium fugit incidunt eum sunt autem perferendis sint accusamus, non enim hic expedita odit eius veniam! Doloribus?Lorem, ipsum dolor sit amet consectetur adipisicing elit. Saepe voluptatum at aliquid eligendi laborum quae sunt, sed quam quasi voluptatem vel officia unde doloremque fugiat maiores voluptas deleniti nostrum llam nobis mollitia repellendus dicta, nesciunt libero. Optio sunt alias voluptatum aliquam unde quae sit expedita ullam soluta!</p>
        </div>
    );
}

export default Post;
