import React from "react";
import MovieStore from "./movieStore";
import MovieRow from "./movieRow.jsx";

class MovieList extends React.Component {
  constructor() {
    super();
    this._onChange = this._onChange.bind(this);
  }
  state = {
    movies: MovieStore.getAll()
  };
  componentDidMount() {
    MovieStore.addChangeListener(this._onChange);
  }
  componentWillUnmount() {
    MovieStore.removeChangeListener(this._onChange);
  }
  _onChange() {
    this.setState({ movies: MovieStore.getAll() });
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
            <th>Directors</th>
            <th />
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </table>
    );
  }
}

export default MovieList;
