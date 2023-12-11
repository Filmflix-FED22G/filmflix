// HomePage.tsx
import React from 'react';
import { default as data, default as moviesData } from '../../data/movies.json';
import Carousel from '../components/Carousel';
import Hero from '../components/Hero';

const interstellarMovie = moviesData.find(
  (movie) => movie.title === 'Interstellar',
);

const HomePage: React.FC = () => {
  const trendingMovies = data.filter((movie) => movie.isTrending);
  const recommendedMovies = data.filter((movie) => !movie.isTrending);

  return (
    <div>
      {interstellarMovie && (
        <Hero
          title={interstellarMovie.title}
          quote={interstellarMovie.quote}
          heroImageUrl={interstellarMovie.heroImage}
        />
      )}
      <Carousel data={trendingMovies} heading="TRENDING" />
      <Carousel data={recommendedMovies} heading="RECOMMENDED FOR YOU" />
    </div>
  );
};

export default HomePage;
