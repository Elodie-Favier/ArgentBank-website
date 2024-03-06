
import '../../styles/main.css';
import { Link } from 'react-router-dom';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faCircleUser} from '@fortawesome/free-solid-svg-icons'
import {faRightFromBracket} from '@fortawesome/free-solid-svg-icons'

const LoginLogout = () => {
    return (
        <div className='main-nav-item'>
            <Link className='main-nav-item' to='/signIn'>
            <FontAwesomeIcon  icon={faCircleUser} />
            <FontAwesomeIcon icon={faRightFromBracket}/>
                Sign In
            </Link>
        </div>
    );
};

export default LoginLogout;