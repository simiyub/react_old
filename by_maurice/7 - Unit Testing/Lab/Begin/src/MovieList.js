import React, { Component } from "react";
import PropTypes from "prop-types";
import MovieRow from "./MovieRow";

class MovieList extends Component {
  static propTypes = {
    toEditMode: PropTypes.func.isRequired,
    movies: PropTypes.array.isRequired
  };

  render() {
    const { movies, toEditMode } = this.props;
    const rows = movies.map(movie => (
      <MovieRow key={movie.id} movie={movie} toEditMode={toEditMode} />
    ));

    return (
      <table className="table table-bordered table-striped">
        <thead>
          <tr>
            <th>Title</th>
            <th />
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </table>
    );
  }
}

export default MovieList;
