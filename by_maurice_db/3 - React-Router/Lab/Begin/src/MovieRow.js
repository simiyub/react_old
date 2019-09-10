import React from "react";

const MovieRow = ({ movie, toEditMode }) => (
  <tr>
    <td>{movie.title}</td>
    <td style={{ width: 1 }}>
      <button
        onClick={() => toEditMode(movie)}
        className="btn btn-default btn-xs edit-button"
      >
        Edit
      </button>
    </td>
  </tr>
);

export default MovieRow;
