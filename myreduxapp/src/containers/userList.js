import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {fetchUser} from '../actions';
class UserList extends React.Component{
    componentWillMount(){
        if(localStorage.getItem('user')===null){
            this.props.history.push('/login');
    }
        if(this.props.users.length<=0)
            this.props.fetchUser();
    }

    render(){
        const {users}=this.props;
        console.log(users);
        return(
            <div>
                {
            users.map((user) => {
                return <div>{user.name}</div>
            })
        }
            </div>
        )
    }
}
function mapStateToProps(state) {
    return{
        users:state.users
    }
}
function matchDispatchToProps(dispatch) {
    return bindActionCreators({
        fetchUser
    },dispatch)
}
export default connect(mapStateToProps,matchDispatchToProps)(UserList);