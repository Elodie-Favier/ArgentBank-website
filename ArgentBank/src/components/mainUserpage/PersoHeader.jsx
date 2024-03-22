import React, { useEffect, useState } from 'react';
import '../../styles/main.css';
import { useDispatch, useSelector } from 'react-redux';
import { postUserData } from '../../actions/user.actions';
import EditUserNameForm from './EditUserNameForm';

const PersoHeader = () => {
    // 
    const dispatch = useDispatch()
    const isLoggedIn = useSelector((state) => state.login.isLoggedIn)
    const login = useSelector((state) => state.login.dataResponse)
    useEffect(() => {
        if(isLoggedIn) {
          dispatch(postUserData(login.token))  
        }
    }, [login.token, isLoggedIn, dispatch])

        const user = useSelector((state) => state.userData.userDataResponse)
        const [showForm, setShowForm] = useState(false);
    
    return (
        <div className='header'>
            <h1 className='header-title'>Welcome back
            <br/>
            {user.userName}
            </h1>
            <button onClick={() => setShowForm(!showForm)}  className='edit-button'>Edit Name</button>
        
        {showForm? <EditUserNameForm /> : ""}
   
        </div>
    );
};

export default PersoHeader;