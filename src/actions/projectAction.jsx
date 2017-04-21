import axios  from 'axios';
import appConfig from 'app/appConfig';

export const FETCH_PROJECT = 'FETCH_PROJECT';
export const FETCH_PROJECT_SUCCESS= 'FETCH_PROJECT_SUCCESS';
export const FETCH_PROJECT_FAILURE= 'FETCH_PROJECT_FAILURE';
export const RESET_PROJECT= 'RESET_PROJECT';
export const ADD_PROJECT= 'ADD_PROJECT';
export const ADD_PROJECT_SUCCESS= 'ADD_PROJECT_SUCCESS';
export const ADD_PROJECT_FAILURE= 'ADD_PROJECT_FAILURE';
export const FETCH_PROJECT_TYPE = 'FETCH_PROJECT_TYPE';
export const FETCH_PROJECT_TYPE_SUCCESS= 'FETCH_PROJECT_TYPE_SUCCESS';
export const FETCH_PROJECT_TYPE_FAILURE= 'FETCH_PROJECT_TYPE_FAILURE';
export const SEARCH_PROJECT="SEARCH_PROJECT";
export const SEARCH_PROJECT_SUCCESS="SEARCH_PROJECT_SUCCESS";
export const SEARCH_PROJECT_FAILURE="SEARCH_PROJECT_FAILURE";

export function fetchProject(){
    const response = axios({
        url:`${appConfig.apiUrl}/getProjects`,
        method:'GET',
        headers:[]
    });
    return {
        type:FETCH_PROJECT ,
        payload:response
    }

}

export function fetchProjectSuccess(projects){
    return {
        type:FETCH_PROJECT_SUCCESS ,
        payload:projects
    }
}

export function fetchProjectFailure(error){
    return {
        type:FETCH_PROJECT_FAILURE ,
        payload:error
    }
}

export function addProject(projectData){
    const response = axios({
        url:`${appConfig.apiUrl}/projects/add`,
        method:'POST',
        data:projectData,
        headers:[]
    });
    return {
        type:ADD_PROJECT ,
        payload:response
    }

}

export function addProjectSuccess(projects){
    return {
        type:ADD_PROJECT_SUCCESS ,
        payload:projects
    }
}

export function addProjectFailure(error){
    return {
        type:ADD_PROJECT_FAILURE ,
        payload:error
    }
}


export function fetchProjectType(){
    const request=axios({
        url:`${appConfig.apiUrl}/projecttypes`,
        method:'GET',
        Headers:[]
    });
    return{
        type:FETCH_PROJECT_TYPE,
        payload:request
    }
}

export function fetchProjectTypeSuccess(projectTypes){
    return{
        type:FETCH_PROJECT_TYPE_SUCCESS,
        payload:projectTypes
    }
}

export function fetchProjectTypeFailure(error){
    return{
        type:FETCH_PROJECT_TYPE_FAILURE,
        payload:error
    }
}

export function searchProject(pageInfo) {
   /* pageInfo.CurPage=aTableInfo.CurPage;
    pageInfo.RPP=aTableInfo.RPP;*/
    const request=axios({
        url:`${appConfig.apiUrl}/search`,
        method:'POST',
        data:pageInfo,
        Headers:[]
    });
    return{
        type:SEARCH_PROJECT,
        payload:request
    }
}

export function searchProjectSuccess(projects) {
    return{
        type:SEARCH_PROJECT_SUCCESS,
        payload:projects
    }
}

export function searchProjectFailure(error) {
    return{
        type:SEARCH_PROJECT_FAILURE,
        payload:error
    }
}
