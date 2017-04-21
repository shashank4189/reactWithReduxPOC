/**
 * Created by root on 13/4/17.
 */

import {FETCH_PROJECT,FETCH_PROJECT_SUCCESS,FETCH_PROJECT_FAILURE
         , FETCH_PROJECT_TYPE,FETCH_PROJECT_TYPE_FAILURE,FETCH_PROJECT_TYPE_SUCCESS,ADD_PROJECT
         , ADD_PROJECT_FAILURE,ADD_PROJECT_SUCCESS,SEARCH_PROJECT,SEARCH_PROJECT_SUCCESS,
          SEARCH_PROJECT_FAILURE  } from  '../actions/projectAction.jsx'


const INITIAL_STATE ={projectTypes:[],projectList:[],projects:[],error:null,loading:false}

export default function(state=INITIAL_STATE, action){
    switch(action.type){
        case FETCH_PROJECT:
            return {...state, projects:[],error:null,loading:true};
        case FETCH_PROJECT_SUCCESS:
            return {...state, projects:action.payload,error:null,loading:false};
        case FETCH_PROJECT_FAILURE:
            return {...state, projects:[],error:null,loading:false};
        case FETCH_PROJECT_TYPE:
            return {...state, projectTypes:[],projectList: [],error:null,loading:true};
        case FETCH_PROJECT_TYPE_SUCCESS:
            return {...state, projectTypes:action.payload,projectList: [],error:null,loading:false};
        case FETCH_PROJECT_TYPE_FAILURE:
            return {...state, projectTypes:[],projectList:[],error:null,loading:false};
        case ADD_PROJECT:
            return {...state, success:null,error:null,loading:null};
        case ADD_PROJECT_SUCCESS:
            return {...state, success:action.payload,error:null,loading:null};
        case ADD_PROJECT_FAILURE:
            return {...state, success:null,error:null,loading:null};
        case SEARCH_PROJECT:
            return {...state, projects:[],error:null,loading:true};
        case SEARCH_PROJECT_SUCCESS:
            return {...state, projects:action.payload,error:null,loading:true};
        case SEARCH_PROJECT_FAILURE:
            return {...state, projects:[],error:null,loading:true};
        default:
            return state;


    }

}


