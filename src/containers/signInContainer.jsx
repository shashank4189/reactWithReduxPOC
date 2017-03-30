

import React, {Component}   from 'react';
import {connect} from 'react-redux';
import SignComp from '../components/signInComponent.jsx';


function mapStateToProps(state){
  signIn:state.signIn;
}


function mapDispatchToProps(){
  return {
    onInitialState:()=>{

  }
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(SignComp);
