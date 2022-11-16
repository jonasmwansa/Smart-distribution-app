import React from "react";
import {useNavigate, Routes, Route, Link} from "react-router-dom";
import App from '../App'


const Login = (props) =>{

const navigate = useNavigate();

  return (
    <div className="Auth-form-container">
      <form className="Auth-form">
        <div className="Auth-form-content">
          <h3 className="Auth-form-title">Sign In</h3>
          <div className="form-group mt-3">
            <label>Email address</label>
            <input
              type="email"
              className="form-control mt-1"
              placeholder="e.g jonas@gmil.com"
            />
          </div>
          <div className="form-group mt-3">
            <label>Password</label>
            <input
              type="password"
              className="form-control mt-1"
              placeholder="Enter password"
            />
          </div>
          <div className="d-grid gap-2 mt-3">
            <button 
                  type="submit" 
                  className="btn btn-primary"
                  onClick={()=>navigate("/adminHome")}
                  >
                  Login
            {/* <Link to={'/'}>Login</Link> */}
            </button>
          </div>
          <p className="forgot-password text-right mt-2">
            Forgot <a href="#">password?</a>
          </p>
        </div>
      </form>
    </div>
  )

}

export default Login;