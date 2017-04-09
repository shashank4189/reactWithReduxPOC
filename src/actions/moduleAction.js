/**
 * Created by root on 8/4/17.
 */
import axios  from 'axios';
import appConfig from 'app/appConfig';

export const FETCH_MODULES ='FETCH_MODULES';
export const FETCH_MODULES_SUCCESS ='FETCH_MODULES_SUCCESS';
export const FETCH_MODULES_FAILURE ='FETCH_MODULES_FAILURE';

export function fetchModules(){
    const response = axios({
      url:`${appConfig.apiUrl}/getModules`,
      method:'GET',
      headers:[]

  });
    return {
      type:FETCH_MODULES ,
      payload:response
    }
}

export function fetchModulesSuccess(modules){
    return{
        type:FETCH_MODULES_SUCCESS,
        payload:modules
    }
}

export function fetchModulesFailure(error){
    return{
        type:FETCH_MODULES_FAILURE,
        payload:error
    }
}
