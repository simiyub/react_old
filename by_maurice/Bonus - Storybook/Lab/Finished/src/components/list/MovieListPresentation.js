import React from 'react';
import PropTypes from 'prop-types';

import MovieRow from './MovieRow';

const MovieListPresentation = ({ movies, error, loading }) => {
  if (loading) return <img src="/ajax-loader.gif" alt="Loading..." />;

  if (error)
    return (
      <div className="alert alert-danger" role="alert">
        Error: {error.message || error.statusText}
      </div>
    );

  const rows = movies.map(movie => <MovieRow key={movie.id} movie={movie} />);

  return (
    <table className="table table-bordered table-striped table-hover">
      <thead className="thead-dark">
        <tr>
          <th>Title</th>
          <th />
        </tr>
      </thead>
      <tbody>{rows}</tbody>
    </table>
  );
};

MovieListPresentation.propTypes = {
  loading: PropTypes.bool,
  error: PropTypes.object,
  movies: PropTypes.array
};

export default MovieListPresentation;
