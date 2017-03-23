/**
 * Created by Shashank on 3/21/2017.
 */
import React,{Component} from 'react';
import {bindActionCreators} from 'redux';
import { connect } from 'react-redux';
import dummyData  from '../data/dummyData';
import _  from 'lodash';
import {deleteUser, getUser}  from '../actions/userAction';
import {configureStore} from '../store/appStore.jsx';

const store =configureStore();

 class UserList extends Component{
  constructor(props){
    super(props);
  }

   componentWillMount(){
     this.props.getUserList(dummyData.dummyTodos);
   }

   componentWillReceiveProps(nextProp){
     console.log('componentWillReceiveProps '+ JSON.stringify(nextProp));
  }

  deleteUserbyID(id){
   var data  = _.filter(this.props.users, function(currentObject) {
     return currentObject.id != id;
   });

    //store.dispatch(deleteUser(data));
    this.props.deleteUser(data);
    console.log( this.props.users);
  }
   createUserItem(users){
    return users.map((user)=>{
      return(
        <div key={user.id}>
        <li >{user.text} </li>
        <button type ="button"  onClick={this.deleteUserbyID.bind(this,user.id)}>delete</button>
        </div>
      )
     })
   }

  render(){
    return(
      <ul>
        {this.createUserItem(this.props.users)}
      </ul>
    )
  }
}

function mapStateToProps(state){
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
