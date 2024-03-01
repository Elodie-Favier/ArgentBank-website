import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './components/Header';


const App = () => {
  return (
   <>
   <div>Container principal</div>
   <Header/>
   <Outlet/>
   </>
  )
};

export default App;