/**
 * Created by Shashank on 3/21/2017.
 */
import React,{Component} from 'react';
import { connect } from 'react-redux';
import {deleteUser, getUser}  from '../actions/userAction';
import UserList from '../components/userComponent.jsx';





function mapStateToProps(state){
  console.log('mapStateToProps',state);
  return {
    users:state.users.users
  };
}

function mapDispatchToProps(dispatch){
  return {
    getUserList:(data)=> {
    dispatch(getUser(data))
    },
    deleteUser:(data)=> {
      dispatch(deleteUser(data))
    }
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(UserList);
