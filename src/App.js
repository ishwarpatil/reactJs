import React, {Component} from 'react';
import './App.css';
import {BrowserRouter, Route, Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import Login from './component/login';
import Home from './component/users';

class App extends Component {
    render() {

        const PrivateRoute = ({component: Component, ...rest}) => {
            return (
                <Route {...rest} render={(routeProps) => (
                    this.props.users ?
                        <Component {...routeProps}/> : <Redirect to='/login'/>)}/>

            )
        };

        const PublicRoute = ({component: Component, ...rest}) => {
            return (
                <Route {...rest} render={(routeProps) => (
                    !this.props.users ?
                        <Component {...routeProps}/> :
                        this.props.users.message === 'Fail' ? <Component {...routeProps}/> : <Redirect to="/"/>
                )}/>
            )
        };

        return (
            <BrowserRouter>
                <div className="App">
                    <PublicRoute path="/login" component={Login}/>
                    <PrivateRoute exact path="/" component={Home}/>
                </div>
            </BrowserRouter>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        users: state.Auth.user
    }
};

export default connect(mapStateToProps, null)(App);