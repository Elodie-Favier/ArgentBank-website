// eslint-disable-next-line no-unused-vars
import React from 'react';
import PersoHeader from '../components/mainUserpage/PersoHeader';
import Account from '../components/mainUserpage/Account';
import '../styles/main.css'
import Nav from '../components/layout/Nav';
import Footer from '../components/layout/Footer';


const User = () => {
  

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