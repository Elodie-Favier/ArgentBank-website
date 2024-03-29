// eslint-disable-next-line no-unused-vars
import React, { useEffect } from 'react';
import PersoHeader from '../components/mainUserpage/PersoHeader';
import Account from '../components/mainUserpage/Account';
import '../styles/main.css'
import Nav from '../components/layout/Nav';
import Footer from '../components/layout/Footer';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const User = () => {
   
   
    const navigate = useNavigate()
    const isLoggedIn = useSelector((state) => state.login.isLoggedIn)
    
//   useEffect (() =>{
//    !isLoggedIn? navigate('/signIn') : ""
//   },[])



    return (
        <>
        <Nav/>
        <main className='main bg-dark'>
            <PersoHeader/>
            <Account/>
        </main>
        <Footer/>
        </>
    );
};

export default User;