/**
 * Created by Shashank on 3/19/2017.
 */


const uid =()=> Math.random().toString(34).slice(2);

export function addTodo(text){
  return {
    type:'ADD_TODO',
    payload:{
      id:uid(),
      text:text,
      isDone:false
    }
  }
}

export function toggleTodo(id){
  return{
    type: 'TOGGLE_TODO',
    payload:id
  }
}