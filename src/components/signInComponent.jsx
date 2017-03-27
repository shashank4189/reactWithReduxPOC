import React ,{ Component,PropTypes } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
//import Checkbox from 'material-ui/Checkbox';
import {grey500, white} from 'material-ui/styles/colors';
import PersonAdd from 'material-ui/svg-icons/social/person-add';
import Help from 'material-ui/svg-icons/action/help';
import {Link} from 'react-router';
/*import ThemeDefault from '../theme-default';*/
/*import {onLogin,onLoginFailure,onLoginSuccess} from '../actions/login.jsx';*/
import { reduxForm, Field, SubmissionError } from 'redux-form/immutable';
import {blue600, grey900,yellow900} from 'material-ui/styles/colors';
/*import { renderTextField }   from '../common/renderTextField.jsx';*/
import TextField from 'material-ui/TextField';


export const renderTextField = ({input, label, meta: {touched, error}, ...custom}) => (
  <TextField hintText={label} floatingLabelText={label} errorText={touched && error}
             {...input}
             {...custom}
  />)

renderTextField.propTypes = {
  input: PropTypes.object,
  label: PropTypes.string.isRequired,
  meta: PropTypes.object,
}
const themeDefault = getMuiTheme({
  palette: {
  },
  appBar: {
    height: 57,
    color: blue600
  },
  drawer: {
    width: 230,
    color: grey900
  },
  raisedButton: {
    primaryColor: blue600,
  }
});
const styles = {
  loginContainer: {
    minWidth: 320,
    maxWidth: 400,
    height: 'auto',
    position: 'absolute',
    top: '20%',
    left: 0,
    right: 0,
    margin: 'auto'
  },
  paper: {
    padding: 20,
    overflow: 'auto'
  },
  buttonsDiv: {
    textAlign: 'center',
    padding: 10
  },
  flatButton: {
    color: grey500
  },
  checkRemember: {
    style: {
      float: 'left',
      maxWidth: 180,
      paddingTop: 5
    },
    labelStyle: {
      color: grey500
    },
    iconStyle: {
      color: grey500,
      borderColor: grey500,
      fill: grey500
    }
  },
  loginBtn: {
    float: 'right'
  },
  btn: {
    background: '#4f81e9',
    color: white,
    padding: 7,
    borderRadius: 2,
    margin: 2,
    fontSize: 13
  },
  btnFacebook: {
    background: '#4f81e9'
  },
  btnGoogle: {
    background: '#e14441'
  },
  btnSpan: {
    marginLeft: 5
  },
};

const validate = values => {
  const errors = {}
  const requiredFields = [ 'username', 'password']
  requiredFields.forEach(field => {
    if (!values[ field ]) {
      errors[ field ] = 'Required'
    }
  })
  return errors
}

const validateAndSignInUser=(values, dispatch)=> {
  return dispatch(onLogin(values))
    .then((result) => {
      if (result.value.data.Status !== "success") {
        dispatch(onLoginFailure(result.payload.data));
        throw new SubmissionError(result.payload.data);
      }
      localStorage.setItem('jwtToken', result.value.data.token);
      dispatch(onLoginSuccess(result.value.data.objdata));
    });
};

class signIn extends Component {
  static contextTypes = {
    router: PropTypes.object
  };

  componentWillReceiveProps(nextProps) {
    if (nextProps.user.status === 'authenticated' && !nextProps.user.error) {
      this.context.router.push('/');
    }
    if (nextProps.user.status === 'signin' && !nextProps.user.user && nextProps.user.error && !this.props.user.error) {
      alert(nextProps.user.error.message);
    }
  }

  render() {
    const {asyncValidating, handleSubmit, submitting} = this.props;
    return (
      <MuiThemeProvider muiTheme={themeDefault}>
        <div>
          <div style={styles.loginContainer}>
            <Paper style={styles.paper}>
              <form onSubmit={ handleSubmit(validateAndSignInUser) }>
                <div>
              <Field name="username" type="text" label="User Name" component={renderTextField} />
                  <Field name="password" type="password" label="Password"  component={renderTextField}/>
                </div>
                <div>
                  <RaisedButton label="Login" primary={true} style={styles.loginBtn} disabled={submitting} type="submit" />
                </div>
              </form>
            </Paper>
            <div style={styles.buttonsDiv}>
              <FlatButton
                label="Register"
                href="/"
                style={styles.flatButton}
                icon={<PersonAdd />}
              />

              <FlatButton
                label="Forgot Password?"
                href="/"
                style={styles.flatButton}
                icon={<Help />}
              />
            </div>

            <div style={styles.buttonsDiv}>
              <Link to="/" style={{...styles.btn, ...styles.btnFacebook}}>
                <i className="fa fa-facebook fa-lg"/>
                <span style={styles.btnSpan}>Log in with Facebook</span>
              </Link>
              <Link to="/" style={{...styles.btn, ...styles.btnGoogle}}>
                <i className="fa fa-google-plus fa-lg"/>
                <span style={styles.btnSpan}>Log in with Google</span>
              </Link>
            </div>
          </div>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default  reduxForm({
  form: 'signIn',
  validate
})(signIn)


