
import { Link } from 'react-router-dom';
import '../../styles/main.css';

const Logo = () => {
    return (
        <div className="main-nav-logo">
            <img className="main-nav-logo-image" src='./argentBankLogo.png' alt='Logo de la banque'/>
            <Link to='/'></Link>
        </div>
    );
};

export default Logo;