import React from 'react';
import { Link } from "react-router-dom";
import "./post.css";

export default function Post({ img, title, description, categories, createdAt, id }) {
  return (
    <div className="post">
      <img className="postImg" src={img} alt={title} />
      <div className="postInfo">
        <div className="postCats">
          {categories.map((cat, index) => (
            <span key={index} className="postCat">
              <Link className="link" to={`/posts?cat=${cat}`}>
                {cat}
              </Link>
            </span>
          ))}
        </div>
        <span className="postTitle">
          <Link to={`/blog/${id}`} className="link">
            {title}
          </Link>
        </span>
        <hr />
        <span className="postDate">{new Date(createdAt).toDateString()}</span>
      </div>
      <p className="postDesc">
        {description}
      </p>
    </div>
  );
}
