import React, { Component } from 'react'
import Book from './Book'

import PropTypes from 'prop-types'

class Bookshelf extends Component {
    static PropTypes = {
        books: PropTypes.array.isRequired,
        updateBook: PropTypes.func
    }
    
    render() {
        const books = this.props.books
        return (
            <div className="bookshelf">
                {this.props.title && (
                    <h2 className="bookshelf-title">{this.props.title}</h2>
                )}
                
                <div className="bookshelf-books">
                    <ol className="books-grid">
                        {books.map((book) => 
                            <li key={book.id}><Book bookDetails={book} updateBook={this.props.updateBook} /></li>
                        )}
                    </ol>
                </div>
            </div>
        )
    }
}

export default Bookshelf