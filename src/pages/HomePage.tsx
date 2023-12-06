import movies from '../../data/movies.json';
import { Movie } from '../../types/movieTypes';
import Thumbnail from '../components/Thumbnail';
import styled from 'styled-components';

function HomePage() {
  return (
    <div>
      <h2>HomePage</h2>
      <MovieList>
      {movies.map((movie: Movie) => (
        <Thumbnail movie={movie} />
      ))}
      </MovieList>
    </div>
  );
}

export default HomePage;

const MovieList = styled.div`
  display: flex;
  flex-wrap: wrap;
`;