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

