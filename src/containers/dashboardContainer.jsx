

import {connect} from 'react-redux'
import  dashboardComp  from  '../components/dashboardComponent.jsx'



function mapStateToProps(state){
  return {
    dashboard: state.dashboard
}
}


function mapDispatchToProps(){
  return {
    onInitialState:()=>{

    }
  }
}


export default connect(mapStateToProps,mapDispatchToProps)(dashboardComp);