import React, { Component } from 'react';
import './Browse.css';
import { Link } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import BookCard from './BookCard';
// COMP 43C
import { connect } from 'react-redux';


class Browse extends Component {
    // COMP 36E
    // COMP 36I
    constructor(props) {
        super(props);
        
        // COMP 36C
        this.state = {
            countBooks: 0
        }
        this.countBooks = this.countBooks.bind(this);
    }

    // COMP 37D
    countBooks = (num) => {
        // COMP 36D
        this.setState({countBooks: this.props.books.length})
    }

    // COMP 36F
    render() {
        // COMP 36G
        let jsxBooks = this.props.books.map((book) => {
            return (
                <div>
                    <BookCard book={book}/>>
                </div>
            )
        })
        return (
            <div className="Browse">
                {/* COMP 36H */}
                <Navbar />
                <div className="browse-bottom">
                    <div className="browse-main-container">
                        <h1>Browse Inventory</h1>
                        <div className="browse-book-container">
                            <div className="browse-book-card">
                                {jsxBooks}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )

    }
}

// COMP 43H
const mapStateToProps = (state) => {
    const {books} = state;
    return {
      books
    };
  };

  export default connect(mapStateToProps, {  })(Browse);