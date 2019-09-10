import React from "react";
import { Link } from "react-router-dom";

const MovieRow = ({ movie }) => (
  <tr>
    <td>{movie.title}</td>
    <td style={{ width: 1 }}>
      <Link
        className="btn btn-default btn-xs edit-button"
        to={`/movie/${movie.id}`}
      >
        Edit
      </Link>
    </td>
  </tr>
);

export default MovieRow;
