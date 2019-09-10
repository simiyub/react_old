import React, { Component } from "react";
import MovieRow from "./MovieRow";
import { ajax } from "rxjs/ajax";

import { dispatch, connect } from "./store";
import { moviesLoaded } from "./actions";

class MovieList extends Component {
  componentDidMount() {
    ajax
      .getJSON("/api/movies")
      .subscribe(movies => dispatch(moviesLoaded(movies)));
  }

  render() {
    const rows = this.props.movies.map(movie => (
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

export default connect(state => ({ movies: state.movies }))(MovieList);
