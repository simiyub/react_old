import React, { Component } from "react";
import PropTypes from "prop-types";
import MovieList from "./MovieList";

class MovieListState extends Component {
  static propTypes = {
    toEditMode: PropTypes.func.isRequired
  };
  state = {
    movies: []
  };

  componentDidMount() {
    fetch("/api/movies")
      .then(rsp => rsp.json())
      .then(movies => this.setState({ movies }));
  }

  render() {
    const { movies } = this.state;

    return <MovieList {...this.props} movies={movies} />;
  }
}

export default MovieListState;
