import React, { Component } from 'react';
import logo from '../images/logo.png'
import './NavHeader.css';

export default class NavHeader extends Component {
  render() {
    return (
      <div className="container">
        <a href="#"><img className="logo" src={logo} alt={logo}/></a>
      </div>
    );
  }
}
