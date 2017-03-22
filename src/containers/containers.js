/**
 * Created by Shashank on 3/19/2017.
 */
import {connect} from 'react-redux';
import  * as todoListComp from  '../components/toDoList';
import  {addTodo, toggleTodo} from  '../actions/actions.js';

export const TodoList = connect(
function mapStateToProps(state){
  return {todos :state};
},

function mapDispatchToProps(dispatch){
addTodo: text => dispatch(addTodo(text));
toggleTodo: id => dispatch(toggleTodo(id));
}

)(todoListComp);