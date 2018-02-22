import React, { Component } from 'react';

class TodoItem extends Component{

    componentWillReceiveProps(nextProps) {
        console.log(nextProps.todos);
        console.log(this.props.todos);
    }

    render(){
        return(
            <ul>
                {
                    this.props.todos.map((todo,index) => {
                        return <li key={index}>{todo}</li>
                    })
                }
            </ul>
        )
    }
}

export default TodoItem;
