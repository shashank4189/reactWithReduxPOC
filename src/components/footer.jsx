import React from 'react';
import {ReactDom} from 'react-dom';

export default class footer extends React.Component{
  constructor(props){
    super(props);
    this.state = {date: new Date()};
  }

  componentDidMount(){
    this.timerID = setInterval(
      ()=> this.tick(),1000)
  }

  componentWillUnmount(){
    clearInteval(this.timerID);

  }
   tick(){
    this.setState({date:new Date()})
   }
  render(){
     if(this.props.isLogIn) {
       return (
         <h3>@copyright {this.props.name} 2017-18 {this.state.date.toLocaleString()}</h3>
       )
     }
     else{
       return (
         <h3>@copyright Guest Login 2017-18 {this.state.date.toLocaleString()}</h3>
       )
     }
  }

}




