import React, { Component } from "react";
import MovieRow from "./MovieRow";

class MovieList extends Component {
  state = {
    movies: []
  };

  componentDidMount() {
    fetch("/api/movies")
      .then(rsp => rsp.json())
      .then(movies => this.setState({ movies }));
  }

  render() {
    const rows = this.state.movies.map(movie => (
      <MovieRow key={movie.id} movie={movie} toEditMode={this.props.toEditMode} />
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
