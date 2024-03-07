
import { Outlet } from 'react-router-dom';
import './styles/main.css';
import Footer from './components/layout/Footer';
import Nav from './components/layout/Nav';



const App = () => {
  return (
   <>
   <Nav/>
   <Outlet/>
   <Footer/>
   </>
  )
};

export default App;