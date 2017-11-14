import React, { Component } from 'react'
import { Route, Link } from 'react-router-dom'
import './App.css'
import ListBooks from './ListBooks.js'
import SearchBooks from './SearchBooks.js'


class BooksApp extends Component {
  state = {
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
    // showSearchPage: false
  }

  render() {
    return (
      <div className="app">
        <Route exact path='/' render={() => (
          <ListBooks listBooksTitle='My Reads'/>
        )}/>
        <Route path='/search' component={SearchBooks} />
      </div>
  )}
}

export default BooksApp
