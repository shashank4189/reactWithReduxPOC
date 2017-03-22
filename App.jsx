import React ,{Component} from 'react';
import Header from './src/components/header.jsx';
import Footer from './src/components/footer.jsx';
import LogInButton from './src/components/loginButton.jsx';
import LogOut from './src/components/logOut.jsx';
import {createStore} from 'redux';
import TodoList  from './src/components/toDoList.jsx';
import dummyData  from './src/data/dummyData.js';
import UserList  from './src/containers/userContainer';




export default class App extends Component {

  render() {
    return (
      <div>
        <h3>User List</h3>
        <hr />
        <h1>User Details</h1>
        <UserList />
      </div>
    )
  }
}