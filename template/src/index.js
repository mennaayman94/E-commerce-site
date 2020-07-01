import React from 'react';
import  ReactDOM from 'react-dom';
import App from'./app.js';
import {BrowserRouter} from 'react-router-dom';
import "./css/bootstrap.min.css";
import"./css/font-awesome.min.css";
import "./css/themify-icons.css";
import"./css/elegant-icons.css";
import "./css/owl.carousel.min.css";
import "./css/nice-select.css";
import "./css/style.css";

import "./css/slicknav.min.css";

ReactDOM.render(
    <BrowserRouter><App/></BrowserRouter>
,document.querySelector('#root'))
