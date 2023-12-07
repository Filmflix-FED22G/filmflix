import movies from '../../data/movies.json';
import { useParams } from 'react-router-dom';

function CategoryContent() {
  const { category } = useParams();

  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  const moviesInCategory = category
    ? movies.filter((movie) =>
        movie.genre.toLowerCase().includes(category.toLowerCase()),
      )
    : [];

  return (
    <div>
      <h4>{capitalizeFirstLetter(category)}</h4>
      {moviesInCategory.map((movie) => (
        <div key={movie.title}>
          <h5>{movie.title}</h5>
        </div>
      ))}
    </div>
  );
}

export default CategoryContent;
