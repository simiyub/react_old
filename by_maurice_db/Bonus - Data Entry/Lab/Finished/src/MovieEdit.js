import React, { Component } from "react";
import { Link } from "react-router-dom";
import InputText from "./InputText";
import TextArea from "./TextArea";
import validator from "./MovieValidator";

class MovieEdit extends Component {
  state = {
    movie: {},
    errors: {}
  };

  componentDidMount() {
    var id = this.props.match.params.id;

    fetch(`/api/movies/${id}`)
      .then(rsp => rsp.json())
      .then(movie => this.setState({ movie }));
  }

  onChange = e => {
    const { movie, errors } = this.state;
    movie[e.prop] = e.value;
    errors[e.prop] = validator.validate(e.prop, e.value);

    this.setState({ movie, errors });
  };

  onChangeRatings = e => {
    const { movie, errors } = this.state;
    movie.ratings[e.prop] = e.value;
    errors[e.prop] = validator.validate("ratings." + e.prop, e.value);
    this.setState({ movie, errors });
  };

  hasErrors = () => {
    const { errors } = this.state;

    for (var error in errors) {
      if (errors[error] && errors[error].length) {
        return true;
      }
    }

    return false;
  };

  save = e => {
    e.preventDefault();
    console.log(this.state.movie);

    var id = this.props.match.params.id;
    var { movie } = this.state;

    fetch("/api/movies/" + id, {
      headers: {
        "Content-Type": "application/json"
      },
      method: "put",
      body: JSON.stringify(movie)
    }).then(() => this.props.history.push("/movies"));
  };

  render() {
    const { movie, errors } = this.state;
    const ratings = movie.ratings || {};

    return (
      <form>
        <InputText
          onChange={this.onChange}
          prop="title"
          value={movie.title}
          errors={errors.title}
        >
          Title
        </InputText>
        <InputText
          onChange={this.onChange}
          prop="abridgedDirectors"
          value={movie.abridgedDirectors}
        >
          Directors
        </InputText>
        <TextArea
          onChange={this.onChange}
          prop="criticsConsensus"
          value={movie.criticsConsensus}
        >
          Critics Consensus
        </TextArea>
        <TextArea
          onChange={this.onChange}
          prop="synopsis"
          value={movie.synopsis}
        >
          Synopsis
        </TextArea>
        <InputText
          onChange={this.onChange}
          prop="year"
          value={movie.year}
          errors={errors.year}
        >
          Release Year
        </InputText>
        <InputText
          onChange={this.onChange}
          prop="mpaaRating"
          value={movie.mpaaRating}
        >
          MPAA Rating
        </InputText>
        <InputText
          onChange={this.onChangeRatings}
          prop="criticsScore"
          value={ratings.criticsScore}
          errors={errors.criticsScore}
        >
          Critics Score
        </InputText>
        <InputText
          onChange={this.onChangeRatings}
          prop="audienceScore"
          value={ratings.audienceScore}
          errors={errors.audienceScore}
        >
          Audience Score
        </InputText>

        <div className="btn-group">
          <button
            type="submit"
            onClick={this.save}
            disabled={this.hasErrors()}
            className="btn btn-primary"
          >
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
