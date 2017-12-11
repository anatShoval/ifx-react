import React, { Component } from 'react';
import './Css/App.css';
import NavHeader from './NavHeader';
import SearchJson from './Json/JsonSearch.json';
//import SearchInput, {createFilter} from 'react-search-input'

export default class App extends Component {
  
  constructor (props) {
    super(props)
      this.state = {
        searchTerm: '',
        extendedSearch: true,
        movies: [],
      };
  }
  
  componentDidMount(){
    this.setState({
      movies: Object.entries(SearchJson.movies)
    });
  }

  render() {
    
    return (
      <div className="App">
        <header className="App-header">
          <NavHeader
            searchTerm={this.state.searchTerm}
            searchUpdated={(event) => this.setState({searchTerm:event.target.value})}
            //searchUpdated={(event) => this.setState({searchTerm:event})}
            movies={this.state.movies}
            extendedSearch={this.state.extendedSearch}
            extendedSearchHandler={(boolVal) => this.setState({extendedSearch: boolVal})}
          />
        </header>
      </div>
    );
  }
}

