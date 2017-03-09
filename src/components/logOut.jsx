
import  React from 'react';


export default class logOut extends React.Component{

  render(){
    return (
      <button onClick={this.props.onClick}>
        Log Out
      </button>
    )
  }

}
