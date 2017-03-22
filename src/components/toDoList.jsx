/**
 * Created by Shashank on 3/19/2017.
 */

import React from 'react';
import {ReactDom} from 'react-dom';
import  Todo  from '../components/toDo.jsx';

export default class toDo extends React.Component{
  render() {

    let  todos  = this.props.todos;
    console.log('todos',todos);
    return( <div className='todo'>
      <input type='text' placeholder='Add todo' />
      <ul className='todo__list'>
        {todos.map(t => (
          <li key={t.id} className='todo__item'>
          {  <Todo todo={t} />}
          </li>
        ))}
      </ul>
    </div>)
  }


}




