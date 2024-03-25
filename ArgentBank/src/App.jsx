import { Routes, Route } from 'react-router-dom';
import './styles/main.css';
import Home from './pages/Home';
import SignIn from './pages/SignIn';
import User from './pages/User';
import { useSelector } from 'react-redux';
import UserEdit from './pages/UserEdit';




const App = () => {
  const isLoggedIn = useSelector((state) => state.login.isLoggedIn)
  return (
  <>
   <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/signIn' element={<SignIn/>}></Route>
        <Route path='/user' element={<User/>}></Route>
        <Route path='/userEdit' element={<UserEdit/>}></Route>
        <Route path='*' element={<Home/>}></Route>
   </Routes>
   </>
  )
};

export default App;

// const App = () => {
//   return (
//   <>
//    <Nav/>
//    <Outlet/>
//    <Footer/>
//    </>
//   )
// };

// export default App;