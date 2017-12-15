import React, { Component } from 'react';
import './Browse.css';
import { Link } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';


class Browse extends Component {
    constructor(props) {
        super(props);

        this.state = {
            title: '',
            author: ''
        }

    }
    render() {
        return (
            <div className="Browse">
                <Navbar />
                <div className="browse-bottom">
                    <div className="browse-main-container">
                        <h1>Browse Inventory</h1>
                        <div className="browse-book-container">
                            <div className="browse-book-card">
                                <h2>The Hobbit</h2>
                                <Link to="/details"><h3>Details</h3></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )

    }
}

export default Browse;
