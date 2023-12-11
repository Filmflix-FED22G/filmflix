// HomePage.tsx
import React from 'react';
import data from '../../data/movies.json';
import Carousel from '../components/Carousel';

console.log('moviedata: ', data);

const HomePage: React.FC = () => {
  const trendingMovies = data.filter((movie) => movie.isTrending);
  const recommendedMovies = data.filter((movie) => !movie.isTrending);

  return (
    <div>
      <Carousel data={trendingMovies} />
      <Carousel data={recommendedMovies} />
      {/* Other content for your homepage */}
    </div>
  );
};

export default HomePage;
