import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MovieEditor from './MovieEditor';

class MovieEditorState extends Component {
  static propTypes = {
    movieId: PropTypes.number.isRequired,
    toListMode: PropTypes.func.isRequired
  };

  state = { movie: {} };

  componentDidMount() {
    const id = this.props.movieId;

    fetch(`/api/movies/${id}`)
      .then(rsp => rsp.json())
      .then(movie => this.setState({ movie }));
  }

  onChange = e => {
    const movie = this.state.movie;
    movie[e.prop] = e.value;
    this.setState({ movie });
  };

  save = e => {
    e.preventDefault();

    const id = this.props.movieId;
    const { movie } = this.state;

    fetch('/api/movies/' + id, {
      headers: {
        'Content-Type': 'application/json'
      },
      method: 'put',
      body: JSON.stringify(movie)
    }).then(() => this.props.toListMode());
  };

  render() {
    const { movie } = this.state;

    return (
      <MovieEditor
        {...this.props}
        movie={movie}
        onChange={this.onChange}
        save={this.save}
      />
    );
  }
}

export default MovieEditorState;
