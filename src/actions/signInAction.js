/**
 * Created by shashank on 30/3/17.
 */


export function onLogin(data){
  let deferred = new Promise();
  if(data.length){
    deferred.resolve();
  }
  return {
    type: 'ON_LOGIN',
    payload: data
  };
}

export function onLoginFailure(data){
  return {
    type: 'ON_LOGIN_FAILURE',
    payload: data
  };
}

export function onLoginSuccess(data){
  return {
    type: 'ON_LOGIN_SUCCESS',
    payload: data
  };
}