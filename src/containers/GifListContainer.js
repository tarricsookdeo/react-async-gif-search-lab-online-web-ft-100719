import React, { Component } from 'react';
import GifSearch from '../components/GifSearch';
import GifList from '../components/GifList';

export default class GifListContainer extends Component {
  constructor() {
    super();
    this.state = { gifs: [] };
  }

  handleSubmit = formData => {
    fetch(
      `https://api.giphy.com/v1/gifs/search?q=${formData.query}&api_key=YQl2qrMDdoKagherNyifmp0212FJ0bWn`
    )
      .then(this.parseJSON)
      .then(response =>
        this.setState({
          gifs: response.data.map(gif => gif.images.original.url)
        })
      );
  };

  parseJSON = response => {
    return response.json();
  };

  render() {
    return (
      <div className='row w-100 p-4'>
        <div className='col-7'>
          <GifList gifs={this.state.gifs} />
        </div>
        <div className='col-5 p-4'>
          <GifSearch handleSubmit={this.handleSubmit} />
        </div>
      </div>
    );
  }
}
