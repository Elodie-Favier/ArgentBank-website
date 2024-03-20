/* eslint-disable react/jsx-no-undef */
import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './styles/main.css';
import {BrowserRouter} from 'react-router-dom';
// REDUX
import { Provider } from 'react-redux';
import { store } from './store.jsx';



const container = document.getElementById("root")
const root = createRoot(container)
root.render(
  <React.StrictMode>
    <Provider store={store}>
<BrowserRouter>
<App/>
</BrowserRouter>
    </Provider>
  </React.StrictMode>
)



//  const router = createBrowserRouter([
//   {
//     path:'/',
//     element: <App/>,
//     children: [
//       {
//         path:'/',
//         element:<Home/>
//       }, 
//       {
        
//         path:"/signIn",
//         element:<SignIn/>
//       },
      
//       {
//         path:"/user",
//         element:<User/>
//       }, 
//       {
//         path:'*',
//         element:<Error/>
//       }
//     ]
//   }
//  ])
// // console.log(router)
// ReactDOM.createRoot(document.getElementById('root')).render(
// <Provider store={store}>
//   <React.StrictMode>
//    <RouterProvider router={router}/>
//   </React.StrictMode>
//   </Provider>
// )
  