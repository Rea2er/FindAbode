import React, { Component } from 'react'
import { Link } from 'react-router-dom';

class SearchBar extends Component {
  render() {
    return (
      <>
        <div className="search-container">
          <div className="search-box">
            <input
              className="search-txt"
              type="text"
              placeholder="Enter Keywords"
            />
            <Link className="search-btn" to="">
              <i className="fas fa-search"></i>
            </Link>
          </div>
        </div>
      </>
    )
  }
}
export default SearchBar