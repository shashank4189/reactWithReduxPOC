
import {connect}  from 'react-redux';
import appComp from '../components/App.jsx';
import {fetchModules,fetchModulesFailure,fetchModulesSuccess} from '../actions/moduleAction';


const mapStateToProps = (state)=>{
    console.log('state.modules',state.modules);
    return {
        modules: state.modules.modules
    }
}


const mapDispatchToProps = (dispatch)=>{
    return{
        fetchModules:()=>{
            dispatch(fetchModules())
              .then((response)=>{
                  !response.error?dispatch(fetchModulesSuccess(response.value.data)):dispatch(fetchModulesFailure(response.payload.data))
                  }

              )
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(appComp);