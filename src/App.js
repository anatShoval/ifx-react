import React, { Component } from 'react';
import './Css/App.css';
import NavHeader from './NavHeader';
import SearchJson from './Json/JsonSearch.json'
//import SearchInput, {createFilter} from 'react-search-input'

export default class App extends Component {
  
  constructor (props) {
    super(props)
      this.state = {
        searchTerm: '',
        extendedSearch: true,
        movies: [],
      };
      this.searchUpdated = this.searchUpdated.bind(this)
      this.extendedSearchHandler = this.extendedSearchHandler.bind(this)  

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
    });
  }

  extendedSearchHandler = (boolVal) => {
    this.setState({
      extendedSearch: Boolean(boolVal),
    });
  }

  render() {
    
    return (
      <div className="App">
        <header className="App-header">
          <NavHeader
            searchTerm={this.state.searchTerm}
            searchUpdated={(value) => this.searchUpdated.bind(value)}
            movies={this.state.movies}
            extendedSearch={this.state.extendedSearch}
            extendedSearchHandler={(boolVal) => this.extendedSearchHandler.bind(boolVal)}
          />
        </header>
      </div>
    );
  }
}

