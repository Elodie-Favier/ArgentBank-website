import React, { useEffect, useRef, useState } from 'react';
import '../../styles/main.css';
import { Navigate, useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
// REDUX

import {useDispatch, useSelector} from 'react-redux'
import { postFetchLoginSuccess } from '../../actions/login.actions';



const SignInForm = () => {

  const isLoggedIn = useSelector((state) => state.login.isLoggedIn)
  const isError = useSelector((state)=> state.login.errorFetch)
  const errorMessage = useSelector((state) => state.login.dataResponse)
  const navigate = useNavigate()
  const emailInputRef = useRef()
  const passwordInputRef = useRef()
  const [error, setError] = useState(null)
  const dispatch = useDispatch()
  useEffect(() =>{
if(isLoggedIn) {
  navigate("/user")
} else;
if (isError) {

}
  


  },[isLoggedIn])
  
  const handleForm = (event) => {
    event.preventDefault();
    const enteredEmail = emailInputRef.current.value
    const enteredPassword = passwordInputRef.current.value
    if (
        enteredEmail.trim().length === 0 || enteredPassword.trim().length === 0) 
          {
            setError({message:'Identifiants incorrects'});
            return;
            }
            
    const credential = {
      email : enteredEmail,
      password : enteredPassword,
    }
    // envoi requête login
    dispatch(postFetchLoginSuccess(credential))
    
  }

  // | form.current.reset()

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
          <input type="checkbox" id="remember-me" /><label htmlFor="remember-me">Remember me</label>
        </div>
        {isError? <span className="error-login">{errorMessage.message}</span> : ""  }
       
        <button className="sign-in-button">Sign In</button>
       
     
      </form>
    );
    }

export default SignInForm;