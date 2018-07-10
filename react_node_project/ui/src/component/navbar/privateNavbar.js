import React from 'react';
import {NavLink} from 'react-router-dom';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {Navbar, NavItem, Nav,} from 'reactstrap';

import {logoutUser} from "../../actions/authActions";

import './navbar.css';

const PrivateNavBar = (props) => (
    <div className="nav-bar-main-container">
        <Navbar className='bg-dark nav-bar-main-container'>
            <Nav>
                <NavItem>
                    <NavLink to='/' className='text-white nav-bar-link'>Dashboard</NavLink>
                </NavItem>
            </Nav>
            <button className="btn btn-info" onClick={props.logoutUser}>logout</button>
        </Navbar>
    </div>
);

const mapStateToDispatch = dispatch => bindActionCreators({logoutUser}, dispatch);
export default connect(null, mapStateToDispatch)(PrivateNavBar);