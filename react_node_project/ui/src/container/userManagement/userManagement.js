import React, {Component} from 'react';
import {connect} from 'react-redux';
import Modal from 'react-modal';
import {bindActionCreators} from 'redux';
import ReactTable from 'react-table';

import {getUser} from '../../actions/index';
import '../../App.css';
import "react-table/react-table.css";

class UserManagement extends Component {

    constructor(props) {
        super(props);
        this.state = {
            open: false,
            user: {
                user_id: '',
                name: '',
                password: '',
                age: ''
            },
            index: 0
        }
    }

    componentDidMount() {
        this.props.getUser();
    }

    openModal = () => {
        this.setState({
            open: !this.state.open
        });
    };

    handleChange = (e) => {

        let {user} = this.state;
        user[e.target.name] = e.target.value;
        this.setState({
            user
        });
    };

    render() {
        const {allUsers} = this.props;
        return (
            <div className="App">
                <Modal isOpen={this.state.open}>
                    <div><input style={{padding: "10px"}} type='text' name="user_id" value={this.state.user.user_id}
                                onChange={this.handleChange} placeholder="user_id"/></div>
                    <div><input style={{padding: "10px"}} type='text' name="name" value={this.state.user.name}
                                onChange={this.handleChange} placeholder="name"/></div>
                    <div><input style={{padding: "10px"}} type='password' name="password"
                                value={this.state.user.passwrod}
                                onChange={this.handleChange} placeholder="password"/></div>
                    <div><input style={{padding: "10px"}} type='number' name="age" value={this.state.user.age}
                                onChange={this.handleChange} placeholder="age"/></div>
                    <div>
                        <button style={{padding: "10px"}} onClick={this.newuser}>save</button>
                        <button style={{padding: "10px"}} onClick={this.updateUser}>Update</button>
                        <button style={{padding: "10px"}} onClick={this.deleteUser}>Delete</button>
                    </div>
                    <div style={{marginTop: '30%', marginLeft: '90%'}}>
                        <button style={{padding: "10px"}} onClick={this.openModal}>Cancel</button>
                    </div>
                </Modal>
                <ReactTable
                    data={allUsers}
                    columns={[
                        {
                            Header: "user Id",
                            accessor: "id"
                        },
                        {
                            Header: "Name",
                            accessor: "name"
                        },
                        {
                            Header: "Email",
                            accessor: "email"
                        }
                    ]}
                    defaultPageSize={10}
                    className="-striped -highlight"
                />
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {allUsers: state.users}
};

const mapDispatchToProps = dispatch => bindActionCreators({getUser}, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(UserManagement);
