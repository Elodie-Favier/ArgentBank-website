
import Logo from './Logo';
import LoginLogout from './LoginLogout';
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