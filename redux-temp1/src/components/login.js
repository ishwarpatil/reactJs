import React from 'react';
import {login,logout} from './../actionMethods/auth';
import {bindActionCreators} from 'redux';
import './comoponents.css';
import { connect} from 'react-redux';

class Login extends React.Component{
    constructor(){
        super();
        this.state={
            userValues:{
                username:'',
                password:''
            }
        }
    }

    componentWillReceiveProps(nextProps){
        this.setState({a:'a'});
    }
    loginHandler=()=>{
        debugger;
        this.props.login(this.state.userValues);
    };
    changeHandler=(e)=>{
        const {userValues}=this.state;
        userValues[e.target.name]=e.target.value;
        this.setState({userValues});
    };
    render(){
        debugger;
        return(
            <div className="middle square-box">
                Login<br/>
                <input name="username" value={this.state.userValues.username} onChange={this.changeHandler} type="text" placeholder="email"/><br/>
                <input name="password" value={this.state.userValues.password} onChange={this.changeHandler} type="password" placeholder="password"/><br/>
                <button onClick={this.loginHandler}>Login</button>
            </div>
        )

    }
}
const mapStateToProps=(state)=>{return{
    user:state.auth.user
}};

const mapDispatchToProps=(dispatch)=>bindActionCreators({login,logout},dispatch);
export default connect(mapStateToProps,mapDispatchToProps)(Login);