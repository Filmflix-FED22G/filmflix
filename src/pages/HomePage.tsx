import moviesData from '../../data/movies.json';
import Hero from '../components/Hero';
import { useEffect } from 'react';

const interstellarMovie = moviesData.find(
  (movie) => movie.title === 'Interstellar',
);

function HomePage() {
  useEffect(() => {
    document.title = 'FilmFlix';
  }, []);1
  return (
    <div>
      {interstellarMovie && (
        <Hero
          title={interstellarMovie.title}
          quote={interstellarMovie.quote}
          heroImageUrl={interstellarMovie.heroImage}
        />
      )}
    </div>
  );
}

export default HomePage;
