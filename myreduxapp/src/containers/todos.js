import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {fetchTodos} from '../actions';
class Todos extends React.Component{
    componentWillMount(){
        if(localStorage.getItem('user')===null){
            this.props.history.push('/login');
        }
        if(this.props.todos.length<=0)
            this.props.fetchTodos();
    }

    render(){
        const {todos}=this.props;
        console.log("hdjhfj",todos);
        return(
            <div>
                {
                todos.map((todo) => {
                    return <div>{todo.title}</div>
                })
            }
            </div>
        )
    }
}
function mapStateToProps(state) {
    return{
        todos:state.todos
    }
}
function matchDispatchToProps(dispatch) {
    return bindActionCreators({
        fetchTodos
    },dispatch)
}
export default connect(mapStateToProps,matchDispatchToProps)(Todos);