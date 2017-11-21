import React, { Component } from 'react'
import { Route, Link } from 'react-router-dom'
import './App.css'
import ListBooks from './ListBooks.js'
import SearchBooks from './SearchBooks.js'
import * as BooksAPI from './BooksAPI'


class BooksApp extends Component {
  state = {
    books: [],
    bookshelfs: [
      { title:'Currently Reading', id: 'currentlyReading'},
      { title: 'Want to Read', id: 'wantToRead'}, 
      { title: 'Read', id:'read'} 
    ]
  }

  updateBook = (book, shelf) => {
      book.shelf = shelf
      // console.log(book, shelf)
      // console.log(this.state.books.concat([ book ]))
      this.setState(state => ({
        books: (book.shelf) ? state.books.filter((b) => b.id != book.id).concat([ book ]) : state.books.concat([ book ])
      }))
  }

  getShelfInfo = (bookId) => {
    const matchingBook = this.state.books.filter(book => book.id === bookId)
    return (matchingBook.length) ? matchingBook[0].shelf : 'none'
  }

  render() {
    return (
      <div className="app">
        <Route exact path='/' render={() => (
          <ListBooks 
              title='My Reads'
              books={this.state.books}
              updateBook={this.updateBook}
              bookshelfs={this.state.bookshelfs}
          />
        )}/>
        <Route path='/search' render={() => (
          <SearchBooks
            books={this.state.books}
            updateBook={this.updateBook}
            getShelfInfo={this.getShelfInfo}
          />
        )}/>
      </div>
    )
  }
}

export default BooksApp
