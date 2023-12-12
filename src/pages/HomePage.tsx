// HomePage.tsx
import { useEffect } from 'react';
import { default as moviesData } from '../../data/movies.json';
import Carousel from '../components/Carousel';
import Hero from '../components/Hero';

function HomePage() {
  const trendingMovies = moviesData.filter((movie) => movie.isTrending);
  const recommendedMovies = moviesData.filter((movie) => !movie.isTrending);

  const interstellarMovie = moviesData.find(
    (movie) => movie.title === 'Interstellar',
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
