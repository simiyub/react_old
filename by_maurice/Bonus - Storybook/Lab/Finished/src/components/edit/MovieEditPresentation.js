import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import InputText from './InputText';
import TextArea from './TextArea';

class MovieEditPresentation extends Component {
  hasErrors = () => {
    const { movieErrors } = this.props;

    for (var error in movieErrors) {
      if (movieErrors[error] && movieErrors[error].length) {
        return true;
      }
    }

    return false;
  };

  render() {
    const {
      movie,
      movieErrors,
      error,
      loading,
      onChange,
      onChangeRatings,
      save
    } = this.props;
    if (loading) return <img src="/ajax-loader.gif" alt="Loading..." />;

    if (error)
      return (
        <div className="alert alert-danger" role="alert">
          Error: {error.message || error.statusText}
        </div>
      );

    const ratings = movie.ratings || {};

    return (
      <form>
        <InputText
          onChange={onChange}
          prop="title"
          value={movie.title}
          errors={movieErrors.title}
        >
          Title
        </InputText>
        <InputText
          onChange={onChange}
          prop="abridgedDirectors"
          value={movie.abridgedDirectors}
        >
          Directors
        </InputText>
        <TextArea
          onChange={onChange}
          prop="criticsConsensus"
          value={movie.criticsConsensus}
        >
          Critics Consensus
        </TextArea>
        <TextArea onChange={onChange} prop="synopsis" value={movie.synopsis}>
          Synopsis
        </TextArea>
        <InputText
          onChange={onChange}
          prop="year"
          value={movie.year}
          errors={movieErrors.year}
        >
          Release Year
        </InputText>
        <InputText
          onChange={onChange}
          prop="mpaaRating"
          value={movie.mpaaRating}
        >
          MPAA Rating
        </InputText>
        <InputText
          onChange={onChangeRatings}
          prop="criticsScore"
          value={ratings.criticsScore}
          errors={movieErrors.criticsScore}
        >
          Critics Score
        </InputText>
        <InputText
          onChange={onChangeRatings}
          prop="audienceScore"
          value={ratings.audienceScore}
          errors={movieErrors.audienceScore}
        >
          Audience Score
        </InputText>

        <div className="btn-group">
          <button
            type="submit"
            onClick={save}
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

export default MovieEditPresentation;
