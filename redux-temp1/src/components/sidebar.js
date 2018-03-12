import React from 'react';
import './comoponents.css';
import {NavLink} from 'react-router-dom';

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
                            <li className="list-group-item"><NavLink to="/">Home</NavLink></li>
                            <li className="list-group-item"><NavLink to="/form">Register</NavLink></li>
                            <li className="list-group-item"><NavLink to="/display">Details</NavLink></li>
                            <li className="list-group-item"><NavLink to="/login" onClick={(e)=>{ e.preventDefault(); localStorage.clear(); }}>Logout</NavLink></li>
                        </ul>
                    </div>
                </nav>
            </div>
        )
    }
}

export default Sidebar;