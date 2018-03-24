import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {loginAction} from '../actions';

class Login extends React.Component{
    constructor(){
        super();
        this.state={
            fields:[]
        }
    }
    handleClick=(e)=>{
        e.preventDefault();
        this.props.loginAction(this.state.fields);
    }
    handleChange=(e)=>{
        const {name,value}=e.target;
        const {fields}=this.state;
        fields[name]=value;
        this.setState({
            fields
        })

    }
    componentWillReceiveProps(nextProps){
        if(nextProps.loginResponse==='success'){
            this.props.history.push('/main')
            localStorage.setItem('user','admin');
        }
    }
    render(){
        console.log(this.props.loginResponse);
        return(
            <div className={'container'}>
                <form>
                    <div className={'form-group'}>
                        <input type={'text'} placeholder={'Email'} name={'email'} value={this.state.fields.email} onChange={this.handleChange}/>
                    </div>
                    <div className={'form-group'}>
                        <input type={'password'} placeholder={'Password'} name={'password'} value={this.state.fields.password} onChange={this.handleChange}/>
                    </div>
                    <button className={'btn'} onClick={this.handleClick}>Log In</button>
                </form>
            </div>
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
        loginAction
    },dispatch)
}
export default connect(mapStateToProps,matchDispatchToProps)(Login);