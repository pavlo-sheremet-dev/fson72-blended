import { Component } from 'react';

import * as ImageService from 'service/image-service';
import { Button, SearchForm, Grid, GridItem, Text, CardItem } from 'components';

export class Gallery extends Component {
  state = {
    query: '',
    page: 1,
    images: [],
    isLoading: false,
    error: '',
    totalImages: 0,
  };

  async componentDidUpdate(_, prevState) {
    const { query, page } = this.state;

    if (prevState.query !== query || prevState.page !== page) {
      try {
        this.setState({ isLoading: true, error: '' });
        const data = await ImageService.getImages(query, page);

        const images = data.photos.map(({ id, alt, src }) => {
          return {
            id,
            alt,
            src: src.medium,
          };
        });

        this.setState(prevState => {
          return {
            images: [...prevState.images, ...images],
            totalImages: data.total_results,
          };
        });
      } catch (error) {
        this.setState({ error: 'Something went wrong' });
      } finally {
        this.setState({ isLoading: false });
      }
    }
  }

  increasePage = () => {
    this.setState(prevState => {
      return { page: prevState.page + 1 };
    });
  };

  getQuery = query => {
    if (query === this.state.query) {
      alert('Змініть запит');
      return;
    }
    this.setState({ query, page: 1, images: [], totalImages: 0 });
  };

  render() {
    const { images, error, isLoading, totalImages } = this.state;

    const showButton = images.length !== totalImages && !isLoading;

    return (
      <>
        <SearchForm onSubmit={this.getQuery} />

        {images.length > 0 && (
          <Grid>
            {images.map(({ id, src, alt }) => (
              <GridItem key={id}>
                <CardItem>
                  <img src={src} alt={alt} />
                </CardItem>
              </GridItem>
            ))}
          </Grid>
        )}

        {!images.length && (
          <Text textAlign="center">Sorry. There are no images ... 😭</Text>
        )}
        {error && <Text>{error}</Text>}
        {showButton && <Button onClick={this.increasePage}>MORE...</Button>}
      </>
    );
  }
}
