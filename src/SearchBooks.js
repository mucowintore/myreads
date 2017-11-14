import React, { Component } from 'react'
import * as BooksAPI from './BooksAPI'
import { Link } from 'react-router-dom'
import './App.css'

class SearchBooks extends Component {
    state = {
        searchResults: [],
        searchQuery: ''
    }

    updateQuery = (query) => {
        query = query.trim()
        this.setState({ searchQuery: query })
    }

    updateSearchResults = (query) => {
        BooksAPI.search(query).then((books) => {
            this.setState({ searchResults: books })
        })
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
                <div className="search-books-results">
                    <ol className="books-grid">
                        <div>
                        </div>
                    </ol>
                </div>
            </div>
        )
    }
    
}

export default SearchBooks