/**
 * Created by Shashank on 3/21/2017.
 */
const initialState ={users:[], error:null};
export default function(state= initialState, action){

  switch(action.type){
    case 'DELETE_USER':
      return { ...state, users: action.payload, error:null};

    case 'GET_USER':
      return { ...state, users: action.payload, error:null};
    default:
      return state;
  }
}