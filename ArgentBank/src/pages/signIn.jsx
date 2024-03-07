/* eslint-disable no-unused-vars */
import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleUser } from '@fortawesome/free-solid-svg-icons';
import '../styles/main.css';
import SignInForm from '../components/mainSignInPage/SignInForm';

const SignIn = () => {
    return (
        <main className='main bg-dark'>
            <section className='sign-in-content'>
                <FontAwesomeIcon className=' fa fa-user-circle sign-in-icon' icon={faCircleUser}/>
                <h1>Sign In </h1>
                <SignInForm/>
            </section>
        </main>
    );
};

export default SignIn;