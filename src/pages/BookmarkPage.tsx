import styled from 'styled-components';
import movies from '../../data/movies.json';
import { Movie } from '../../types/movieTypes';
import Thumbnail from '../components/Thumbnail';

function BookmarkPage() {
  return (
    <div>
      <h1>Bookmarks</h1>
      <MovieList>
        {movies.map((movie: Movie) => (
          <Thumbnail key={movie.title} movie={movie} />
        ))}
      </MovieList>
    </div>
  );
}

export default BookmarkPage;

const MovieList = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
