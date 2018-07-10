import React from 'react';
import {NavLink} from 'react-router-dom';
import {Nav, NavItem} from 'reactstrap';

import './sidebar.css';

const SideBar = () => (
    <div className="side-bar-container">
        <Nav vertical>
            <NavItem className="side-bar-nav-item">
                <NavLink to='/' className="text-white side-bar-link">Dashboard</NavLink>
            </NavItem>
        </Nav>
    </div>
);

export default SideBar;