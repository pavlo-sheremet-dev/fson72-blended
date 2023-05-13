import { Component } from 'react';

import * as ImageService from 'service/image-service';
import { Button, SearchForm, Grid, GridItem, Text, CardItem } from 'components';
import axios from 'axios';

export class Gallery extends Component {
  state = {
    query: '',
    page: 1,
    images: [],
  };

  // async componentDidMount() {
  //   ImageService.getImages(this.state.query, this.state.page);
  // }

  async componentDidUpdate(_, prevState) {
    const { query, page } = this.state;

    if (prevState.query !== query || prevState.page !== page) {
      const data = await ImageService.getImages(query, page);

      this.setState(prevState => {
        return { images: [...prevState.images, ...data.photos] };
      });
    }
  }

  increasePage = () => {
    this.setState(prevState => {
      return { page: prevState.page + 1 };
    });
  };

  getQuery = query => {
    this.setState({ query, page: 1, images: [] });
  };

  render() {
    return (
      <>
        <SearchForm onSubmit={this.getQuery} />
        <Grid>
          {this.state.images.map(({ id, src, alt }) => (
            <GridItem key={id}>
              <CardItem>
                <img src={src.medium} alt={alt} />
              </CardItem>
            </GridItem>
          ))}
        </Grid>

        <Button onClick={this.increasePage}>MORE...</Button>
        <Text textAlign="center">Sorry. There are no images ... 😭</Text>
      </>
    );
  }
}
