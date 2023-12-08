import { useParams } from 'react-router-dom';
import movies from '../../data/movies.json';
import slugify from '../utils/slugify';

function DetailsPage() {
  const { title } = useParams();
  const movie = movies.find((m) => slugify(m.title) === title);

  if (!movie) {
    return <div>Movie not found</div>;
  }

  return (
    <div>
      <h1>{movie.title}</h1>
      <p>{movie.synopsis}</p>
      <img src={movie.thumbnail} alt={movie.title} />
    </div>
  );
}

export default DetailsPage;
