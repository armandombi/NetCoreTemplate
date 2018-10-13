import React from 'react';
import ReactDOM from 'react-dom';
import Message from './components/Message';
import jquery from 'jquery';
import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import 'bootstrap/dist/css/bootstrap.min.css';
import './app.css';
ReactDOM.render(
   <Message />,
   document.getElementById('root')
);
module.hot.accept();