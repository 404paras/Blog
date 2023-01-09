import React from "react";
import "./write.css";
import Img from './d1.jpg';
export default function write() {
  return (
    <div className="write">

        <img src={Img} className='writeImg' />
      <form className="writeForm">
        <div className="writeFormGroup">
          <label htmlFor="fileInput">
            <i className="writeIcon fas fa-plus"></i>
          </label>

          <input type="file" id="fileInput" style={{display:'none'}} />
          <input type="text" placeholder="Title" className='writeInput' autoFocus={true} />
        </div>

<div className="writeFormGroup">
<textarea type='text' placeholder="Tell your story...." className="writeInput writeText"></textarea>

</div>

<button className="writeSubmit">Publish</button>

    </form>
    </div>
  );
}
