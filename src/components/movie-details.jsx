import React, { Component } from 'react';

class MovieDetails extends Component {
  render() {
    const { id } = this.props.match.params;
    return <h1>Movie details for => {id} </h1>;
  }
}

export default MovieDetails;
