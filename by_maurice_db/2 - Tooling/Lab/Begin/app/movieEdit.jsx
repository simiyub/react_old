import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import actions from "./actions";
import MovieStore from "./movieStore";
import InputText from "./inputText.jsx";
import TextArea from "./textArea.jsx";

function getEditState(id) {
  return { movie: MovieStore.getById(id) || {} };
}

class MovieEdit extends React.Component {
  static propTypes = {
    match: PropTypes.object.isRequired
  };

  state = {
    movie: {}
  };

  // getInitialState() {
  //   const id = +this.props.match.params.id;
  //   return getEditState(id);
  // }
  componentDidMount() {
    const id = +this.props.match.params.id;
    const movie = MovieStore.getById(id);
    this.setState({ movie });
    MovieStore.addChangeListener(this._onStoreChange);
  }
  componentWillUnmount() {
    MovieStore.removeChangeListener(this._onStoreChange);
  }
  onChange = e => {
    const movie = this.state.movie;
    movie[e.prop] = e.value;
    this.setState({ movie });
  };
  onChangeRatings = e => {
    const movie = this.state.movie;
    movie.ratings[e.prop] = e.value;
    this.setState({ movie });
  };
  _onStoreChange = () => {
    const id = +this.props.match.params.id;
    this.setState(getEditState(id));
  };
  save = e => {
    e.preventDefault();
    actions.save(this.state.movie).then(() => {
      this.props.history.push("/movies");
    });
  };
  render() {
    const movie = this.state.movie;
    const ratings = movie.ratings || {};

    return (
      <form>
        <InputText onChange={this.onChange} prop="title" value={movie.title}>
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
        <InputText onChange={this.onChange} prop="year" value={movie.year}>
          Year
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
        >
          Critics Score
        </InputText>
        <InputText
          onChange={this.onChangeRatings}
          prop="audienceScore"
          value={ratings.audienceScore}
        >
          Audience Score
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
