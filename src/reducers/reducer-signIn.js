/**
 * Created by shashank on 30/3/17.
 */

import {ON_INITIAL,ON_LOGIN,ON_LOGIN_FAILURE,ON_LOGIN_SUCCESS,RESET_LOGIN}   from '../actions/signInAction' ;

const initialState = {user:null,status:null,error:null};

export default  function(state =initialState ,action){
  let error;
  switch(action.type){
    case ON_INITIAL:
      return {...state, user:null,status:null,error:null};
    case ON_LOGIN:
      return {...state,user:null,status:'signin',error:null};

    case ON_LOGIN_SUCCESS:
      console.log('Reducer ON_LOGIN_SUCCESS',action);
      return {...state,user:action.payload,status:'authenticated',error:null};

    case ON_LOGIN_FAILURE:
      error = action.payload.data || {message: action.payload.message};
      return {...state,user:null,status:'signin',error:error};
    default:
      return state;
  }
}

