// COMP 33E-1
import React, { Component } from 'react';
import './Login.css';
import { Link } from 'react-router-dom';
import logo from '../../assets/maroon-logo.svg'

class Login extends Component {
    // constructor(){
    //     super();

    //     this.state = {

    //     }
    // }

    render(){
        return(
            <div className="Login">
                <div className="login-content">
                    <img src={logo} alt="book logo"/>
                    <h1>Book Exchange</h1>
                    <div className="login-input-container">
                    <input className="login-input" type='text' placeholder='Username' onChange={(e) => this.handleChange('username', e.target.value)} />
                        <input className="login-input" type='password' placeholder='Password' onChange={(e) => this.handleChange('password', e.target.value)} />
                        <div className="login-button-container" >
                            {/* 42E */}
                            <Link to='/browse'><button >Login </button></Link>
                            <Link to='/browse'><button>Register </button></Link>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

// COMP 33E-2
export default Login;