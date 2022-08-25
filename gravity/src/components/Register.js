import React from 'react';
import { Link } from 'react-router-dom';


export const Register = ({handleSubmit, setUserName,
setEmail,
setContacts,
setPassword,
setConfirmPassword}) =>{
    return(
        <div className="register">
         <div id="wrapper">
             <div id="left">
              <div id = "register">
              <h1>F T C.co</h1>
           <form className='form-group' onSubmit={handleSubmit}>
              <div>
                <label>Username</label>
                <input
                  type="text"
                  className="text-input"
                  id="username"
                  onChange={(e) => setUserName(e.target.value)}
                  name="username"
                  placeholder="Username"
                  required
                />
              </div>
              <div>
                <label>Email</label>
                <input
                  type="text"
                  className="text-input"
                  id="email"
                  onChange={(e) => setEmail(e.target.value)}
                  name="email"
                  placeholder="Email"
                  required
                />
              </div>
              <div>
                <label>Password</label>
                <input
                  type="password"
                  className="text-input"
                  id="password"
                  onChange={(e) => setPassword(e.target.value)}
                  name="password"
                  placeholder="password"
                  required
                />
              </div>
              <div>
                <label>Confirm Password</label>
                <input
                  type="password"
                  className="text-input"
                  id="password"
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  name="password"
                  placeholder="Confirm Password"
                  required
                />
              </div>
              <button type="submit" className="primary-btn" >
                Sign up
              </button>
            </form>
            
            <div className="links">
            </div>
            <div className="or">
              <hr className="bar" />
              <span>OR</span>
              <hr className="bar" />
            </div>
            <Link to="/login" className="secondary-btn">
              Sign in Here
            </Link>
          </div>
          <footer id="register-footer">
            <p>Copyright &copy; 2022, Feydo Top Clothing.co All Rights Reserved</p>
            <div>
              <a href="#">terms of use</a> | <a href="#">Privacy Policy</a>
            </div>
          </footer>

             </div>
             <div id="right">
          <div id="showcase">
            <div id="showcase-content">
              <h1 className="showcase-text">
                Is not just a <strong>Force</strong>
              </h1>
              <a href="#" className="secondary-btn">
                Start a FREE 7-day trial
              </a>
            </div>
          </div>
        </div>

         </div>
        </div>
    )
}