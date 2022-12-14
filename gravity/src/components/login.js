import React from 'react';
import { Link } from 'react-router-dom';


export const Login = ({handleSubmitSuccess, setEmail , setPassword}) =>{
    return (<div className="login">
    <div id="wrapper">
    <div id="left">
      <div id="signin">
      <h1>F T C.co</h1>
        <form className='form-group' onSubmit={handleSubmitSuccess}>
          <div>
            <label>Email Or Username</label>
            <input
              type="text"
              className="text-input"
              id="email"
              onChange={(e) => setEmail(e.target.value)}
              name="email"
              placeholder="Username OR Email"
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
          <button type="submit" className="primary-btn">
            Sign In
          </button>
        </form>
        <div className="links">
          <a href="#">Forgot your password?</a>
        </div>
        <div className="or">
          <hr className="bar" />
          <span>OR</span>
          <hr className="bar" />
        </div>
        <Link to="/Register" className="secondary-btn">
          Create an account
        </Link>
      </div>
      <footer id="main-footer">
        <p>Copyright &copy; 2022, Feydo Top Clothing.co Rights Reserved</p>
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
    </div>)
}