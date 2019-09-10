import React, { Component } from "react";
import { connect } from "react-redux";
import MovieRow from "./MovieRow";
import { moviesLoaded } from "./actions";

class MovieList extends Component {
  componentDidMount() {
    if (!this.props.movies.length) {
      fetch("/api/movies")
        .then(rsp => rsp.json())
        .then(movies => this.props.moviesLoaded(movies));
    }
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

const mapStateToProps = state => {
  return {
    movies: state.movies
  };
};

const mapDispatchToProps = dispatch => {
  return {
    moviesLoaded: movies => dispatch(moviesLoaded(movies))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MovieList);
