import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import InputText from "./InputText";
import TextArea from "./TextArea";

import {
  movieLoaded,
  currentMoviePropChanged
} from "./actions";

class MovieEdit extends Component {
  componentDidMount() {
    const id = this.props.match.params.id;

    fetch(`/api/movies/${id}`)
      .then(rsp => rsp.json())
      .then(movie => this.props.movieLoaded(movie));
  }

  onChange = e => {
    this.props.currentMoviePropChanged(e.prop, e.value);
  };

  save = e => {
    e.preventDefault();
    console.log(this.props.movie);

    const id = this.props.match.params.id;
    const { movie } = this.props;

    fetch("/api/movies/" + id, {
      headers: {
        "Content-Type": "application/json"
      },
      method: "put",
      body: JSON.stringify(movie)
    }).then(() => this.props.history.push("/movies"));
  };

  render() {
    const { movie } = this.props;
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

const mapStateToProps = state => {
  return {
    movie: state.currentMovie
  };
};

const mapDispatchToProps = dispatch => {
  return {
    movieLoaded: movie => dispatch(movieLoaded(movie)),
    currentMoviePropChanged: (prop, value) =>
      dispatch(currentMoviePropChanged(prop, value))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MovieEdit);
