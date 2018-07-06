import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {Form,FormGroup,Col,Button,FormControl,ControlLabel} from 'react-bootstrap';
import {login} from '../action/authAction';
import '../css/login.css';

class Login extends React.Component{
    constructor(){
        super();
        this.state = {
            userValues:{},
            message:'',
        }
    }

    componentDidMount(){
      this.props.users && this.props.users.message==='Fail' ? alert('username or password incorrect') : '';
    }

    changeHandler = (e) => {
        const {userValues}=this.state;
        userValues[e.target.name]=e.target.value;
        this.setState({userValues});
    };

    formHandler = () => {
        this.props.login(this.state.userValues);
    };

    render(){
        return(
            <div>
                <fieldset>
                    <legend align="center">Login</legend>
                    <Form className="login_set_css" horizontal>
                        <FormGroup controlId="formHorizontalEmail">
                            <Col componentClass={ControlLabel} sm={2}>
                                Email
                            </Col>
                            <Col sm={10}>
                                <FormControl type="text" name="username" placeholder="Email" onChange={this.changeHandler}/>
                            </Col>
                        </FormGroup>

                        <FormGroup controlId="formHorizontalPassword">
                            <Col componentClass={ControlLabel} sm={2}>
                                Password
                            </Col>
                            <Col sm={10}>
                                <FormControl type="password" name="password" placeholder="Password" onChange={this.changeHandler} />
                            </Col>
                        </FormGroup>

                        <FormGroup>
                            <Col smOffset={2} sm={10}>
                                <Button onClick={this.formHandler}>Sign in</Button>
                            </Col>
                        </FormGroup>
                    </Form>
                </fieldset>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        users: state.Auth.user
    };
};

const matchDispatchToProps = (dispatch) => {
    return bindActionCreators({
        login
    }, dispatch);
};

export default connect(mapStateToProps, matchDispatchToProps)(Login);