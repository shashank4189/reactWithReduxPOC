/**
 * Created by Shashank on 3/19/2017.
 */

import {List, Map} from 'immutable';

const init = List(Map([]));

export default function(todos =init, action){
  switch(action.type){
    case 'ADD_TODO':
     return todos.push(Map(action.payload));
    case 'TOGGLE_TODO':
     return todos.map(t=>{
       if(t.get('id')==action.payload){
         return t.update('isDone',isDone=> !isDone)
       }else {
         t;
       }
     })
    default:
      return todos;
  }
}
