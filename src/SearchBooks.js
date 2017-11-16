import React, { Component } from 'react'
import * as BooksAPI from './BooksAPI'
import { Link } from 'react-router-dom'
import './App.css'
import Bookshelf from './Bookshelf'
import PropTypes from 'prop-types'

class SearchBooks extends Component {
    static PropTypes = {
        books: PropTypes.array.isRequired,
        updateBook: PropTypes.func.isRequired
    }
    
    state = {
        searchResults: [],
        searchQuery: ''
    }

    updateQuery = (query) => {
        query = query.trim()
        this.setState({ searchQuery: query })
    }

    updateSearchResults = (query) => {
        if (query) {
            BooksAPI.search(query).then((books) => {
                this.setState({ searchResults: books })
            })
        } else{
            this.setState({ searchResults: []})
        }
        
    }

    render() {
        return (
            <div className="search-books">
                <div className="search-books-bar">
                    <Link className="close-search" to='/'>Close</Link>
                    <div className="search-books-input-wrapper">
                        <input 
                            type="text"
                            placeholder="Search by title or author"
                            value={this.state.searchQuery}
                            onChange={(event) => {
                                this.updateQuery(event.target.value)
                                this.updateSearchResults(event.target.value)
                            }}
                        />
                    </div>
                </div>
                {this.state.searchResults.length && (
                   <div className="search-books-results">
                        <Bookshelf books={this.state.searchResults} updateBook={this.props.updateBook} />
                   </div>
                )}
            </div>
        )
    }
    
}

export default SearchBooks