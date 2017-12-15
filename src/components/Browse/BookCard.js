import React from 'react';
import { Link } from 'react-router-dom';

// COMP 38C
// COMP 38D
const BookCard = (props) => {
        return (
            <div className="browse-book" key={props.book.title}>
                <h1>{props.book.title}</h1>
                <h2>{props.book.author}</h2>
                {/* COMP 59C*/}
                <button onClick={() => props.checkBook(props.index)} role='button'>Check</button>
                <Link to="/details"><h3>Details</h3></Link>
            </div>
        )
}

export default BookCard;