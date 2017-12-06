import React from 'react';
import logo from './images/logo.png';
import SearchBar from './SearchBar';
import './Css/NavHeader.css';
import { Grid, Image } from 'semantic-ui-react';
import { Button } from 'semantic-ui-react';
import ExtendedSearchBar from './ExtendedSearchBar';


const NavHeader = (props) => {

    return (

        <Grid>
        <Grid.Column width={1}>
          <div></div>
        </Grid.Column>
        <Grid.Column width={4}>
          <Button className="btnExSearch" content="חיפוש מתקדם"/>
          <ExtendedSearchBar
            extendedSearch={props.extendedSearch}
            extendedSearchHandler={(value) => this.props.extendedSearchHandler.bind(value)}
          />
        </Grid.Column>
        <Grid.Column width={6}>
          <SearchBar
            searchTerm = {props.searchTerm}
            searchUpdated={(value) => props.searchUpdated.bind(value)}
            movies={props.movies}
          />
        </Grid.Column>
        <Grid.Column width={4}>
          <a><Image className="logo" src={logo} alt={logo}/></a>
        </Grid.Column>
        <Grid.Column width={1}>
          <Button className="btnMenu" icon='content' />
        </Grid.Column>
      </Grid>
 
    );
}

export default NavHeader;