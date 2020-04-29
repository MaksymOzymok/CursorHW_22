import React from "react";
import "./post-content.css"

const PostContent = ({contentData})=>{
    const {content,image} = contentData;
    return (
        <div className="post-content">
            <p className= "post-content-text">{content}</p>
            <img className="post-content-img" src={image} alt=""/>
        </div>
    )
};

export default PostContent;