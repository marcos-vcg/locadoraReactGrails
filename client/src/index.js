import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
//import 'bootstrap/dist/css/bootstrap.css';
//import './css/App.css';
//import './css/grails.css';
//import './css/main.css';
import {ConfigProvider} from "antd";
import ptBR from "antd/lib/locale/pt_BR";

import 'antd/dist/antd.css'
import {Provider} from "react-redux";
import store from "./store";
import history from "./services/history";
import {BrowserRouter, Router} from "react-router-dom";
import { ConnectedRouter } from "connected-react-router";


ReactDOM.render(

    <Provider store={store}>
        <BrowserRouter history={history}>
            <App />
        </BrowserRouter>
    </Provider>

    , document.getElementById('root')
);
