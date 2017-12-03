import React, { Component } from 'react';
import './App.css';
import NavHeader from './NavHeader';

export default class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      searchTerm: ''
    };
    this.searchUpdated = this.searchUpdated.bind(this)
  }

  searchUpdated = (term) => {
    this.setState({searchTerm: term})
  }

  render() {
    
    return (
      <div className="App">
        <header className="App-header">
          <NavHeader
            searchMyTerm={this.state.searchTerm}
            searchMyUpdated={(value) => this.searchUpdated.bind(value)}
          />
        </header>
      </div>
    );
  }
}

