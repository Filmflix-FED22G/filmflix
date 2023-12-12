import { Outlet } from 'react-router-dom';
import { default as data } from '../../data/movies.json';
import Carousel from '../components/Carousel';
import CategoryDropdown from '../components/CategoryDropdown';

const CategoryPage: React.FC = () => {
  const actionMovies = data.filter((movie) => movie.genre.includes('Action'));
  const adventureMovies = data.filter((movie) =>
    movie.genre.includes('Adventure'),
  );
  const biographyMovies = data.filter((movie) =>
    movie.genre.includes('Biography'),
  );
  const crimeMovies = data.filter((movie) => movie.genre.includes('Crime'));
  const dramaMovies = data.filter((movie) => movie.genre.includes('Drama'));
  const fantasyMovies = data.filter((movie) => movie.genre.includes('Fantasy'));
  const historyMovies = data.filter((movie) => movie.genre.includes('History'));
  const horrorMovies = data.filter((movie) => movie.genre.includes('Horror'));
  const musicMovies = data.filter((movie) => movie.genre.includes('Music'));
  const mysteryMovies = data.filter((movie) => movie.genre.includes('Mystery'));
  const romanceMovies = data.filter((movie) => movie.genre.includes('Romance'));
  const sciFiMovies = data.filter((movie) => movie.genre.includes('Sci-Fi'));
  const thrillerMovies = data.filter((movie) =>
    movie.genre.includes('Thriller'),
  );
  const warMovies = data.filter((movie) => movie.genre.includes('War'));
  const westernMovies = data.filter((movie) => movie.genre.includes('Western'));

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
