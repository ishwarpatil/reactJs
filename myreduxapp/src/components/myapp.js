import React from 'react';
import '../App.css'
import {NavLink,Route,BrowserRouter} from 'react-router-dom';
import Login from '../containers/login'
import ContactUs from '../components/contactus'
import AboutUs from '../components/aboutus'
import Header from './header'
import Footer from '../components/footer'
import Main from '../containers/main'

const Links=()=>{
    return(
        <ul className={'navbar navbar-dark bg-dark'}>
            <NavLink to={'/'}>Home</NavLink>
            <NavLink to={'/aboutus'}>About Us</NavLink>
            <NavLink to={'/contactus'}>Contact Us</NavLink>
            <NavLink to={'/login'}>Login</NavLink>
        </ul>
    )
}
const MyApp=()=>{
    return(
        <BrowserRouter>
            <div>
                <div className={'header'}>
                    <Header/>
                </div>
            <div>
                <Links/>
            </div>
            <div>
                <Route exact path={'/'}/>
                <Route path={'/login'} component={Login}/>
                <Route path={'/contactus'} component={ContactUs}/>
                <Route path={'/aboutus'} component={AboutUs}/>
                <Route path={'/main'} component={Main}/>
            </div>
                <div className={'footer'}>
                    <Footer/>
                </div>
            </div>
        </BrowserRouter>
    )
}
export default MyApp;