import React from 'react';
import {ReactDom} from 'react-dom';

export default class toDo extends React.Component{
  render() {
    let todo = this.props.todo;
    if (todo.isDone) {
     return (<strike>{todo.text}</strike>);
    } else {
      return (<span>{todo.text}</span>);
    }
  }


}



