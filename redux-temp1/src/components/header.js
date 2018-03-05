import React from 'react';
import './comoponents.css';
import logo from '../images/img1.jpeg'

class Header extends React.Component{
    render(){
        return(

            <div className="jumbotron">
                <div className="col-sm-1" id="img">
                    <img src={logo} />
                </div>
                <div className="col-sm-11" id="collegeName">
                    <h1>Bhagwan Mahavir Education Foundation (BMEF)</h1>
                </div>
            </div>
        )
    }
}

export default Header;