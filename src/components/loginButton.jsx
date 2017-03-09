
import React from 'react';



export default class loginButton extends React.Component{

  render(){
    return (
      <button onClick={this.props.onClick}>
        Log In
      </button>
    )
  }
}