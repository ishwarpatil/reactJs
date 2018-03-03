import React from 'react';
import ReactDOM from 'react-dom';
import TodoItem from './Todoitem.js';

class Todos extends React.Component{
    constructor(){
        super();
        this.state = {
            todos:['I Am Learning ReactJs','I Am Learning Php']
        }
    }
    render(){
        const {todos} = this.state;
        return (
            <section>
                <form onSubmit={(e) => {
                    const {todos} = this.state;
                    e.preventDefault();
                    this.setState({
                        todos:todos.concat(this.refs.addTodo.value)
                    })
                    this.refs.addTodo.value = "";
                }}>
                    <input type="text" ref="addTodo" />
                    <button type="Submit">Add Item</button>
                </form>
                <TodoItem todos={todos} />
            </section>
        )
    }
}