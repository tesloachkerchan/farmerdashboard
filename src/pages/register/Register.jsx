import { useRef, useState } from "react";
import "./register.css";
import axios from "axios";
import { useNavigate } from 'react-router';
import { Link } from "react-router-dom";
import { toast, ToastContainer } from 'react-toastify';

export default function Register() {
  const name = useRef();
  const email = useRef();
  const password = useRef();
  const passwordAgain = useRef();
  const role = useRef();
  const license = useRef();
  const navigate = useNavigate();


  const handleClick = async (e) => {
    e.preventDefault();
    if (passwordAgain.current.value !== password.current.value) {
      password.current.setCustomValidity("Passwords don't match!");
    } else {
      const formData = new FormData();
      formData.append("name", name.current.value);
      formData.append("email", email.current.value);
      formData.append("password", password.current.value);
      formData.append("confirmPassword", passwordAgain.current.value);
      formData.append("role", role.current.value);
      formData.append("license", license.current.files[0]);
      try {
        await axios.post('http://localhost:4000/api/v1/auth/register', formData, {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        });
        toast.success('registred successfully');
        navigate('/');
      } catch (err) {
        // Handle case where farmer is not found or not active
        toast.error('failed to register try again!');
        console.log(err);
      }
    }
  };

  return (
    <div className="register">
      <div className="registerWrapper">
        <div className="registerForm">
          <ToastContainer position="top-center" autoClose={3000} style={{ marginTop: '50px' }} />
          <form className="registerBox" onSubmit={handleClick}>
            <label className="registerLabel">Username</label>
            <input
              placeholder="Enter your username"
              ref={name}
              required
              className="registerInput"
            />
            <label className="registerLabel">Email</label>
            <input
              placeholder="Enter your email"
              ref={email}
              required
              className="registerInput"
              type="email"
            />
            <label className="registerLabel">Password</label>
            <input
              placeholder="Enter your password"
              ref={password}
              required
              className="registerInput"
              type="password"
              minLength="6"
            />
            <label className="registerLabel">Password Again</label>
            <input
              placeholder="Re-enter your password"
              ref={passwordAgain}
              required
              className="registerInput"
              type="password"
              minLength="6"
            />
            <label className="registerLabel">Role</label>
            <select ref={role} required className="registerInput">
              <option value="farmer">Farmer</option>
              <option value="transportation">Transportation Company</option>
            </select>
            <label className="registerLabel">License</label>
            <input
              type="file"
              ref={license}
              required
              className="registerInput"
            />
            <button className="registerButton" type="submit">
              Sign Up
            </button>
            <Link to='/'>
              <button type="button" className="loginRedirectButton">
                Log into Account
              </button>
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}
