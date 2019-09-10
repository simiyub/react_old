import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

class MovieRow extends React.Component {
  static propTypes = {
    movie: PropTypes.object.isRequired
  };
  render() {
    return (
      <tr>
        <td>{this.props.movie.title}</td>
        <td>{this.props.movie.abridgedDirectors.join(", ")}</td>
        <td style={{ width: 1 }}>
          <Link
            className="btn btn-default btn-xs edit-button"
            to={`/movie/${this.props.movie.id}`}
          >
            Edit
          </Link>
        </td>
      </tr>
    );
  }
}

export default MovieRow;
