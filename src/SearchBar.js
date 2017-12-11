import React from 'react'
//import { Input } from 'semantic-ui-react'
import SearchInput, {createFilter} from 'react-search-input'

const SearchBar = (props) => {
  const KEYS_TO_FILTERS = ['nameHeb', 'nameEng']
  const filteredMovies = props.movies.filter(createFilter(props.searchTerm, KEYS_TO_FILTERS))
  return (
    <div className="mySearch">

      <SearchInput className="search-input" type="text" onChange={this==="" ? props.searchUpdated.bind("***") : props.searchUpdated.bind(this)} action={{ icon: 'search' }} placeholder='Search...' />
      <div className="searchResoult">
      {filteredMovies.map(movie => {
          return (
            <div className="id" key={"movie_" + movie.id}>
              <button>
                <div className="nameHeb">{movie.nameHeb}</div>
                <div className="nameEng">{movie.nameEng}</div>
              </button>
            </div>
          );
        })}
        </div>
    </div>
  );
}

export default SearchBar
/*
import SearchInput, {createFilter} from 'react-search-input'



import './SearchBar.css'


const SearchBar = (props) => {
  //const myObj = JSON.parse(SearchJson);
 // const filteredEmails = Object.entries(SearchJson).filter(createFilter(props.myTerm, KEYS_TO_FILTERS));
 // console.log(filteredEmails)
  
    return (
      <div className="mySearch">
        <SearchInput className="search-input" onChange={props.searchUpdated.bind(this)} />
        {props.movies.map(movie => {
          return (
            <div className="id" key={"movie_" + movie.id}>
              <div className="nameHeb">{movie.nameHeb}</div>
              <div className="nameEng">{movie.nameEng}</div>
            </div>
          );
        })}
      
      </div>
    );
}


export default SearchBar;
*/
