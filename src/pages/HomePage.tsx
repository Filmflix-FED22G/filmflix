import moviesData from '../../data/movies.json';
import Hero from '../components/Hero';

const interstellarMovie = moviesData.find(
  (movie) => movie.title === 'Interstellar',
);

function HomePage() {
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
