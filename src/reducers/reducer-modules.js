/**
 * Created by root on 9/4/17.
 */

import {FETCH_MODULES,FETCH_MODULES_SUCCESS,FETCH_MODULES_FAILURE} from '../actions/moduleAction';

const initialState ={
  modules:[],error:null,loading:null
};

export default function (state= initialState , action){
    switch (action.type){
        case FETCH_MODULES:
          return {...state,modules:[],error:null,loading:true   }

        case FETCH_MODULES_SUCCESS:
          return {...state,modules:action.payload,error:null,loading:false   }

        case FETCH_MODULES_FAILURE:
          return {...state,modules:[],error:null,loading:false   }
        default:
            return state;
    }

}
