import React from 'react';
import {BrowserRouter, Switch, Route, Redirect} from 'react-router-dom';
import {connect} from 'react-redux';

import UserManagement from "./container/userManagement/userManagement";
import Login from './container/login/login';
import PrivateNavBar from './component/navbar/privateNavbar';
import PublicNavBar from './component/navbar/publicNavBar';
import SideBar from './component/sidebar/sidebar';
import Footer from './component/footer/footer';

import './App.css';

class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        const {user} = this.props;
        const PrivateRoute = ({component: Component, ...rest}) => (
            <Route {...rest} render={(routeProps) => (
                user ?
                    <div>
                        <div className="nav-bar-container"><PrivateNavBar/></div>
                        <div className='container-fluid'>
                            <div className='row'>
                                <div className='col-2 sidebar-container bg-dark'><SideBar/></div>
                                <div className='col-md-10 main-container'><Component {...routeProps}/></div>
                            </div>
                        </div>
                        <div className='bg-dark footer'><Footer/></div>
                    </div> : <Redirect to='/login'/>
            )}/>
        );


        const PublicRoute = ({component: Component, ...rest}) => (
            <Route {...rest} render={(routeProps) => (
                !user ?
                    <div>
                        <div><PublicNavBar/></div>
                        <div><Component {...routeProps}/></div>
                    </div>
                    :
                    <Redirect to='/'/>
            )}/>  );

        return (
            <BrowserRouter>
                <Switch>
                    <PrivateRoute path='/' exact component={UserManagement}/>
                    <PublicRoute path='/login' exact component={Login}/>
                </Switch>
            </BrowserRouter>
        );
    }
}

const mapStateToProps = state => {
    return {
        user: state.auth.authUser
    }
};

export default connect(mapStateToProps, null)(App);