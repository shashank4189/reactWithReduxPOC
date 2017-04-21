import React ,{Component} from 'react';
import {ReactDom} from 'react-dom';
import dummyData  from '../data/dummyData';
import _  from 'lodash';
import {configureStore} from '../store/appStore.jsx';
import {deleteUser} from '../actions/userAction';

const store =configureStore();
class UserList extends Component {
  constructor(props){
    super(props);
  }

  componentWillMount(){
    this.props.getUserList(dummyData.dummyTodos);
  }

  componentWillReceiveProps(nextProp){
  }

  deleteUserbyID(id){
    var data  = _.filter(this.props.users, function(currentObject) {
      return currentObject.id != id;
    });

   // store.dispatch(deleteUser(data));
    this.props.deleteUser(data);
  }
  createUserItem(users){
    return users.map((user)=>{
      return(
        <div key={user.id}>
          <li >{user.text} </li>
          <input type="text"/>
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


export default UserList;