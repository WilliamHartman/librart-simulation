import React, { Component } from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
import tanLogo from '../../assets/tan-logo.svg';

class Nav extends Component {
    constructor() {
        super();


    }
    render() {
        return (
            <div className="Navbar">
                <div className="navbar-left">
                    <img src={tanLogo} alt="tan logo"/>
                    <Link to='/browse'><a>Browse</a></Link>
                    <Link to='/cart'><a>Cart</a></Link>
                    <Link to='/shelf'><a>My Shelf</a></Link>
                </div>
                <div className="navbar-right">
                    <Link to='/'><a>Logout</a></Link>
                </div>


            </div>

        )
    }
}

export default Nav;