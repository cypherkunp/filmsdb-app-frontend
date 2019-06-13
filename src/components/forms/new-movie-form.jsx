import React from 'react';
import Joi from 'joi-browser';

import Form from './form';
import InputField from './../common/input-field';
import OptionsField from './../common/options-field';

import { getGenres } from '../../services/fakeGenreService';

class NewMovieForm extends Form {
  state = {
    data: {
      title: '',
      genre: [],
      stock: '',
      rating: ''
    },
    errors: {}
  };

  schema = {
    title: Joi.string()
      .required()
      .label('Title'),
    genre: Joi.array()
      .required()
      .label('Genre'),
    stock: Joi.number()
      .required()
      .integer()
      .min(0)
      .max(100)
      .label('Stock'),
    rating: Joi.number()
      .required()
      .min(0)
      .max(10)
      .label('Rating')
  };

  doSubmit = e => {
    this.handleSubmit(e);
    console.log(e);
    console.log('Submitted..');
  };

  componentDidMount = () => {
    const allGenres = [...getGenres()];
    let allData = { ...this.state.data };
    allData.genre = allGenres;
    this.setState({ data: allData });
  };

  render() {
    const { data, errors } = this.state;

    return (
      <div id="new-movie-form">
        <div className="card">
          <div className="card-body">
            <h3 className="card-title">Add Movie</h3>
            <form onSubmit={this.doSubmit}>
              <InputField
                autoFocus="true"
                type="text"
                name="title"
                placeholder="Enter the movie title"
                label="Title"
                value={data.title}
                error={errors.title}
                onChange={this.handleChange}
              />

              <OptionsField
                id="genre-options"
                label="Genre"
                placeholder="Select the genre"
                options={data.genre}
                valueProperty="name"
              />

              <InputField
                autoFocus="false"
                type="text"
                name="stock"
                placeholder="Enter the stock of the movie"
                label="Stock"
                error={errors.stock}
                value={data.stock}
                onChange={this.handleChange}
              />

              <InputField
                autoFocus="false"
                type="text"
                name="rating"
                placeholder="Enter the rating you want to give"
                label="Rating"
                error={errors.rating}
                value={data.rating}
                onChange={this.handleChange}
              />
              {this.renderButton('Add Movie')}
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default NewMovieForm;
