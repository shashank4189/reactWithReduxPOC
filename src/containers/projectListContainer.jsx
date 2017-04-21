import {connect} from  'react-redux';
import projectListComp from '../components/projectList.jsx';
import {fetchProject,fetchProjectSuccess,fetchProjectFailure} from '../actions/projectAction.jsx';



const mapStateToProps =(state)=> {
    return {
        projectList:state.projects,
        //newProject:state.projects,
    }
}

const mapDispatchToProps = (dispatch)=>{
    return {
        fetchProjectList: () => {
            dispatch(fetchProject())
                .then((response) => {
                        !response.error ? dispatch(fetchProjectSuccess(response.value.data)) : dispatch(fetchProjectFailure(response.payload.data))
                    }
                )
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(projectListComp);