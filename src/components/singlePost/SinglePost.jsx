import React, { useState, useEffect,useContext } from 'react';
import { useParams, Link } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import { AuthContext } from '../../context/AuthContext';
import {BASE_URL} from '../../utils/Config'
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import './singlePost.css';

export default function SinglePost() {
  const [post, setPost] = useState({});
  const { user } = useContext(AuthContext)
  const { id } = useParams();

  useEffect(() => {
    fetchPost();
  }, [id]);
  const fetchPost = async () => {
      try {
        const response = await axios.get(`${BASE_URL}/api/v1/blog/posts/${id}`);
        setPost(response.data);
      } catch (error) {
        console.error('Error fetching post:', error);
      }
  };
  const DeletePost = async (id) => {
      try {
        const response = await axios.delete(`${BASE_URL}/api/v1/blog/posts/${id}`);
        setPost(response.data);
        toast.success('post deleted successfully');
      } catch (error) {
        console.error('Error fetching post:', error);
        toast.error('Failed. Please try again later.');
      }
    };

  return (
    <div className="singlePost">
      <ToastContainer position="top-center" autoClose={3000} style={{ marginTop: '50px' }} />
      <div className="singlePostWrapper">
        {post.img && (
          <img className="singlePostImg" src={post.img} alt={post.title} />
        )}
        <h1 className="singlePostTitle">
          {post.title}
          <div className="singlePostEdit">
            {user && user.role === 'admin' && (
              <>
                <i className="singlePostIcon far fa-edit"></i>
              <i className="singlePostIcon far fa-trash-alt" onClick={() => DeletePost(id)}></i>
              </>
              
            )}
          </div>
        </h1>
        <div className="singlePostInfo">
          <span>
            Author:
            <b className="singlePostAuthor">
              <Link className="link" to={`/posts?username=${post.username}`}>
                {post.author}
              </Link>
            </b>
          </span>
          <span>{new Date(post.createdAt).toDateString()}</span>
        </div>
        <div className="singlePostDesc">
          {post.description?.split('\n').map((paragraph, index) => (
            <>
              <p key={index}>{paragraph}</p>
              <br/>
            </>
          ))}
        </div>
      </div>
    </div>
  );
}
