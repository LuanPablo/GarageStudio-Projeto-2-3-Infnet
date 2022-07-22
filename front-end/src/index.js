import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Assets/css/styles.css';
import 'react-toastify/dist/ReactToastify.css'
import { BrowserRouter } from 'react-router-dom';
import { GlobalStyle } from './Assets/global'
import { ToastContainer } from 'react-toastify';

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <BrowserRouter>
      <App />
    <ToastContainer />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);


