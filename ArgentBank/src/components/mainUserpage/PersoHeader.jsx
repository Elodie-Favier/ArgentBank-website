import React, { useEffect, useRef } from 'react';
import '../../styles/main.css';
import { useDispatch, useSelector } from 'react-redux';
import { postUserData } from '../../actions/user.actions';

const PersoHeader = () => {
    const userNameInputRef = useRef()
    const dispatch = useDispatch()
    const isLoggedIn = useSelector((state) => state.login.isLoggedIn)
    const login = useSelector((state) => state.login.dataResponse)
    useEffect(() => {
        if(isLoggedIn) {
          dispatch(postUserData(login.token))  
        }
    }, [login.token, isLoggedIn, dispatch])
    

    const user = useSelector((state) => state.userData.userDataResponse)
   const editNameForm = (e) => {
    e.preventDefault()
    const form = document.getElementById('formEditName')
    form.style.display(block)
   }

    return (
        <div className='header'>
            <h1 className='header-title'>Welcome back
            <br/>
            {user.userName}
            </h1>
            <button Onclick={editNameForm} className='edit-button'>Edit Name</button>

            <form id='formEditName' >

            <div className="input-wrapper">
                <label ref={userNameInputRef} htmlFor="username">User name</label>
                <input type="text" id="username" placeholder={user.userName} name="username"/>
            </div>
            <div className="input-wrapper">
                <label htmlFor="username">First name</label>
                <input type="text" id="username" disabled placeholder={user.firstName} name="username"/>
            </div>

            <div className="input-wrapper">
                <label htmlFor="username">Last name</label>
                <input type="text" id="username" disabled placeholder={user.lastName} name="username"/>
           </div>

            <button className='edit-button'>Save</button>
            <button className='edit-button'>Cancel</button>

            </form>
        </div>
    );
};

export default PersoHeader;