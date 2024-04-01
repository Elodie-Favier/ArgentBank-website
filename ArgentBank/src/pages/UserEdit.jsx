import React from 'react';
import EditUserNameForm from '../components/mainUserEditPage/EditUserNameForm';
import Nav from '../components/layout/Nav';
import Footer from '../components/layout/Footer';
import AccountEditUserPage from '../components/mainUserEditPage/AccountEditUserPage';



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