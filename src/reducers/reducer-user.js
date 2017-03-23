/**
 * Created by Shashank on 3/21/2017.
 */
const initialState =[];
export default function(state= initialState, action){

  switch(action.type){
    case 'DELETE_USER':
      console.log('ki',action.payload);
      return action.payload;

    case 'GET_USER':
      return action.payload;
    default:
      return state;
  }
}