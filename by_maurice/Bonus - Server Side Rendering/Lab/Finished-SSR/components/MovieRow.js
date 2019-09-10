import Link from 'next/link';

const MovieRow = ({ movie }) => (
  <tr>
    <td>{movie.title}</td>
    <td style={{ width: 1 }}>
      {/* <Link href={`/movie`}> */}

      <Link href={`/movie?id=${movie.id}`}>
        <a className="btn btn-default btn-xs edit-button">Edit</a>
      </Link>
    </td>
  </tr>
);

export default MovieRow;
