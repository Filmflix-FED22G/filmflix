import { Outlet } from 'react-router-dom';
import { default as data } from '../../data/movies.json';
import Carousel from '../components/Carousel';
import CategoryDropdown from '../components/CategoryDropdown';

const CategoryPage: React.FC = () => {
  const dramaMovies = data.filter((movie) => movie.genre === 'Drama');
  const recommendedMovies = data.filter((movie) => !movie.isTrending);

  return (
    <div>
      <CategoryDropdown />
      <Outlet />
      <Carousel data={dramaMovies} heading="DRAMA" />
    </div>
  );
};

export default CategoryPage;
