import React, { Component } from 'react';
import MovieListPresentation from './MovieListPresentation'

class MovieList extends Component {
  state = {
    movies: [],
    loading: false,
    error: null
  };

  componentDidMount() {
    this.setState({ loading: true });
    fetch('/api/movies')
      .then(rsp => (rsp.ok ? rsp : Promise.reject(rsp)))
      .then(rsp => rsp.json())
      .then(movies => this.setState({ movies, loading: false }))
      .catch(error => this.setState({ error, loading: false }));
  }

  render() {
    const { movies, error, loading } = this.state;

    return (
      <MovieListPresentation movies={movies} error={error} loading={loading} />
    );
  }
}

export default MovieList;
