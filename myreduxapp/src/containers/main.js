import React from 'react';
import '../App.css'
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {logoutAction} from '../actions';
import {NavLink,Route,BrowserRouter} from 'react-router-dom';
import List from '../containers/userList'
import TodoList from '../containers/todos'
import Albums from '../containers/albums'

const Links=()=>{
    return(
        <ul className={'navbar flex-column float-left navbar-light bg-dark'}>
            <li className={'navbar-item'}><NavLink to={'/main/user'}>Users</NavLink></li>
            <li className={'navbar-item'}><NavLink to={'/main/todo'}>Todos</NavLink></li>
            <li className={'navbar-item'}><NavLink to={'/main/album'}>Albums</NavLink></li>
        </ul>
    )
}
class Main extends React.Component{
    handleLogout=()=>{
        localStorage.removeItem('user');
        this.props.logoutAction();
        this.props.history.push('/login')
    }
    componentWillMount(){
        if(localStorage.getItem('user')===null)
            this.props.history.push('/login');
    }
    render() {
        return (
            <BrowserRouter>

                <div className={'row'}>

                    <div className={'col-sm-2'}>
                        <Links/>
                    </div>
                    <div className={'col-sm-9'}>
                        <Route exact path={'/main/user'} component={List}/>
                        <Route path={'/main/todo'} component={TodoList}/>
                        <Route path={'/main/album'} component={Albums}/>
                    </div>
                    <div className={'col-sm-1'}><button onClick={this.handleLogout}>Logout</button></div>
                </div>
            </BrowserRouter>
        )
    }
}
function mapStateToProps(state) {
    return{
        loginResponse:state.loginResponse
    }
}
function matchDispatchToProps(dispatch) {
    return bindActionCreators({
        logoutAction
    },dispatch)
}
export default connect(mapStateToProps,matchDispatchToProps)(Main);