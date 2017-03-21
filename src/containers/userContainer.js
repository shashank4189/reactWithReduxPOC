/**
 * Created by Shashank on 3/21/2017.
 */
import React,{Component} from 'react';
import {bindActionCreators} from 'redux';
import {  connect } from 'react-redux';

 class UserList extends Component{
   createUserItem(){
    return this.props.users.map((user)=>{
      return(
        <li>{user.first} </li>
      )
     })
   }

  render(){
    return(
      <ul>
        {this.createUserItem()}
      </ul>
    )
  }
}

function mapStateToProps(state){
  return {
    users:state.users
  };
}

export default connect(mapStateToProps)(UserList);
