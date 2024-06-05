import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'antd/dist/antd.css';
import './assets/css/app.css';
import "react-datepicker/dist/react-datepicker.css";
import '../node_modules/font-awesome/css/font-awesome.min.css'; 
import './assets/css/fontawesome.min.css';
import './assets/css/lnr-icon.css';
// import './assets/js/script.js';
// //style


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

