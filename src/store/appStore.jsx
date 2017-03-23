/**
 * Created by shashank on 23/3/17.
 */


import {applyMiddleware,createStore} from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import promise from 'redux-promise-middleware';
import combinedReducer from '../reducers/combinedReducer.js';

const middleware=applyMiddleware(promise(),thunk,logger());

export  function configureStore() {
  const store = createStore(
    combinedReducer,
    middleware
  );
  return store;
}