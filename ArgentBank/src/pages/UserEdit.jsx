import React from 'react';
import EditUserNameForm from '../components/mainUserpage/EditUserNameForm';
import Nav from '../components/layout/Nav';
import Footer from '../components/layout/Footer';
import Account from '../components/mainUserpage/AccountEditUserPage';
import AccountEditUserPage from '../components/mainUserpage/AccountEditUserPage';


const UserEdit = () => {
    return (
        <>
        <Nav/>
        <main className='main user-edit-bg-white'>
            <EditUserNameForm/>
            <AccountEditUserPage/>
        </main>
        <Footer/>
        </>
    );
};

export default UserEdit;