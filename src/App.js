import React, { Component } from 'react'
import { Route, Link } from 'react-router-dom'
import './App.css'
import ListBooks from './ListBooks.js'
import SearchBooks from './SearchBooks.js'
import * as BooksAPI from './BooksAPI'


class BooksApp extends Component {
  state = {
    books: []
  }

  addBook = (book, shelf) => {
    BooksAPI.update(book, shelf).then(() => {
      book.shelf = shelf
      this.setState(state => {
        books: this.state.books.concat([ book ])
      })
    })
  }

  

  render() {
    return (
      <div className="app">
        <Route exact path='/' render={() => (
          <ListBooks 
            listBooksTitle='My Reads'
            books={this.state.books}
            addBook={this.addBook}
          />
        )}/>
        <Route path='/search' component={SearchBooks} />
      </div>
  )}
}

export default BooksApp
