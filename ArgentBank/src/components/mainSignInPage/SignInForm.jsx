import React from 'react';
import '../../styles/main.css';
import { Link } from 'react-router-dom';

const SignInForm = () => {
    return (
        <form>
        <div className="input-wrapper">
          <label for="username">Username</label>
          <input type="text" id="username" />
        </div>
        <div className="input-wrapper">
          <label for="password">Password</label>
          <input type="password" id="password" />
        </div>
        <div className="input-remember">
          <input type="checkbox" id="remember-me" /><label for="remember-me">Remember me</label>
        </div>
      
        {/* <a href="./user.html" className="sign-in-button">Sign In</a> */}
      <Link className='sign-in-link' to='/user'>
        <button className="sign-in-button">Sign In</button> 
        </Link>
       
      </form>
    );
};

export default SignInForm;