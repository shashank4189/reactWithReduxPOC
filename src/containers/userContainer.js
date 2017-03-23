/**
 * Created by Shashank on 3/21/2017.
 */
import React,{Component} from 'react';
import {bindActionCreators} from 'redux';
import { connect } from 'react-redux';
import {createStore} from 'redux';
import reducer from '../reducers/combinedReducer';
import dummyData  from '../data/dummyData';
import _  from 'lodash';
import {deleteUser, getUser}  from '../actions/userAction';
const store = createStore(reducer);

 class UserList extends Component{
  constructor(props){
    super(props);
  }

   componentWillMount(){
     this.props.getUserList();
   }

  deleteUserbyID(id){
   var data  = _.filter(this.props.users, function(currentObject) {
     return currentObject.id != id;
   });
   console.log(data);
   debugger;
    store.dispatch(deleteUser(data));
  }
   createUserItem(){
    console.log('guu',this.props.users);
    return this.props.users.map((user)=>{
      return(
        <div>
        <li key={user.id}>{user.text} </li>
        <button type ="button"  onClick={this.deleteUserbyID.bind(this,user.id)}>delete</button>
        </div>
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

function mapDispatchToProps(dispatch){
  return {
    getUserList:()=> {
    dispatch(getUser(dummyData.dummyTodos))
    }
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(UserList);
