import React, { Component } from "react";
import { Link } from "react-router-dom";
import InputText from "./InputText";
import TextArea from "./TextArea";

class MovieEdit extends Component {
  state = { movie: {} };

  componentDidMount() {
    const id = this.props.match.params.id;

    fetch(`/api/movies/${id}`)
      .then(rsp => rsp.json())
      .then(movie => this.setState({ movie }));
  }

  onChange = e => {
    const movie = this.state.movie;
    movie[e.prop] = e.value;
    this.setState({ movie });
  };

  save = e => {
    e.preventDefault();

    const id = this.props.match.params.id;
    const { movie } = this.state;

    fetch("/api/movies/" + id, {
      headers: {
        "Content-Type": "application/json"
      },
      method: "put",
      body: JSON.stringify(movie)
    }).then(() => this.props.history.push("/movies"));
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
