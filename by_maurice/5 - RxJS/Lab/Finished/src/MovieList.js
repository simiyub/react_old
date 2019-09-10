import React, { Component } from 'react';
import MovieRow from './MovieRow';
import { ajax } from 'rxjs/ajax';

import { dispatch, store$ } from './store';
import { moviesLoaded } from './actions';

class MovieList extends Component {
  state = { movies: [] };
  subscription = null;

  componentDidMount() {
    this.subscription = store$.subscribe(state =>
      this.setState({ movies: state.movies })
    );

    ajax
      .getJSON('/api/movies')
      .subscribe(movies => dispatch(moviesLoaded(movies)));
  }

  componentWillUnmount() {
    this.subscription.unsubscribe();
  }

  render() {
    const rows = this.state.movies.map(movie => (
      <MovieRow key={movie.id} movie={movie} />
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
