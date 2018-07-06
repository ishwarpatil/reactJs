import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {UsersData} from '../action/usersAction';

class User extends React.Component {
    constructor() {
        super();
        this.state = {}
    }

    componentDidMount() {
        this.props.UsersData();
    }

    render() {
        return (
            <div>
                <h1>Users</h1>
                <table>
                    <thead>
                    <tr>
                        <th>Name</th>
                        <th>User Name</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>Website</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        this.props.Data.map((value, index) => {
                            return (
                                <tr key={index}>
                                    <td>{value.name}</td>
                                    <td>{value.username}</td>
                                    <td>{value.email}</td>
                                    <td>{value.phone}</td>
                                    <td>{value.website}</td>
                                </tr>
                            )
                        })
                    }
                    </tbody>
                </table>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        Data: state.Users.usersData
    };
};

const matchDispatchToProps = (dispatch) => {
    return bindActionCreators({
        UsersData
    }, dispatch);
};

export default connect(mapStateToProps, matchDispatchToProps)(User);