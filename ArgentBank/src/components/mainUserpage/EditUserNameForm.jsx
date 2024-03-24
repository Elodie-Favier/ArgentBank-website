import React, { useRef, useEffect, useState } from 'react';
import '../../styles/main.css'
import { useDispatch, useSelector } from 'react-redux';
import { postUserData, putNewUserName } from '../../actions/user.actions';

const EditUserNameForm = () => {
    const dispatch = useDispatch()
    const userNameInputRef = useRef()
    const login = useSelector((state) => state.login.dataResponse)
    const isLoggedIn = useSelector((state) => state.login.isLoggedIn)
    const modification = useSelector((state) => state.userData.modification)
    const user = useSelector((state) => state.userData.userDataResponse)
    const [error, setError] = useState(null)
    useEffect(() => {
        if(isLoggedIn) {
          dispatch(postUserData(login.token))  
        }
    }, [login.token, isLoggedIn, dispatch])

const handleFormEditUserName = (event) => {
    event.preventDefault();
    const enteredUserName = userNameInputRef.current.value
    if (
        enteredUserName.trim().length === 0 ) 
  {
    setError({message:'Erreur username or password'});
    return;
    }
    // console.log(enteredUserName)

    const newUserName = {
        userName:enteredUserName
    }
    console.log(newUserName)
    // envoi requete put new userName
    dispatch(putNewUserName(login.token, newUserName))
    // if(modification)
    
}
// useEffect(() => {
//     if(modification){
//         dispatch(putNewUserName(login.token, newUserName))
//     }
// }), [login.token, modification, dispatch]

    return (
        <div className="header-edit-username">
        <section className="edit-username-content">
        <h1 className='edit-username-title'>Edit user info</h1>

        <form onSubmit={handleFormEditUserName} id='edit-Name-Form' >

        <div className="input-wrapper">
            <label htmlFor="username">User name :</label>
            <input type="text" ref={userNameInputRef} id="username" required minLength="3" maxLength="20" placeholder={user.userName} name="username"/>
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
        </div>
    );
};

export default EditUserNameForm;