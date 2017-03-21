import React ,{Component} from 'react';
import Header from './src/components/header.jsx';
import Footer from './src/components/footer.jsx';
import LogInButton from './src/components/loginButton.jsx';
import LogOut from './src/components/logOut.jsx';
import {createStore} from 'redux';
import TodoList  from './src/components/toDoList.jsx';
import dummyData  from './src/data/dummyData.js';
import UserList  from './src/containers/userContainer';




export default class App extends Component{
/*  constructor(props){
    super(props);

    this.handleLogInEvent =  this.handleLogInEvent.bind(this);
    this.handleLogOutEvent =  this.handleLogOutEvent.bind(this);
    this.handleSubmitEvent =  this.handleSubmitEvent.bind(this);
    this.handleOnChnageEvent =  this.handleOnChnageEvent.bind(this);
    this.handleWaterTemperature = this.handleWaterTemperature.bind(this);
    this.state = {isLoggedIn:false};
    this.state = {value:''};
  }
  handleLogInEvent(){
    this.setState ({isLoggedIn:true});
  }

  handleLogOutEvent(){
    this.setState ({isLoggedIn:false});
  }
  handleSubmitEvent(event){
   alert('Hi typed data is' +this.state.value);
    event.preventDefault();
  }
  handleOnChnageEvent(event){
    this.setState ({value:event.target.value});
  }

  handleWaterTemperature(event){
    this.setState ({temperature:event.target.value});
  }*/


  render(){
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

