import React, { Component } from "react";
import { Link } from "react-router-dom";
import { ajax } from "rxjs/ajax";

import InputText from "./InputText";
import TextArea from "./TextArea";

import { dispatch, store$ } from "./store";
import { movieLoaded, currentMoviePropChanged } from "./actions";

class MovieEdit extends Component {
  state = { movie: null };
  subscription = null;

  componentDidMount() {
    const id = this.props.match.params.id;

    ajax
      .getJSON(`/api/movies/${id}`)
      .subscribe(movie => dispatch(movieLoaded(movie)));

    this.subscription = store$.subscribe(state =>
      this.setState({ movie: state.currentMovie })
    );
  }

  componentWillUnmount() {
    this.subscription.unsubscribe();
  }

  onChange = e => {
    dispatch(currentMoviePropChanged(e.prop, e.value));
  };

  save = e => {
    e.preventDefault();

    const id = this.props.match.params.id;
    const { movie } = this.state;

    ajax
      .put(`/api/movies/${id}`, movie, {
        "Content-Type": "application/json"
      })
      .subscribe(() => this.props.history.push("/movies"));
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
          <Link className="btn btn-danger" to="/movies">
            Cancel
          </Link>
        </div>
      </form>
    );
  }
}

export default MovieEdit;
