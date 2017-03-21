/**
 * Created by shashank on 2/3/17.
 */

import React from 'react';
import rend1 from 'react-dom';
import App from './App.jsx';
import {createStore} from 'redux';
import { Provider } from 'react-redux';
import reducer from './src/reducers/combinedReducer.js';

const store = createStore(reducer);


  rend1.render(
    <Provider state={store} >
    <App  />
    </Provider>
      , document.getElementById('mainApp'));

/*
import Header from './src/components/header.jsx';
import Footer from './src/components/footer.jsx';
import LogOut from './src/components/logOut.jsx';
import LogIn from './src/components/loginButton.jsx';
import { Router, Route, Link, IndexRoute, hashHistory, browserHistory } from 'react-router'


rend.render((
    <Router history ={hashHistory}>
      <Route path="/" component={App}>
        <IndexRoute component = {Header} />
        <Route path="/footer" component={Footer} />
        <Route path="/logOut" component={LogOut} />
        <Route path="/logIn" component={LogIn} />
      </Route>
      </Router>
    ), document.getElementById('mainApp'));


*/

