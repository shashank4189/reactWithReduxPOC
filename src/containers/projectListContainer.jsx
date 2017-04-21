import {connect} from  'react-redux';
import projectListComp from '../components/projectList.jsx';
import {fetchProject,fetchProjectSuccess,fetchProjectFailure,
    fetchProjectType,fetchProjectTypeSuccess,fetchProjectTypeFailure} from '../actions/projectAction.jsx';



const mapStateToProps =(state)=> {
    return {
        projectList:state.projects,
        projectTypeList:state.projects
    }
}

const mapDispatchToProps = (dispatch)=>{
    return {
        fetchProjectList: (aTableInfo) => {
            dispatch(fetchProject(aTableInfo))
                .then((response) => {
                        !response.error ? dispatch(fetchProjectSuccess(response.value.data)) : dispatch(fetchProjectFailure(response.payload.data))
                    }
                )
        },
        fetchProjectType: () => {
            dispatch(fetchProjectType())
                .then((response) => {
                        !response.error ? dispatch(fetchProjectTypeSuccess(response.value.data)) : dispatch(fetchProjectTypeFailure(response.payload.data))
                    }
                )
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(projectListComp);