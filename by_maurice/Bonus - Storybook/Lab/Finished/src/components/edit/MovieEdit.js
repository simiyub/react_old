import React, { Component } from 'react';
import validator from './MovieValidator';
import MovieEditPresentation from './MovieEditPresentation';

class MovieEdit extends Component {
  state = {
    movie: {},
    movieErrors: {},
    loading: false,
    error: null
  };

  componentDidMount() {
    var id = this.props.match.params.id;

    this.setState({ loading: true });
    fetch(`/api/movies/${id}`)
      .then(rsp => (rsp.ok ? rsp : Promise.reject(rsp)))
      .then(rsp => rsp.json())
      .then(movie => this.setState({ movie, loading: false }))
      .catch(error => this.setState({ error, loading: false }));
  }

  onChange = e => {
    const { movie, movieErrors } = this.state;
    movie[e.prop] = e.value;
    movieErrors[e.prop] = validator.validate(e.prop, e.value);

    this.setState({ movie, movieErrors });
  };

  onChangeRatings = e => {
    const { movie, movieErrors } = this.state;
    movie.ratings[e.prop] = e.value;
    movieErrors[e.prop] = validator.validate('ratings.' + e.prop, e.value);
    this.setState({ movie, movieErrors });
  };

  save = e => {
    e.preventDefault();
    console.log(this.state.movie);

    var id = this.props.match.params.id;
    var { movie } = this.state;

    fetch('/api/movies/' + id, {
      headers: {
        'Content-Type': 'application/json'
      },
      method: 'put',
      body: JSON.stringify(movie)
    }).then(() => this.props.history.push('/movies'));
  };

  render() {
    const { movie, error, movieErrors, loading } = this.state;

    return (
      <MovieEditPresentation
        movie={movie}
        movieErrors={movieErrors}
        error={error}
        loading={loading}
        onChange={this.onChange}
        onChangeRatings={this.onChangeRatings}
        save={this.save}
      />
    );
  }
}

export default MovieEdit;
