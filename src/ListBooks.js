import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import Bookshelf from './Bookshelf'

class ListBooks extends Component {
    static propTypes = {
        title: PropTypes.string.isRequired,
        books: PropTypes.array.isRequired,
        bookshelfs: PropTypes.array.isRequired,
        updateBook: PropTypes.func.isRequired
    }

    filterByShelf = (shelf) => {
        return this.props.books.filter(book => book.shelf === shelf)
    }

    render() {
        return (
            <div className="list-books">
                <div className="list-books-title">
                    <h1>{this.props.title}</h1>
                </div>
                <div className="list-books-content">
                    {this.props.bookshelfs.map((shelf, i) =>
                        <Bookshelf key={i} title={shelf.title} id={shelf.id} books={this.filterByShelf(shelf.id)} updateBook={this.props.updateBook} />
                    )}
                </div>
                <div className="open-search">
                    <Link to='/search'>Add a book</Link>
                </div>
            </div>
        )
    }
}

export default ListBooks
