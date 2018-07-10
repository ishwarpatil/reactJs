import React from 'react';
import {connect} from 'react-redux';
import {Modal, ModalBody, ModalFooter} from 'reactstrap';
import {bindActionCreators} from 'redux';

import {loginUser} from '../../actions/authActions';

import './login.css';

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            user: {
                email: '',
                password: ''
            },
            isOpen: false
        };
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.error) {
            this.setState({isOpen: true});
        }
    }

    toggle = () => {
        this.setState({isOpen: !this.state.isOpen});
    };
    handleChange = (event) => {
        const {user} = this.state;
        user[event.target.name] = event.target.value;
        this.setState({user});
    };

    handleSubmit = () => {
        const {loginUser} = this.props;
        const {user} = this.state;
        loginUser(user);
    };

    render() {
        const {user} = this.state;
        return (
            <div className="container">
                <center><h3>Login</h3></center>
                <div>
                    <div className="form-group">
                        <label>Email:</label>
                        <input className="form-control" type='email' name='email' value={user.email}
                               placeholder='Enter Email address' onChange={this.handleChange}/>
                    </div>
                    <div className="form-group">
                        <label>Password:</label>
                        <input className="form-control" type='password' name='password' value={user.password}
                               placeholder='Enter Password ' onChange={this.handleChange}/>
                    </div>
                    <div className="form-group">
                        <button className="form-control btn-primary " type='submit' onClick={this.handleSubmit}>Login
                        </button>
                    </div>
                </div>
                <Modal isOpen={this.state.isOpen}>
                    <ModalBody>
                        {this.props.error}
                    </ModalBody>
                    <ModalFooter>
                        <button onClick={this.toggle}>ok</button>
                    </ModalFooter>
                </Modal>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        error: state.auth.error
    }
};
const mapDispatchToProps = dispatch => bindActionCreators({loginUser}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Login);