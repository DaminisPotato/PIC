import React, {Component} from 'react';
import Toolbar from '../../Components/Toolbar/Toolbar';
import classes from './Layout.module.css';
import {withRouter} from 'react-router-dom';
import {Layout} from 'antd';
import Logo from '../../Components/Logo/Logo'

const { Header, Content } = Layout;

/*
  Main container of this website.
  Using state to control the login and logout UI.
 */

class CustomizedLayout extends Component{
  state ={
    login: false
  }
  UNSAFE_componentWillMount(){
    const token = localStorage.Token
    if (token){
      var username = localStorage.Username;
      this.setState({login: username})
    }
  }
  logOutHandler = () => {
    localStorage.removeItem("Token");
    localStorage.removeItem("Username")
    localStorage.removeItem("UserID")
    this.setState({login:false});
    this.props.history.go(0);
  }
  loginHandler = () => {
    this.setState({login: true})
    this.props.history.go(0);
  }
  render() {
    return(
      <Layout className={classes.Layout}>
        <Header className={classes.Header} theme="light">
          <Logo/>
          <Toolbar loginState={this.state.login} 
                  logout={this.logOutHandler} 
                  login={this.loginHandler}/>
        </Header>
        <Content className={classes.Content}>
          {this.props.children}
        </Content>
      </Layout>
    )
  }
}

export default withRouter(CustomizedLayout);
