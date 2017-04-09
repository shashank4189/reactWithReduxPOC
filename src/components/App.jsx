import React ,{Component} from 'react';
import UserList  from '../pageMediator/userMediator.jsx';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import withWidth, {LARGE, SMALL} from 'material-ui/utils/withWidth';
import ThemeDefault from '../multiTheme/theme.jsx';
import Header from './header.jsx';
import LeftDrawer from './leftDrawer.jsx';
import Dashboard from '../pageMediator/dashboardMediator.jsx';



export default class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      navDrawerOpen: false
    };
  }

  componentWillReceiveProps(nextProps){
    if(this.props.width !== nextProps.width){
     this.setState({navDrawerOpen: nextProps.width === LARGE});
    }

  }

  componentWillMount(){
      this.props.fetchModules();
  }

  handleChangeRequestNavDrawer(){
    this.setState({
      navDrawerOpen: !this.state.navDrawerOpen
    });
  }

  render() {
    let {navDrawerOpen}  =this.state;
    const paddingLeftDrawerOpen = 236;
    const styles = {
      header: {
        paddingLeft: navDrawerOpen ? paddingLeftDrawerOpen : 0
      },
      container: {
        margin: '80px 20px 20px 15px',
        paddingLeft: navDrawerOpen && this.props.width !== SMALL ? paddingLeftDrawerOpen : 0
      }
    };
    return (
      <MuiThemeProvider muiTheme={ThemeDefault}>
        <div>
      <Header styles={styles.header}
          handleChangeRequestNavDrawer={this.handleChangeRequestNavDrawer.bind(this)} />
          <LeftDrawer menus={this.props.modules} navDrawerOpen={navDrawerOpen}  />

          <div style={styles.container}>
            {this.props.children}

          </div>
        </div>
      </MuiThemeProvider>
    )
  }
}