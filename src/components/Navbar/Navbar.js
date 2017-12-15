import React, { Component } from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
import tanLogo from '../../assets/tan-logo.svg';

class Nav extends Component {
    // constructor() {
    //     super();


    // }
    render() {
        return (
            <div className="Navbar">
                <div className="navbar-left">
                    <img src={tanLogo} alt="tan logo"/>
                    <Link to='/browse'><div>Browse</div></Link>
                    <Link to='/cart'><div>Cdivrt</div></Link>
                    <Link to='/shelf'><div>My Shelf</div></Link>
                </div>
                <div className="navbar-right">
                    <Link to='/'><div>Logout</div></Link>
                </div>


            </div>

        )
    }
}

export default Nav;