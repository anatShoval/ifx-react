import React from 'react';
import logo from './images/logo.png';
import SearchBar from './SearchBar';
import './NavHeader/NavHeader.css';

const NavHeader = (props) => {
    return (
      <div className="container row">
        <div className="four wide column">
        <a><img className="logo" src={logo} alt={logo}/></a>
        </div>
        <div className = "four wide column">
        <SearchBar
          searchTerm = {props.searchTerm}
          searchUpdated={(value) => props.searchUpdated.bind(value)}
          movies={props.movies}
        />
        </div>
      </div>
    );
}

export default NavHeader;