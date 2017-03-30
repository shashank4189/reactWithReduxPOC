/**
 * Created by shashank on 2/3/17.
 */

import React from 'react';
import rend1 from 'react-dom';
import App from '../App.jsx';
import { Provider } from 'react-redux';
import {configureStore} from './store/appStore.jsx';
import { Router, Route, Link, IndexRoute, hashHistory, browserHistory } from 'react-router'
import SignIn from './pageMediator/signInMediator.jsx';
import Dashboard from './pageMediator/dashboardMediator.jsx';
import injectTapEventPlugin from 'react-tap-event-plugin';

import Footer from '../src/components/footer.jsx';
/*import LogOut from '../src/components/logOut.jsx';
import LogIn from '../src/components/loginButton.jsx';
*/
injectTapEventPlugin();
const store =configureStore();

  rend1.render(
    <Provider store={store} >
      <Router history ={hashHistory}>
        <Route path="/signIn" component={SignIn} />
        <Route path="/" component={App}>
          <IndexRoute component = {Dashboard} />
         {/* <Route path="/footer" component={Footer} />
          <Route path="/logOut" component={LogOut} />
          <Route path="/logIn" component={LogIn} />*/}
        </Route>
      </Router>
    </Provider>
    , document.getElementById('mainApp'));


