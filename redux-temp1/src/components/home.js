import React from 'react';

class Home extends React.Component{
    constructor(){
        super();
        this.state={}
    }
    render(){
        return(
            <div>
                home
                <button onClick={()=>{
                    localStorage.clear();
                }}>logout</button>
                <button><a href="/task">Task</a></button>
                <button><a href="/form">Form</a></button>
                <button><a href="/display">Display</a></button>
            </div>
        )
    }
}

export default Home;