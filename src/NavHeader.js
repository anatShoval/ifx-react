import React from 'react';
import logo from './images/logo.png';
import SearchBar from './SearchBar';
import './NavHeader/NavHeader.css';
import { Grid, Image } from 'semantic-ui-react';
//import { Icon } from 'semantic-ui-react';
import { Button } from 'semantic-ui-react'

const NavHeader = (props) => {
    return (

        <Grid>
        <Grid.Column width={4}>
          <div></div>
        </Grid.Column>
        <Grid.Column width={7}>
          <SearchBar
            searchTerm = {props.searchTerm}
            searchUpdated={(value) => props.searchUpdated.bind(value)}
            movies={props.movies}
          />
        </Grid.Column>
        <Grid.Column width={3}>
          <a><Image className="logo" src={logo} alt={logo}/></a>
        </Grid.Column>
        <Grid.Column width={2}>
          <Button icon='content' />
        </Grid.Column>
      </Grid>
 
    );
}

export default NavHeader;