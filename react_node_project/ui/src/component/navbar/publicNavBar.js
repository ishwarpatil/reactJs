import React from 'react';
import {NavLink} from 'react-router-dom';
import {Navbar, Nav, NavItem} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css';

const PublicNavBar = () => (
    <div>
        <Navbar className='bg-secondary '>
            <Nav>
                <NavItem>
                    <NavLink to='/login/' className='text-white nav-bar-link'>Login</NavLink>
                </NavItem>
            </Nav>
        </Navbar>
    </div>
);

export default PublicNavBar;
