import React, { useEffect } from 'react';
import '../../styles/main.css';
import { useDispatch, useSelector } from 'react-redux';
import { postUserData } from '../../actions/user.actions';

const PersoHeader = () => {
    const dispatch = useDispatch()
    const isLoggedIn = useSelector((state) => state.login.isLoggedIn)
    const login = useSelector((state) => state.login.dataResponse)
    useEffect(() => {
        if(isLoggedIn) {
          dispatch(postUserData(login.token))  
        }
    }, [login.token, isLoggedIn, dispatch])
    

    const user = useSelector((state) => state.userData.userDataResponse)
    console.log(user);

    return (
        <div className='header'>
            <h1 className='header-title'>Welcome back
            <br/>
            {user.firstName} {user.lastName}
            </h1>
            <button className='edit-button'>Edit Name</button>

            {/* <form >

            <label htmlFor="username">Username</label>
            <input type="text" id="username" name="username"/>
            </form> */}
        </div>
    );
};

export default PersoHeader;