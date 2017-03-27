import React ,{Component} from 'react';
import UserList  from './src/pageMediator/userMediator.jsx';




export default class App extends Component {

  render() {
    return (
      <div>
        {this.props.children}
        <h3>User List</h3>
        <hr />
        <h1>User Details</h1>
        <UserList />
      </div>
    )
  }
}