
import Logo from './Logo';
import LoginLogout from './LoginLogout';
import { NavLink } from 'react-router-dom';
import '../../styles/main.css';



const Nav = () => {

    return (
        <nav className='main-nav'>
            <Logo/>
            <LoginLogout/>
        </nav>
    );
};

export default Nav;