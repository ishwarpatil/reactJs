import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import './index.css';
import App from './App';

//Start Children API
class Fetch extends React.Component {
    constructor() {
        super()
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


ReactDOM.render(
    <App />,
    document.getElementById('root')
);

