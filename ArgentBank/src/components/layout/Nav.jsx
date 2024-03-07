
import Logo from './Logo';
import LoginLogout from './LoginLogout';
import { NavLink } from 'react-router-dom';
import '../../styles/main.css';



const Nav = () => {
    return (
        <nav className='main-nav'>
            <NavLink
                to='/'
                >
                <Logo/>
                </NavLink>
                <NavLink
                to='/signIn'>
                <LoginLogout/>
                </NavLink>
            

            
        </nav>
    );
};

export default Nav;