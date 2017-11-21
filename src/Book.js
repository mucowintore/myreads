import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Book extends Component {
    /**
     * TODO Implement the <select> element as a controlled element 
     */

    static propTypes = {
        bookDetails: PropTypes.object.isRequired
    }
    state = {
        selected_value: (this.props.bookDetails.shelf) ? this.props.bookDetails.shelf : 'none'
    }

    handleChange = (event) => {
        this.setState({selected_value: event.target.value})
        this.props.updateBook(this.props.bookDetails, event.target.value)        
    }

    render() {
        const book = this.props.bookDetails
        return (
            <div className="book">
                <div className="book-top">
                    <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks.thumbnail}`}}></div>
                    <div className="book-shelf-changer">
                        <select value={this.state.selected_value} onChange={this.handleChange}>
                            <option value="none" disabled>Move to...</option>
                            <option value="currentlyReading">Currently Reading</option>
                            <option value="wantToRead">Want to Read</option>
                            <option value="read">Read</option>
                            <option value="none">None</option>
                        </select>
                    </div>
                </div>
                <div className="book-title">{book.title}</div>
                
                {book.authors && (
                    book.authors.map((author) => 
                    <div key={author} className="book-authors">{author}</div>
                    )
                )}
                
            </div>
        )
    }
}

export default Book