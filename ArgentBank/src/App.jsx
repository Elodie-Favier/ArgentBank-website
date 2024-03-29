import { Routes, Route } from 'react-router-dom';
import './styles/main.css';
import Home from './pages/Home';
import SignIn from './pages/SignIn';
import User from './pages/User';
import UserEdit from './pages/UserEdit';


const App = () => {
  
     return( 
  <>
   <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/signIn' element={<SignIn/>}/>
        <Route path='/user' element={<User/>}/>
        <Route path='/userEdit' element={<UserEdit/>}/>
        <Route path='*' element={<Home/>}/>
   </Routes>
   </>
  )
};

export default App;

