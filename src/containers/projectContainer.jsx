import {connect} from 'react-redux'
import newProjectComp from '../components/newProject.jsx';
import {fetchProjectType,fetchProjectTypeSuccess,fetchProjectTypeFailure} from '../actions/projectAction.jsx';


const mapStateToProps =(state)=> {
    return {
      projectTypeList:state.projects,
      //newProject:state.projects,
    }
}

const mapDispatchToProps = (dispatch)=>{
    return {
        fetchProjectType: () => {
            dispatch(fetchProjectType())
                .then((response) => {
                        !response.error ? dispatch(fetchProjectTypeSuccess(response.value.data)) : dispatch(fetchProjectTypeFailure(response.payload.data))
                    }
                )
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(newProjectComp);