// HomePage.tsx
import React from 'react';
import data from '../../data/movies.json';
import Carousel from '../components/Carousel';

console.log('moviedata: ', data);

const HomePage: React.FC = () => {
  return (
    <div>
      <Carousel />
      {/* Other content for your homepage */}
    </div>
  );
};

export default HomePage;
