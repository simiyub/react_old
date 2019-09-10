import React, { Component } from "react";
import PropTypes from "prop-types";
import InputText from "./InputText";
import TextArea from "./TextArea";

class MovieEdit extends Component {
  static propTypes = {
    movie: PropTypes.shape({
      title: PropTypes.string,
      overview: PropTypes.string,
      release_date: PropTypes.string,
      popularity: PropTypes.number,
      vote_average: PropTypes.number
    }).isRequired,
    toListMode: PropTypes.func.isRequired,
    save: PropTypes.func.isRequired,
    onChange: PropTypes.func.isRequired
  };

  render() {
    const { movie, toListMode, save, onChange } = this.props;

    return (
      <form>
        <InputText onChange={onChange} prop="title" value={movie.title}>
          Title
        </InputText>
        <TextArea onChange={onChange} prop="overview" value={movie.overview}>
          Overview
        </TextArea>
        <InputText
          onChange={onChange}
          prop="release_date"
          value={movie.release_date}
        >
          Release date
        </InputText>
        <InputText
          onChange={onChange}
          prop="popularity"
          value={movie.popularity}
        >
          popularity
        </InputText>
        <InputText
          onChange={onChange}
          prop="vote_average"
          value={movie.vote_average}
        >
          vote average
        </InputText>

        <div className="btn-group">
          <button type="submit" onClick={save} className="btn btn-primary">
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
