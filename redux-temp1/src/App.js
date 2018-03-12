import React, { Component } from 'react';
import './App.css';
import {BrowserRouter,Route,Redirect} from 'react-router-dom';
import { connect} from 'react-redux';
import Login from './components/login';
import Home from './components/home';
import task from './components/task';
import form from './components/form';
import display from './components/display';

class App extends Component {
  render() {

    const PrivateRoute=({component:Component,...rest})=>{
      return (
        <Route {...rest} render={(routeProps)=>(
            this.props.users ?
            <Component {...routeProps}/>:<Redirect to='/login'/>)}/>

      )
    };

      const PublicRoute=({component:Component,...rest})=>{
          return (
              <Route {...rest} render={(routeProps)=>(
                  ! this.props.users ?
                  <Component {...routeProps}/>:
                      <Redirect to="/"/>
              )}/>
          )
      };
    return (
        <BrowserRouter>
              <div className="App">
                  <PrivateRoute exact path="/" component={Home}/>
                  <PrivateRoute exact path="/task" component={task}/>
                  <PrivateRoute exact path="/form" component={form}/>
                  <PrivateRoute exact path="/display" component={display}/>
                  <PublicRoute path="/login" component={Login}/>
              </div>
        </BrowserRouter>
    );
  }
}

const mapStateToProps=(state)=>{return{
    users:state.auth.user
}};

export default connect(mapStateToProps,null)(App);
