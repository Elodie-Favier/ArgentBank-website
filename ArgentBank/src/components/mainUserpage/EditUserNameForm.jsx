import React, { useRef, useEffect } from 'react';
import '../../styles/main.css'
import { useDispatch, useSelector } from 'react-redux';
import { postUserData } from '../../actions/user.actions';

const EditUserNameForm = () => {
    const dispatch = useDispatch()
    const userNameInputRef = useRef()
    const login = useSelector((state) => state.login.dataResponse)
    const isLoggedIn = useSelector((state) => state.login.isLoggedIn)
    const user = useSelector((state) => state.userData.userDataResponse)
    useEffect(() => {
        if(isLoggedIn) {
          dispatch(postUserData(login.token))  
        }
    }, [login.token, isLoggedIn, dispatch])

    return (
        <section className="edit-username-content">
        <form id='edit-Name-Form' >

        <div className="input-wrapper">
            <label ref={userNameInputRef} htmlFor="username">User name :</label>
            <input type="text" id="username" required minLength="3" maxLength="20" placeholder={user.userName} name="username"/>
        </div>
        <div className="input-wrapper">
            <label htmlFor="firstname">First name :</label>
            <input type="text" className='input-disabled' id="firstname" disabled placeholder={user.firstName} name="firstname"/>
        </div>

        <div className="input-wrapper">
            <label htmlFor="lastname">Last name :</label>
            <input type="text" id="lastname" disabled className='input-disabled' placeholder={user.lastName} name="lastname"/>
       </div>
        <div className="button-wrapper">
        <button className='edit-button'>Save</button>
        <button className='edit-button'>Cancel</button>
        </div>
        </form>
        </section>
    );
};

export default EditUserNameForm;