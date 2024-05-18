import "./login.css";
import { useContext, useRef } from "react";
import { loginCall } from "../../ApiCalls";
import { AuthContext } from '../../context/AuthContext';
import { CircularProgress } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const email = useRef();
  const password = useRef();
  const { user, isFetching, error, dispatch } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleClick = (e) => {
    e.preventDefault();
    loginCall({ email: email.current.value, password: password.current.value }, dispatch);
    console.log(user);
  };

  const handleRegister = () => {
    navigate('/register');
  };

  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginForm">
          <form className="loginBox" onSubmit={handleClick}>
            <label className="loginLabel">Email</label>
            <input placeholder="Enter your email" type="email" className="loginInput" ref={email} required />
            <label className="loginLabel">Password</label>
            <input
              placeholder="Enter your password"
              type="password"
              className="loginInput"
              minLength="6"
              ref={password}
              required
            />
            <button className="loginButton">
              {isFetching ? <CircularProgress className="progress" /> : 'Log In'}
            </button>
            <span className="loginForgot">Forgot Password?</span>
            <button type="button" className="loginRegisterButton" onClick={handleRegister}>
              {isFetching ? <CircularProgress className="progress" /> : 'Create a New Account'}
            </button>
          </form>
        </div>
      </div>
    </div> 
  );
}
