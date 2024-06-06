import React, { useState } from 'react';
import axios from 'axios';
import Topbar from "../../components/topbar/Topbar";
import { ToastContainer, toast } from 'react-toastify';
import { BASE_URL } from '../../utils/Config';
import 'react-toastify/dist/ReactToastify.css';
import "./write.css";
import Footer from '../../components/footer/Footer';

export default function Write() {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [description, setDescription] = useState("");
  const [file, setFile] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('blog', file);
    formData.append('title', title);
    formData.append('author', author);
    formData.append('description', description);

    try {
      const response = await axios.post(`${BASE_URL}/api/v1/blog/posts`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      toast.success('Blog post uploaded successfully!');
      // Clear the form
      setTitle("");
      setAuthor("");
      setDescription("");
      setFile(null);
    } catch (error) {
      toast.error('Error uploading blog post: ' + error.message);
    }
  };

  return (
    <>
      <Topbar />
      <ToastContainer />
      <div className="write">
        <img
          className="writeImg"
          src="https://i.ibb.co/NtM6zD7/816269c4201a.png"
          alt=""
        />
        <form className="writeForm" onSubmit={handleSubmit}>
          <div className="writeFormGroup">
            <label htmlFor="fileInput">
              <i className="writeIcon fas fa-plus"></i>
            </label>
            <input
              id="fileInput"
              type="file"
              style={{ display: "none" }}
              onChange={(e) => setFile(e.target.files[0])}
            />
            <input
              className="writeInput"
              placeholder="Title"
              type="text"
              autoFocus={true}
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <input
              className="writeInput"
              placeholder="Author"
              type="text"
              autoFocus={true}
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
            />
          </div>
          <div className="writeFormGroup">
            <textarea
              className="writeInput writeText"
              placeholder="Tell your story..."
              type="text"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
          <button className="writeSubmit" type="submit">
            Publish
          </button> 
        </form>
      </div>
      <Footer />
    </>
  );
}
