import React, { Component } from 'react';
import './App.css';
import NavHeader from './NavHeader';
import SearchJson from './Json/JsonSearch.json'
import SearchInput, {createFilter} from 'react-search-input'

export default class App extends Component {
  
  constructor (props) {
    super(props)
    this.state = {
      searchTerm: '',
      movies: [],
    };
    this.searchUpdated = this.searchUpdated.bind(this)    
  }
  componentDidMount(){
    this.setState({
      movies: Object.entries(SearchJson.movies)
    });
  }
  searchUpdated = (term) => {
    //const KEYS_TO_FILTERS = ['movies.id', 'movies.nameHeb', 'movies.nameEng'];
    //movies = this.state.movies.filter(createFilter(term, KEYS_TO_FILTERS))
    this.setState({
      searchTerm: term,
      //movies:movies,
    })
  }

  render() {
    
    return (
      <div className="App">
        <header className="App-header">
          <NavHeader
            searchTerm={this.state.searchTerm}
            searchUpdated={(value) => this.searchUpdated.bind(value)}
            movies={this.state.movies}
          />
        </header>
      </div>
    );
  }
}

