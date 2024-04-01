import React, { useEffect, useRef, useState } from 'react';
import '../../styles/main.css';
import { useNavigate } from 'react-router-dom';

// REDUX

import {useDispatch, useSelector} from 'react-redux'
import { postFetchLogin } from '../../actions/login.actions';

const SignInForm = () => {

  const isLoggedIn = useSelector((state) => state.login.isLoggedIn)
  const isError = useSelector((state)=> state.login.errorFetch)
  const errorMessage = useSelector((state) => state.login.dataResponse)
  const navigate = useNavigate()
  const emailInputRef = useRef()
  const passwordInputRef = useRef()
  const [checkbox, setCheckbox] = useState(false);
  const dispatch = useDispatch()
  useEffect(() =>{
if(isLoggedIn) {
  navigate("/user")
} 
},[isLoggedIn])
  
  const handleForm = (event) => {
    event.preventDefault();
    const enteredEmail = emailInputRef.current.value
    const enteredPassword = passwordInputRef.current.value  
  
    const credential = {
      email : enteredEmail,
      password : enteredPassword,
    }
    // envoi requête login
    dispatch(postFetchLogin(credential, checkbox))    
  }

    return (
        <form onSubmit={handleForm}>
        <div className="input-wrapper">
          <label htmlFor="username">Username</label>
          <input type="email" ref={emailInputRef} autoComplete='on' id="username" name="username"/>
        </div>
        <div className="input-wrapper">
          <label htmlFor="password">Password</label>
          <input type="password" ref={passwordInputRef} id="password" name="password" />
        </div>
        <div className="input-remember">
          <input type="checkbox" onChange={(e) => setCheckbox(e.target.checked)} id="remember-me" /><label htmlFor="remember-me">Remember me</label>
        </div>
        
        {isError? <span className="error-login">{errorMessage.message}</span> : ""  }
       
        <button className="sign-in-button">Sign In</button>
       
     
      </form>
    );
    }

export default SignInForm;