import Link from 'next/link';

const indexPage = ({ movies }) => (
  <div>
    <nav>
      <Link href="/movies">
        <a>Movies</a>
      </Link>
    </nav>
  </div>
);

export default indexPage;
