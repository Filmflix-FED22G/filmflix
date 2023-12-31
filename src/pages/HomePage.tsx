// HomePage.tsx
import { useEffect } from 'react';
import { Movie } from '../../types/movieTypes';
import Carousel from '../components/Carousel';
import Hero from '../components/Hero';
import { useMovies } from '../contexts/MovieContext';

function HomePage() {
  const { movies } = useMovies();
  const trendingMovies = movies.filter((movie: Movie) => movie.isTrending);
  const recommendedMovies = movies.filter((movie: Movie) => !movie.isTrending);

  const interstellarMovie = movies.find(
    (movie: Movie) => movie.title === 'Interstellar',
  );

  useEffect(() => {
    document.title = 'FilmFlix';
  }, []);

  return (
    <div>
      {interstellarMovie && <Hero movie={interstellarMovie} />}
      <Carousel data={trendingMovies} heading="TRENDING" />
      <Carousel data={recommendedMovies} heading="RECOMMENDED FOR YOU" />
    </div>
  );
}

export default HomePage;
