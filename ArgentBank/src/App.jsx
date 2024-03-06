
import { Outlet } from 'react-router-dom';
import Header from './components/layout/Header';

import './styles/main.css';
import Footer from './components/layout/Footer';
import MainHome from './components/mainHomePage/MainHome';



const App = () => {
  return (
   <>
   <Header/>
   <Outlet/>
   
   <Footer/>
   </>
  )
};

export default App;