import { Component } from 'react';
import Link from 'next/link';
import Router from 'next/router';

import InputText from '../components/InputText';
import TextArea from '../components/TextArea';

class MovieEdit extends Component {
  static async getInitialProps({ query }) {
    const id = query.id;
    const rsp = await fetch(`http://localhost:3001/api/movies/${id}`);
    const fetchedMovie = await rsp.json();
    return { fetchedMovie };
  }

  static getDerivedStateFromProps(props, state) {
    if (state.movie && state.movie.id === props.fetchedMovie.id) {
      return null;
    }

    return {
      movie: props.fetchedMovie
    };
  }

  state = { movie: null };

  onChange = e => {
    const { movie } = this.state;
    this.setState({ movie: { ...movie, [e.prop]: e.value } });
  };

  save = e => {
    e.preventDefault();

    const { movie } = this.state;
    const { id } = movie;

    fetch('http://localhost:3001/api/movies/' + id, {
      headers: {
        'Content-Type': 'application/json'
      },
      method: 'put',
      body: JSON.stringify(movie)
    }).then(() => Router.push('/movies'));
  };

  render() {
    const { movie } = this.state;
    if (!movie) return null;

    return (
      <form>
        <InputText onChange={this.onChange} prop="title" value={movie.title}>
          Title
        </InputText>
        <TextArea
          onChange={this.onChange}
          prop="overview"
          value={movie.overview}
        >
          Overview
        </TextArea>
        <InputText
          onChange={this.onChange}
          prop="release_date"
          value={movie.release_date}
        >
          Release date
        </InputText>
        <InputText
          onChange={this.onChange}
          prop="popularity"
          value={movie.popularity}
        >
          popularity
        </InputText>
        <InputText
          onChange={this.onChange}
          prop="vote_average"
          value={movie.vote_average}
        >
          vote average
        </InputText>

        <div className="btn-group">
          <button type="submit" onClick={this.save} className="btn btn-primary">
            Save
          </button>
          <Link href="/movies">
            <button className="btn btn-danger">Cancel</button>
          </Link>
        </div>
      </form>
    );
  }
}

export default MovieEdit;
