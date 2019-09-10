import { Component } from 'react';
import fetch from 'isomorphic-fetch';

import MovieRow from '../components/MovieRow';

class MovieList extends Component {
  static async getInitialProps() {
    const rsp = await fetch('http://localhost:3001/api/movies');
    const movies = await rsp.json();
    return { movies };
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

export default MovieList;
