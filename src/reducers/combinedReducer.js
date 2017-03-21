/**
 * Created by Shashank on 3/21/2017.
 */

import {combineReducers}    from 'redux'
import userReducer  from '../reducers/reducer-user'


const allReducer = combineReducers({
  users:userReducer
});


export default allReducer;