import React ,{Component} from 'react';
import Header from './src/components/header.jsx';
import Footer from './src/components/footer.jsx';
import LogInButton from './src/components/loginButton.jsx';
import LogOut from './src/components/logOut.jsx';


export default class App extends Component{
  constructor(props){
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
  }


  render(){
    const isLogIn = this.state.isLoggedIn;
    const temperature = this.state.temperature;
    let button =null;
    if(isLogIn){
      button= <LogOut onClick={this.handleLogOutEvent}/>
    }else{
      button=<LogInButton onClick={this.handleLogInEvent} />
    }
    return (
      <form onSubmit={this.handleSubmitEvent}>
      <div>
       <Header />

        <div>
        hello this is my first React.
        </div>
        { button}
        <input type="text" value ={this.state.value} onChange={this.handleOnChnageEvent} />
     <button type="submit"> Clieck here</button>
        <br></br>
        <fieldset>
          <legend>Check Water can be boiled in Temperature  </legend>
          <input type ="text" onChange={this.handleWaterTemperature}
             value={this.state.temperature} />
        </fieldset>
        <BoilingVerdict
          celsius={parseFloat(temperature)} />
          <Footer name="Shashank Barnawal" isLogIn ={true}  />
      </div>
      </form>
    )
  }
}


class BoilingVerdict extends Component{

render(){
  if (this.props.celsius >= 100) {
    return <p>The water would boil.</p>;
  }
  return <p>The water would not boil.</p>;
}
}


