import movies from '../../data/movies.json';
import { Movie } from '../../types/movieTypes';
import Thumbnail from '../components/Thumbnail';

function HomePage() {
  return (
    <div>
      <h2>HomePage</h2>
      {movies.map((movie: Movie) => (
        <Thumbnail movie={movie} />
      ))}
    </div>
  );
}

export default HomePage;
