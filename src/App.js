import React, { Component } from 'react';
import './App.css';
import NavHeader from './NavHeader/NavHeader';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <NavHeader/>
        </header>
      </div>
    );
  }
}

export default App;
