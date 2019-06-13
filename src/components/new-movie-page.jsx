import React, { Component } from 'react';
import NewMovieForm from './forms/new-movie-form';
class NewMoviePage extends Component {
  componentDidMount = () => {
    console.log('componentDidMount+NewMoviePage');
  };
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-sm-3" />
          <div className="col-sm-6">
            <NewMovieForm />
          </div>
          <div className="col-sm-3" />
        </div>
      </div>
    );
  }
}

export default NewMoviePage;
