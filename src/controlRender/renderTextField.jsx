
import React ,{ PropTypes } from 'react';
import TextField from 'material-ui/TextField';


export const renderTextField = props => (
  <TextField hintText={props.label}
             floatingLabelText={props.label}
             errorText={props.touched && props.error}
             {...props}
  />
)

renderTextField.propTypes = {
  input: PropTypes.object,
  label: PropTypes.string.isRequired,
  meta: PropTypes.object,
}


