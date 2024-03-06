// eslint-disable-next-line no-unused-vars
import React from 'react';
import PersoHeader from '../components/mainUserpage/PersoHeader';
import Account from '../components/mainUserpage/Account';
import '../styles/main.css'

const User = () => {
    return (
        <main className='main bg-dark'>
           
            <PersoHeader/>
            <Account/>
        </main>
    );
};

export default User;