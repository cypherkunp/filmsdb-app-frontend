import React, { Component } from 'react';
import Table from './common/table';
import Like from './common/like';

class MoviesTable extends Component {
  render() {
    const { movies, sortColumn, onSort, onLike, onDelete } = this.props;

    const columnData = [
      { name: 'Title', path: 'title' },
      { name: 'Genre', path: 'genre.name' },
      { name: 'Stock', path: 'numberInStock' },
      { name: 'Rate', path: 'dailyRentalRate' },
      {
        key: 'like',
        content: movie => <Like liked={movie.liked} onClick={() => onLike(movie)} />
      },
      {
        key: 'delete',
        content: movie => (
          <button
            onClick={() => onDelete(movie._id)}
            type="button"
            className="btn btn-danger btn-sm"
          >
            Delete
          </button>
        )
      }
    ];

    return (
      <Table
        columnData={columnData}
        sortColumn={sortColumn}
        onSort={onSort}
        rowKey="_id"
        rowData={movies}
      />
    );
  }
}

export default MoviesTable;
