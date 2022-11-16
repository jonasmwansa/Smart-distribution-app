import React, { useState } from "react";
import {Link,useNavigate } from 'react-router-dom';



const Login = (props) =>{

      let navigate = useNavigate();
      let [authMode, setAuthMode] = useState("signin")
    
      const changeAuthMode = () => {
        setAuthMode(authMode === "signin" ? "signup" : "signin")
      }
    
      if (authMode === "signin") {
        return (
          <div className="Auth-form-container">
            <form className="Auth-form">
              <div className="Auth-form-content">
                <h3 className="Auth-form-title">Sign in to Expressit</h3>
              
                <div className="form-group mt-3">
                  <label htmlFor="email">Email address</label>
                  <input
                    type="email"
                    className="form-control mt-1"
                    placeholder="Enter email"
                    name="email"
                  />
                </div>
                <div className="form-group mt-3">
                  <label htmlFor="password">Password</label>
                  <input
                    type="password"
                    className="form-control mt-1"
                    placeholder="Enter password"
                    nme="password"
                  />
                </div>
                <p className="text-center mt-2">
                   <Link to="/forgotpassword">Forgot password?</Link> 
                </p>  
                
                <div className="d-grid gap-2 mt-3">
                  <button type="submit" className="btn btn-primary"
                          onClick={()=>navigate(props.loginLink)}
                  >
                  Log in
                  </button>
                </div>

                <div className="alt-link">
                  Not registered yet ?{" "}
                  <span className="link-primary" onClick={changeAuthMode}>
                    Sign Up
                  </span>
                </div>
                
              </div>
            </form>
          </div>
        )
      }
    
      return (
        <div className="Auth-form-container">
          <form className="Auth-form">
            <div className="Auth-form-content">
              <h3 className="Auth-form-title">Sign In</h3>
              
              <div className="form-group mt-3">
                <label htmlFor="name">Full Name</label>
                <input
                  type="text"
                  className="form-control mt-1"
                  placeholder="e.g jonas microlink"
                  name="name"
                />
              </div>
              <div className="form-group mt-3">
                <label htmlFor="email">Email address</label>
                <input
                  type="email"
                  className="form-control mt-1"
                  placeholder="e.g microlink@gmail.com"
                />
              </div>
              <div className="form-group mt-3">
                <label htmlFor="phone">Phone Number</label>
                <input
                  type="number"
                  className="form-control mt-1"
                  placeholder="097232506"
                  name="phone"
                />
              </div>
              <div className="form-group mt-3">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  className="form-control mt-1"
                  placeholder="Password"
                  name="password"
                />
              </div>
              <div className="form-group mt-3">
                <label htmlFor="comfirm_password">Comfirm password</label>
                <input
                  type="password"
                  className="form-control mt-1"
                  placeholder="Password"
                  name="comfirm_password"
                />
              </div>
              <div className="d-grid gap-2 mt-3">
                <button type="submit" className="btn btn-primary"
                onClick={()=>navigate(props.signupLink)}
                >
                Submit
                {/* <Link to={props.signupLink} className='btn-link'>Submit</Link> */}
                </button>
              </div>
              <div className="alt-link">
                Already registered?{" "}
                <span className="link-primary" onClick={changeAuthMode}>
                  Sign In
                </span>
              </div>
            </div>
          </form>
        </div>
      )
    }

export default Login;