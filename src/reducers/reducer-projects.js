/**
 * Created by root on 13/4/17.
 */

import {FETCH_PROJECT,FETCH_PROJECT_SUCCESS,FETCH_PROJECT_FAILURE
         , FETCH_PROJECT_TYPE,FETCH_PROJECT_TYPE_FAILURE,FETCH_PROJECT_TYPE_SUCCESS,ADD_PROJECT
         , ADD_PROJECT_FAILURE,ADD_PROJECT_SUCCESS} from  '../actions/projectAction.jsx'


const INITIAL_STATE ={projectTypes:[],projectList:[],error:null,loading:false}

export default function(state=INITIAL_STATE, action){
    switch(action.type){
        case FETCH_PROJECT:
            return;
        case FETCH_PROJECT_SUCCESS:
            return;
        case FETCH_PROJECT_FAILURE:
            return;
        case FETCH_PROJECT_TYPE:
            return {...state, projectTypes:[],projectList: [],error:null,loading:true};
        case FETCH_PROJECT_TYPE_SUCCESS:
            return {...state, projectTypes:action.payload,projectList: [],error:null,loading:false};
        case FETCH_PROJECT_TYPE_FAILURE:
            return {...state, projectTypes:[],projectList:[],error:null,loading:false};
        case ADD_PROJECT:
            return;
        case ADD_PROJECT_SUCCESS:
            return;
        case ADD_PROJECT_FAILURE:
            return;
        default:
            return state;


    }

}


