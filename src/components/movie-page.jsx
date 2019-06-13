import React, { Component } from 'react';
import _ from 'lodash';

import { getMovies } from '../services/fakeMovieService';
import { getGenres } from '../services/fakeGenreService';
import { paginate } from '../utilities/paginate';

import Pagination from './common/pagination';
import ListGroup from './common/list-group';
import MoviesTable from './movies-table';
import AlertBox from './common/alert-box';

class MoviesPage extends Component {
  state = {
    movies: [],
    genres: [],
    pageSize: 4,
    currentPage: 1,
    selectedGenre: 'All Genres',
    sortColumn: { path: '', order: 'asc' }
  };

  componentDidMount() {
    const allGenres = [{ _id: '', name: 'All Genres' }, ...getGenres()];
    this.setState({ movies: getMovies(), genres: allGenres });
  }

  handleMovieDelete = movieID => {
    const movies = this.state.movies.filter(m => m._id !== movieID);
    this.setState({ movies });
  };

  handleLike = movie => {
    const movies = [...this.state.movies];
    const index = movies.indexOf(movie);
    movies[index] = { ...movie };
    movies[index].liked = movies[index].liked === true ? false : true;
    this.setState({ movies });
  };

  handlePageChange = page => {
    this.setState({ currentPage: page });
  };

  handleGenreSelect = genre => {
    let movies = [];
    if (genre === 'All Genres') movies = getMovies();
    else movies = getMovies().filter(movie => movie.genre.name === genre);
    this.setState({ movies, selectedGenre: genre, currentPage: 1 });
  };

  handleSort = sortColumn => {
    console.log(sortColumn);

    this.setState({ sortColumn });
  };

  getPagedData = () => {
    const { pageSize, currentPage, sortColumn, movies: allMovies } = this.state;

    const sortedMovies = _.orderBy(allMovies, [sortColumn.path], [sortColumn.order]);
    return { totalCount: allMovies.length, data: paginate(sortedMovies, currentPage, pageSize) };
  };

  render() {
    const {
      genres,
      pageSize,
      currentPage,
      sortColumn,
      selectedGenre,
      movies: allMovies
    } = this.state;
    const { totalCount, data: movies } = this.getPagedData();
    let message = '';

    if (totalCount === 0) message = `There are no movies in the database.`;
    else
      message = `Showing ${allMovies.length} ${
        allMovies.length === 1 ? 'movie' : 'movies'
      } from the database.`;

    return (
      <React.Fragment>
        <div className="row">
          <div className="col-2">
            <center>
              <button
                onClick={() => this.props.history.push('/movies/new')}
                className="btn btn-primary"
              >
                Add Movie
              </button>
            </center>
          </div>
          <div className="col">
            <AlertBox message={message} />
          </div>
        </div>
        <div className="row">
          <div className="col-2">
            <ListGroup
              itemList={genres}
              selectedItem={selectedGenre}
              onItemSelect={this.handleGenreSelect}
            />
          </div>
          <div className="col">
            <MoviesTable
              movies={movies}
              sortColumn={sortColumn}
              onSort={this.handleSort}
              onDelete={this.handleMovieDelete}
              onLike={this.handleLike}
            />
            <Pagination
              itemsCount={totalCount}
              pageSize={pageSize}
              currentPage={currentPage}
              onPageChange={this.handlePageChange}
            />
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default MoviesPage;
