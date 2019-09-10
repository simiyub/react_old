import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const MovieRow = ({ movie }) => (
  <tr>
    <td>{movie.title}</td>
    <td>{movie.abridgedDirectors.join(', ')}</td>
    <td style={{ width: 1 }}>
      <Link
        className="btn btn-default btn-xs edit-button"
        to={`/movie/${movie.id}`}
      >
        Edit
      </Link>
    </td>
  </tr>
);

MovieRow.propTypes = {
  movie: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    abridgedDirectors: PropTypes.arrayOf(PropTypes.string).isRequired,
  }).isRequired,
};

export default MovieRow;
