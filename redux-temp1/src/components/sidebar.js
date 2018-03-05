import React from 'react';
import './comoponents.css';

class Sidebar extends React.Component{
    constructor(){
        super();
        this.state={}
    }
    render(){
        return(
            <div className="col-sm-3 sidenav">
                <nav className="navbar navbar-default">
                    <div className="container-fluid">
                        <ul className="nav navbar-nav">
                            <li className="list-group-item"><a href="/">Home</a></li>
                            <li className="list-group-item"><a href="/form">Register</a></li>
                            <li className="list-group-item"><a href="/display">Details</a></li>
                            <li className="list-group-item"><a href="#">Page 3</a></li>
                        </ul>
                    </div>
                </nav>
            </div>
        )
    }
}

export default Sidebar;