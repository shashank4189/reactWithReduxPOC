/**
 * Created by shashank on 18/3/17.
 */

export function deleteUser(data){
  return{ type: 'DELETE_USER',
    payload:data
  };
}

export function getUser(data){
  return{ type: 'GET_USER',
   payload:data
 };
}