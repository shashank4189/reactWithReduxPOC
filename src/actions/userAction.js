/**
 * Created by shashank on 18/3/17.
 */

export function deleteUser(data){
  console.log('ACTION_DELETE_USER',data);
  return{ type: 'DELETE_USER',
    payload:data
  };
}

export function getUser(data){
  console.log(data);
  return{ type: 'GET_USER',
   payload:data
 };
}