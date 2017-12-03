import React from 'react';
import SearchInput, {createFilter} from 'react-search-input'
import SearchJson from './Json/JsonSearch.json'
import './SearchBar.css'

const KEYS_TO_FILTERS = ['movies.id', 'movies.nameHeb', 'movies.nameEng']
const SearchBar = (props) => {
  //const myObj = JSON.parse(SearchJson);
  const filteredEmails = Object.entries(SearchJson).filter(createFilter(props.myTerm, KEYS_TO_FILTERS));
  console.log(filteredEmails)
    return (
      <div>
        <SearchInput className="search-input" onChange={props.searchMyUpdated.bind(this)} />
        {filteredEmails.map(movie => {
          return (
            <div className="id" key={"movie_"+movie.id}>
              <div className="nameHeb">{movie.nameHeb}</div>
              <div className="nameEng">{movie.nameEng}</div>
            </div>
          )
        })}
      
      </div>
    );
}


export default SearchBar;
