/**
 * Created by shashank on 2/3/17.
 */

import React from 'react';
import rend1 from 'react-dom';
import App from './pageMediator/appMediator.jsx';
import { Provider } from 'react-redux';
import {configureStore} from './store/appStore.jsx';
import { Router, Route, Link, IndexRoute, hashHistory, browserHistory } from 'react-router';
import 'flexboxgrid/css/flexboxgrid.css';
import SignIn from './pageMediator/signInMediator.jsx';
import Dashboard from './pageMediator/dashboardMediator.jsx';
import injectTapEventPlugin from 'react-tap-event-plugin';
import NewProject from './pageMediator/newProjectMediator.jsx';
import ProjectList from './pageMediator/projectListMediator.jsx';
/*import NewProject from './pageMediator/newProjectMediator.jsx';*/
import LogOut from '../src/components/logOut.jsx';
import Footer from '../src/components/footer.jsx';
import SimpleScatterChart    from './components/react-Chart.jsx';
import ChartDemo1    from './components/chartDemo1.jsx';
import ChartDemo2   from './components/chartDemo2.jsx';
import chartDemo3   from './components/chartDemo3.jsx';

injectTapEventPlugin();
const store =configureStore();

  rend1.render(
    <Provider store={store} >
      <Router history ={hashHistory}>
        <Route path="/signIn" component={SignIn} />
        <Route path="/" component={App}>
          <IndexRoute component={Dashboard} />
          <Route path="/newproject" component={NewProject} />
          <Route path="/projects" component={ProjectList} />
          <Route path="/Chart" component={SimpleScatterChart} />
          <Route path="/ChartDemo1" component={ChartDemo1} />
          <Route path="/ChartDemo2" component={ChartDemo2} />
          <Route path="/ChartDemo3" component={chartDemo3} />
         {/* <Route path="/footer" component={Footer} />
          <Route path="/logOut" component={LogOut} />
          <Route path="/logIn" component={LogIn} />*/}
        </Route>
      </Router>
    </Provider>
    , document.getElementById('mainApp'));

