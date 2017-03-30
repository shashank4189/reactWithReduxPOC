/**
 * Created by Shashank on 3/21/2017.
 */

import {combineReducers}    from 'redux'
import signinReducer  from '../reducers/reducer-signIn'
import userReducer  from '../reducers/reducer-user'
import dashboardReducer  from '../reducers/reducer-dashboard'
import { reducer as formReducer}  from 'redux-form'

const allReducer = combineReducers({
  users:userReducer,
  signIn:signinReducer,
  dashboard:dashboardReducer,
  form:formReducer

});


export default allReducer;