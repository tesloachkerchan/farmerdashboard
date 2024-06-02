import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {BASE_URL} from '../../utils/Config'
import Post from "../post/Post";
import "./posts.css";

export default function Posts() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get(`${BASE_URL}/api/v1/blog/posts`);
        setPosts(response.data);
      } catch (error) {
        console.error('Error fetching posts:', error);
      }
    };

    fetchPosts();
  }, []);

  return (
    <div className="posts">
      {posts.map((post) => (
        <Post
          key={post._id}
          img={post.img}
          title={post.title}
          description={post.description}
          categories={post.categories}
          createdAt={post.createdAt}
          id={post._id}
        />
      ))}
    </div>
  );
}
