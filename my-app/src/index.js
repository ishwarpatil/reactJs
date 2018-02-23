import React from 'react';
import ReactDOM from 'react-dom';
import TodoItem from './Todoitem.js';
import $ from 'jquery';
import './index.css';
import App from './App';

//Start Children API
class Fetch extends React.Component {
    constructor() {
        super();
        this.state = {
            content: []
        }
    }

    componentDidMount() {
            $.ajax({
                url : this.props.url,
                success:(data) => {
                    this.setState({
                        content:data
                    })
                },
                error:(err) => {
                    console.log("Error :- "+err);
                }
            })
    }

    render() {
        return (
            <section>
                {this.props.children(this.state.content)}
            </section>
        )
    }
}

// Fetch.propTypes = {
//     url:React.Proptypes.string.isRequired
// }

class Apps extends React.Component {
    render() {
        return (
            <section>
                Title :-
                <Fetch url="http://jsonplaceholder.typicode.com/posts">
                    {(data) => {
                        return data.map((value,index) => {
                            return <li key={index}>{value.title}</li>
                        })
                    }}
                </Fetch>

                User :-
                <Fetch url="http://jsonplaceholder.typicode.com/users">
                    {(data) => {
                        return data.map((value,index) => {
                            return <li key={index}>{value.name}</li>
                        })
                    }}
                </Fetch>
            </section>
        )
    }
}
//End Children

//Depp dive in jsx
class Helloword extends React.Component{

    // getName(){
    //     return "ishwar"
    // }

    constructor(){
        super();
        this.name = "Ishwar Patil";
    }

    render(){
        return(
            <section className="foot">
                {this.name}
            </section>
        )
    }
}

//TodosItems
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
                    //todos.push(this.refs.addTodo.value);
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

class Visitecounter extends React.Component{
    //call First
    constructor(props){
        super(props);
        this.state = {
          count: 0
        }
        console.log("Constructor...");
    }

    intCount = () => {
        this.setState({
            count: this.state.count + 1
        })
        console.log(this.state.count)
    }

    //call Second
    componentWillMount (){
        console.log("WillMount...");
    }

    //return only boolen method (false,true)
    shouldComponentUpdate(){
        if(this.state.count > 10){
            return false;
        }
        else{
            return true;
        }
    }

    //call fouth
    componentDidMount (){
        console.log("DidMount");
    }

    //call third
    render(){
        console.log("Render");
        return(
            <section>
                {this.state.count}
                <button onClick={this.intCount}>Increment</button>
            </section>
        )
    }
}

ReactDOM.render(
    <Visitecounter />,
    document.getElementById('root')
);

