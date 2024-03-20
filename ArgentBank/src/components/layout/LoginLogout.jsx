
import '../../styles/main.css';
import { Link, Navigate } from 'react-router-dom';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faCircleUser} from '@fortawesome/free-solid-svg-icons'
import {faRightFromBracket} from '@fortawesome/free-solid-svg-icons'
import { useDispatch, useSelector } from 'react-redux';
import { loginActions } from '../../slice/login.slice';


const LoginLogout = () => {
const dispatch = useDispatch()
    const isLoggedIn = useSelector((state) => state.login.isLoggedIn)
    const logoutHandler = () => {
        dispatch(loginActions.logout())
    }

    return (
            <div className='main-nav-item'>
            <FontAwesomeIcon className='main-nav-item' icon={faCircleUser} />
            {!isLoggedIn? <Link to='/signIn'>Sign In</Link> : <><div className='main-nav-item user-name-connected'><Navigate to='/user'>toto</Navigate></div><> <Link onClick={logoutHandler} to='/signIn'>Sign Out
                <FontAwesomeIcon className='icon-logout main-nav-item' icon={faRightFromBracket} /></Link></></>
        }

        </div>
    );
};

export default LoginLogout;


  // <FontAwesomeIcon className='main-nav-item' icon={faCircleUser} />
            // <div className='main-nav-item user-name-connected'>
                // {isLoggedIn? <Link to='/user'>toto</Link>: ''}
            // </div> 

            // {isLoggedIn? <FontAwesomeIcon className='icon-logout main-nav-item' style={{display:'block'}} icon={faRightFromBracket}/> : <FontAwesomeIcon className='icon-logout main-nav-item' style={{display:'none'}} icon={faRightFromBracket}/>}
            
                 
            // {isLoggedIn? "Sign Out" :"Sign In"}