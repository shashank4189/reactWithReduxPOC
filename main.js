/**
 * Created by shashank on 2/3/17.
 */

import React from 'react';
import rend1 from 'react-dom';
import App from './App.jsx';
import {Router, IndexRoute,Link, Route, browserHistory} from 'react-router';

function tick() {
  //rend1.render(<App  />, document.getElementById('mainApp'));
  rend1.render((
    <Router history ={browserHistory}>
      <Route path="/" component={App}>
      <Route></Route>
      </Route>
    ), document.getElementById('mainApp'));
}

setInterval(tick,1000);
