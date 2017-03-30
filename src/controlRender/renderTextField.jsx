
import React ,{ PropTypes } from 'react';
import TextField from 'material-ui/TextField';


/*export const renderTextField = props => (
  <TextField hintText={props.label}
             floatingLabelText={props.label}
              errorText={props.meta.touched && props.meta.error}
             {...props.input}
             {...props.custom}
  />
)*/


export const renderTextField = ({input, label, meta: {touched, error}, ...custom}) => (

  <TextField hintText={label} floatingLabelText={label} errorText={touched && error}
             {...input}
             {...custom}
  />
)
renderTextField.propTypes = {
  input: PropTypes.object,
  label: PropTypes.string.isRequired,
  meta: PropTypes.object,
}
