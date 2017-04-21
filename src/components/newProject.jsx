import React, {Component, PropTypes} from 'react';
import {Link} from 'react-router';
import RaisedButton from 'material-ui/RaisedButton';
import MenuItem from 'material-ui/MenuItem';
import {grey400,deepOrange500,green700,red700} from 'material-ui/styles/colors';
import PageTitle from '../controlRender/pageTitle.jsx';
import { reduxForm, Field, SubmissionError } from 'redux-form';
import { renderTextField }   from '../controlRender/renderTextField.jsx';
import { renderSelectField } from '../controlRender/renderSelectField.jsx';
import {renderDateField} from '../controlRender/renderDateField.jsx';
import {addProject,addProjectSuccess,addProjectFailure} from '../actions/projectAction.jsx';
/*import ReactMaterialUiNotifications from '../controlRender/renderNotification.jsx';*/
import Done from 'material-ui/svg-icons/action/done';
import Close from 'material-ui/svg-icons/navigation/close';
import moment from 'moment'
/*import Alert from '../controlRender/renderAlert.jsx';*/
//import asyncValidation from '../common/asyncValidation.jsx';

const styles = {
    toggleDiv: {
        maxWidth: 300,
        marginTop: 40,
        marginBottom: 5
    },
    toggleLabel: {
        color: grey400,
        fontWeight: 100
    },
    buttons: {
        marginTop: 30,
        float: 'right'
    },
    saveButton: {
        marginLeft: 5
    }
};


const validate = values => {
    const errors = {}
    const requiredFields = [ 'ProjectName', 'ProjectType','Description']
    requiredFields.forEach(field => {
        if (!values[ field ]) {
            errors[ field ] = 'Required'
        }
    })
    return errors
}

class newProjects extends Component{

    /*static contextTypes ={
        router:PropTypes.Object
    }*/

    constructor(props){
        super(props);
    }

    validateAndSave(values,dispatch) {
        console.log('values',values);
        return dispatch(addProject(values)).
        then((response)=> {
            dispatch(addProjectSuccess(response.value.data.objdata))
        })
            .catch((error)=>{
                dispatch(addProjectFailure(error))
            })
    }

    componentWillMount(){
        this.props.fetchProjectType();
    }


    renderNotification(success){
        let props={
            alertType:'success',
            alertIcon:<Done />,
            iconColor:green700,
            alertMsg:success,
            title:"Success"
        };
        if(success){
            return(<Alert  {...props} />);
        }
    }

    renderError(error){
        let props={
            alertType:'error',
            alertIcon:<Close />,
            iconColor:red700,
            alertMsg:"Oops! a server error occured , please try again.",
            title:"Error"
        };
        if(error){
            return(<Alert  {...props} />);
        }
    }
    renderSource(source){
      return source.map((item)=>{
          return(
              <MenuItem key={item._id} value={item.ProjectType} primaryText={item.ProjectType}/>
          )
      })
    }

    render(){
        const {projectTypes} = this.props.projectTypeList;
        //const {success,error} = this.props.newProject;
        const {asyncValidating,handleSubmit,pristine, reset, submitting, invalid} = this.props;
        return(
         <PageTitle title="Add Project">
         <form onSubmit={handleSubmit(this.validateAndSave)}>
            {/* {this.renderNotification(success)}
             {this.renderError(error)}*/}
          <Field name="ProjectName" type="text" label="Project Title" fullWidth={true} component={renderTextField} />

          <Field name="Description" type="text" label="Description" fullWidth={true} component={renderTextField} />

             <Field name="ProjectType" label="Project Type" fullWidth={true} component={renderSelectField} >

                 {this.renderSource(projectTypes)}
            </Field>
             <Field name="StartDate" label="Start Date" fullWidth={true} component={renderDateField} />
             <Field name="EndDate" label="End Date" fullWidth={true} component={renderDateField} />

             <div style={styles.buttons}>
                 <Link to="/projects">
                     <RaisedButton label="Cancel"/>
                 </Link>
                 <RaisedButton  label="Save" style={styles.saveButton} disabled={ invalid ||submitting } type="submit" primary={true}/>
             </div>
             {/*<ReactMaterialUiNotifications />*/}
         </form>
         </PageTitle>

        )


    }


}

export default reduxForm({
    form:'NewProject',
    validate
})(newProjects);