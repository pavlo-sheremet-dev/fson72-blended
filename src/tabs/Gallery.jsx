import { Component } from 'react';

import * as ImageService from 'service/image-service';
import { Button, SearchForm, Grid, GridItem, Text, CardItem } from 'components';
import axios from 'axios';

export class Gallery extends Component {
  state = {
    query: '',
    page: 1,
  };

  // async componentDidMount() {
  //   ImageService.getImages(this.state.query, this.state.page);
  // }

  getQuery = query => {
    this.setState({ query });
  };

  render() {
    return (
      <>
        <SearchForm onSubmit={this.getQuery} />
        <Text textAlign="center">Sorry. There are no images ... 😭</Text>
      </>
    );
  }
}
