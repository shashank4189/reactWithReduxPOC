/**
 * Created by shashank on 30/3/17.
 */

export const ON_INITIAL = 'ON_INITIAL' ;
export const ON_LOGIN = 'ON_LOGIN' ;
export const ON_LOGIN_FAILURE = 'ON_LOGIN_FAILURE' ;
export const ON_LOGIN_SUCCESS = 'ON_LOGIN_SUCCESS' ;
export const RESET_LOGIN = 'RESET_LOGIN' ;


export function onInitial(){
  return {
    type:ON_INITIAL
  };
}

export function onLogin(data){
  let finalData ={};
  let deferred = new Promise(function(resolve, reject){
    if(data.length>0){
      finalData.Status ='Success';
      finalData.data =data[0];
      resolve(finalData);
    }else{
      finalData.Status ='UnAuthorized';
      finalData.data =data[0];
      resolve(finalData);
    }
  });

  return {
    type: ON_LOGIN,
    payload: deferred
  };
}

export function onLoginFailure(data){
  return {
    type: ON_LOGIN_FAILURE,
    payload: data
  };
}

export function onLoginSuccess(data){
  return {
    type: ON_LOGIN_SUCCESS,
    payload: data
  };
}