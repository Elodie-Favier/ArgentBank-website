/* eslint-disable react/jsx-no-undef */
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './styles/main.css';
import {createBrowserRouter, RouterProvider} from 'react-router-dom';

import Home from './pages/home.jsx';
import SignIn from './pages/signIn.jsx';
import User from './pages/User.jsx';
import Error from './components/layout/Error.jsx';

 const router = createBrowserRouter([
  {
    path:'/',
    element: <App/>,
    children: [
      {
        path:'/',
        element:<Home/>
      }, 
      {
        path:"/signIn",
        element:<SignIn/>
      },
      {
        path:"/user",
        element:<User/>
      }, 
      {
        path:'*',
        element:<Error/>
      }
    ]
  }
 ])
console.log(router)
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router}/>
  </React.StrictMode>,
)
  