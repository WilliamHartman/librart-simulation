import React, { Component } from 'react';
import './Browse.css';
import { Link } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import BookCard from './BookCard';
// COMP 43C
import { connect } from 'react-redux';
import axios from 'axios'


class Browse extends Component {
    // COMP 36E
    // COMP 36I
    constructor(props) {
        super(props);
        
        // COMP 36C
        this.state = {
            bookChecked: 0
        }
        this.checkBook = this.checkBook.bind(this);
    }

    // COMP 39C
    // COMP 39B
    componentDidMount = () => {
      console.log('Fires when the component is mounted to the DOM')
      // COMP 44E
      axios.get(`/api/getUser/${this.props.user.user_id}`)
        .then(result => console.log(result))
    }
    

    // COMP 39D
    componentWillReceiveProps = (nextProps) => {
      console.log('Fires when the component get new props, can be from reducer or parent')
    }
    

    // COMP 37D
    checkBook = (num) => {
        // COMP 36D
        this.setState({bookChecked: num})
    }

    // COMP 36F
    render() {
        // COMP 36G
        let jsxBooks = this.props.books.map((book, index) => {
            return (
                <div>
                    {/* COMP 37C */}
                    <BookCard book={book} checkBook={this.checkBook} index={index}/>>
                </div>
            )
        })
        return (
            <div className="Browse">
                {/* COMP 36H COMP 54G*/}
                <Navbar />
                <div className="browse-bottom">
                    <div className="browse-main-container">
                        <h1>Browse Inventory</h1>
                        <p>Book checked: {this.props.books[this.state.bookChecked].title}</p>
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