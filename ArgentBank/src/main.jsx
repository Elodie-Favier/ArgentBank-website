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

