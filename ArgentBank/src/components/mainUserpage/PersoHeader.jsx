import React, { useEffect, useState } from 'react';
import '../../styles/main.css';
import { useDispatch, useSelector } from 'react-redux';
import { postUserData } from '../../actions/user.actions';
import EditUserNameForm from './EditUserNameForm';
import { useNavigate } from 'react-router-dom';



const PersoHeader = () => {
    // 
    const dispatch = useDispatch()
    const isLoggedIn = useSelector((state) => state.login.isLoggedIn)
    const login = useSelector((state) => state.login.dataResponse)
    const modification = useSelector((state) => state.userData.modification)
    const navigate = useNavigate()
    useEffect(() => {
        if(isLoggedIn) {
          dispatch(postUserData(login.token))  
        }
    }, [login.token, isLoggedIn, dispatch])

    useEffect(() => {
        if(modification){
            dispatch(putNewUserName(login.token, newUserName))
        }
    }), [login.token, modification, dispatch]

        const user = useSelector((state) => state.userData.userDataResponse)
        const [showForm, setShowForm] = useState(false);
        
      useEffect(() => {
        if(showForm) navigate('/userEdit')
      }, [])
      
    return (
        <div className='header'>
            <div className="header-welcome-message">
         <h1 className='header-title'>Welcome back
            <br/>
            {user.userName}
            </h1>  
            
           
            <button onClick={() => setShowForm(!showForm) } className='edit-button'> 
            {showForm? navigate('/userEdit')  : ""}

            Edit Name</button>
            </div>
            
            
        </div>
    );
};

export default PersoHeader;


// style={showForm? btnStyleNone : btnStyleBlock