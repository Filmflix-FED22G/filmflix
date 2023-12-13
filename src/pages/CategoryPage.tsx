import { Outlet } from 'react-router-dom';
import Carousel from '../components/Carousel';
import CategoryDropdown from '../components/CategoryDropdown';

import { useEffect } from 'react';
import { useMovies } from '../contexts/MovieContext';

const CategoryPage: React.FC = () => {
  const { movies } = useMovies();

  const actionMovies = movies.filter((movie) => movie.genre.includes('Action'));
  const adventureMovies = movies.filter((movie) =>
    movie.genre.includes('Adventure'),
  );
  const biographyMovies = movies.filter((movie) =>
    movie.genre.includes('Biography'),
  );
  const crimeMovies = movies.filter((movie) => movie.genre.includes('Crime'));
  const dramaMovies = movies.filter((movie) => movie.genre.includes('Drama'));
  const fantasyMovies = movies.filter((movie) =>
    movie.genre.includes('Fantasy'),
  );
  const historyMovies = movies.filter((movie) =>
    movie.genre.includes('History'),
  );
  const horrorMovies = movies.filter((movie) => movie.genre.includes('Horror'));
  const musicMovies = movies.filter((movie) => movie.genre.includes('Music'));
  const mysteryMovies = movies.filter((movie) =>
    movie.genre.includes('Mystery'),
  );
  const romanceMovies = movies.filter((movie) =>
    movie.genre.includes('Romance'),
  );
  const sciFiMovies = movies.filter((movie) => movie.genre.includes('Sci-Fi'));
  const thrillerMovies = movies.filter((movie) =>
    movie.genre.includes('Thriller'),
  );
  const warMovies = movies.filter((movie) => movie.genre.includes('War'));
  const westernMovies = movies.filter((movie) =>
    movie.genre.includes('Western'),
  );

  useEffect(() => {
    document.title = 'Categories';
  }, []);

  return (
    <div>
      <CategoryDropdown />
      <Outlet />

      <Carousel data={actionMovies} heading="ACTION" />
      <Carousel data={adventureMovies} heading="ADVENTURE" />
      <Carousel data={biographyMovies} heading="BIOGRAPHY" />
      <Carousel data={crimeMovies} heading="CRIME" />
      <Carousel data={dramaMovies} heading="DRAMA" />
      <Carousel data={fantasyMovies} heading="FANTASY" />
      <Carousel data={historyMovies} heading="HISTORY" />
      <Carousel data={horrorMovies} heading="HORROR" />
      <Carousel data={musicMovies} heading="MUSIC" />
      <Carousel data={mysteryMovies} heading="MYSTERY" />
      <Carousel data={romanceMovies} heading="ROMANCE" />
      <Carousel data={sciFiMovies} heading="SCI-FI" />
      <Carousel data={thrillerMovies} heading="THRILLER" />
      <Carousel data={warMovies} heading="WAR" />
      <Carousel data={westernMovies} heading="WESTERN" />
    </div>
  );
};

export default CategoryPage;
