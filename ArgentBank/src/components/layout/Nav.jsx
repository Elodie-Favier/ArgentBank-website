
import Logo from './Logo';
import LoginLogout from './LoginLogout';
import { NavLink } from 'react-router-dom';
import '../../styles/main.css';



const Nav = () => {
    return (
        <div className='main-nav'>
            <NavLink
                to='/'
                >
                <div>
                    <Logo/>
                </div>
                </NavLink>
                <NavLink
                to='/signIn'>
                    <div>
                        <LoginLogout/>
                    </div>
                </NavLink>
            

            
        </div>
    );
};

export default Nav;