import React, { Component } from "react";
import InputText from "./InputText";
import TextArea from "./TextArea";

class MovieEdit extends Component {
  state = { movie: {} };

  componentDidMount() {
    var id = this.props.movieId;

    fetch(`/api/movies/${id}`)
      .then(rsp => rsp.json())
      .then(movie => this.setState({ movie }));
  }

  onChange = e => {
    var movie = this.state.movie;
    movie[e.prop] = e.value;
    this.setState({ movie });
  };

  save = e => {
    e.preventDefault();

    var id = this.props.movieId;
    var { movie } = this.state;

    fetch("/api/movies/" + id, {
      headers: {
        "Content-Type": "application/json"
      },
      method: "put",
      body: JSON.stringify(movie)
    }).then(() => this.props.toListMode());
  };

  render() {
    const { movie } = this.state;
    const { toListMode } = this.props;

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
          <button className="btn btn-danger" onClick={() => toListMode()}>
            Cancel
          </button>
        </div>
      </form>
    );
  }
}

export default MovieEdit;
