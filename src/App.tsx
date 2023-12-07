import { Outlet } from 'react-router-dom';
import moviesData from '../data/movies.json';
import Footer from './components/Footer';
import Header from './components/Header';
import Hero from './components/Hero';

const interstellarMovie = moviesData.find(
  (movie) => movie.title === 'Interstellar',
);

function App() {
  return (
    <>
      <Header />
      {interstellarMovie && (
        <Hero
          title={interstellarMovie.title}
          quote={interstellarMovie.quote}
          heroImageUrl={interstellarMovie.heroImage}
        />
      )}
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
