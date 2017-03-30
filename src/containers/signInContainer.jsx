

import {connect} from 'react-redux';
import SignComp from '../components/signInComponent.jsx';


function mapStateToProps(state){
  return {
    signIn:state.signIn
  };
}


function mapDispatchToProps(){
  return {
    onInitialState:()=>{

  }
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(SignComp);
