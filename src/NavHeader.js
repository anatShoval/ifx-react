import React from 'react';
import logo from './images/logo.png';
import SearchBar from './SearchBar';
import './NavHeader/NavHeader.css';

const NavHeader = (props) => {
    return (
      <div className="container">
        <a><img className="logo" src={logo} alt={logo}/></a>
        <SearchBar
          myTerm = {props.searchMyTerm}
          searchMyUpdated={(value) => props.searchMyUpdated.bind(value)}
        />
      </div>
    );
}

export default NavHeader;