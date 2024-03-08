
import '../../styles/main.css';

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faCircleUser} from '@fortawesome/free-solid-svg-icons'
import {faRightFromBracket} from '@fortawesome/free-solid-svg-icons'

const LoginLogout = () => {
    return (
        <div className='main-nav-item'>
           
            <FontAwesomeIcon className='main-nav-item' icon={faCircleUser} />
            <FontAwesomeIcon className='icon-logout main-nav-item' icon={faRightFromBracket}/>
                Sign In
          
        </div>
    );
};

export default LoginLogout;