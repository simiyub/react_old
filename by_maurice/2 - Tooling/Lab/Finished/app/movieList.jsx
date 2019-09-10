import React from 'react';
import MovieStore from './movieStore';
import MovieRow from './movieRow';

class MovieList extends React.Component {
  constructor() {
    super();
    this.onChange = this.onChange.bind(this);
  }

  state = {
    movies: MovieStore.getAll(),
  };

  componentDidMount() {
    MovieStore.addChangeListener(this.onChange);
  }

  componentWillUnmount() {
    MovieStore.removeChangeListener(this.onChange);
  }

  onChange() {
    this.setState({ movies: MovieStore.getAll() });
  }

  render() {
    const { movies } = this.state;
    const rows = movies.map(movie => <MovieRow key={movie.id} movie={movie} />);

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
