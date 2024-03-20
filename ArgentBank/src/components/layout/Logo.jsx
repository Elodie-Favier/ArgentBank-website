
import { Link } from 'react-router-dom';
import '../../styles/main.css';

const Logo = () => {
    return (
       <Link 
       to='/'>
          <img className="main-nav-logo-image" src='./argentBankLogo.png' alt='Logo de la banque'/> 
        </Link>
          
        
    );
};

export default Logo;