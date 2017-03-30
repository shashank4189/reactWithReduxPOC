import React ,{Component} from 'react';
import UserList  from './src/pageMediator/userMediator.jsx';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import ThemeDefault from './src/multiTheme/theme.jsx';
import Header from './src/components/header.jsx';
import LeftDrawer from './src/components/leftDrawer.jsx';



export default class App extends Component {
  handleChangeRequestNavDrawer(){
    this.setState({
      navDrawerOpen: !this.state.navDrawerOpen
    });
  }

  render() {
    let navDrawerOpen  =true //this.state;
    const paddingLeftDrawerOpen = 236;
    const styles = {
      header: {
        paddingLeft: navDrawerOpen ? paddingLeftDrawerOpen : 0
      },
      container: {
        margin: '80px 20px 20px 15px'//,
        //paddingLeft: navDrawerOpen && this.props.width !== SMALL ? paddingLeftDrawerOpen : 0
      }
    };
    return (
      /*<MuiThemeProvider muiTheme={ThemeDefault}>
        <div>
        {this.props.children}
        <h3>User List</h3>
        <hr />
        <h1>User Details</h1>
        <UserList />
      </div>
      </MuiThemeProvider>*/
      <MuiThemeProvider muiTheme={ThemeDefault}>
        <div>
         <Header styles={styles.header}
                  handleChangeRequestNavDrawer={this.handleChangeRequestNavDrawer.bind(this)}/>
          <LeftDrawer menus={modules} navDrawerOpen={navDrawerOpen}  />
          <div style={styles.container}>
            {this.props.children}
          </div>
        </div>
      </MuiThemeProvider>
    )
  }
}