import React, { Component } from 'react'

class Book extends Component {
    /**
     * TODO Implement the <select> element as a controlled element 
     */
    state = {
        selected_value: ''
    }

    handleChange = (event) => {
        this.setState({selected_value: event.target.value})
    }

    render() {
        
        const book = this.props.bookInfo
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