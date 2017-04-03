/**
 * Created by shashank on 30/3/17.
 */


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

 /* if(data.length){
    deferred.resolve();
  }*/
  return {
    type: 'ON_LOGIN',
    payload: deferred
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