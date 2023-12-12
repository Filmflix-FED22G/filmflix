import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { Movie } from '../../types/movieTypes';
import { useMovies } from '../contexts/MovieContext';
import Thumbnail from './Thumbnail';

//This component renders the movies in the selected category
function CategoryContent() {
  const { category } = useParams();
  const { movies } = useMovies();

  //Capitalizes the first letter of the category name
  const capitalizeFirstLetter = (str: string) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };

  //Filters the movies based on the category
  const moviesInCategory = category
    ? movies.filter((movie: Movie) =>
        movie.genre.toLowerCase().includes(category.toLowerCase()),
      )
    : [];

  return (
    <Container>
      <Title>{category ? capitalizeFirstLetter(category) : 'Category'}</Title>
      <MovieGrid>
        {moviesInCategory.map((movie: Movie) => (
          <Thumbnail key={movie.title} movie={movie} />
        ))}
      </MovieGrid>
    </Container>
  );
}

export default CategoryContent;

//Styling for the CategoryContent component
const Container = styled.div`
  margin: 3rem 2rem;
  max-width: 120rem;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(12rem, 12rem));
  grid-gap: 2rem;
  justify-content: center;
`;

const Title = styled.h1`
  grid-column: 1 / -1;
  text-align: left;
  padding: 2rem 0;
  @media (max-width: 929px) {
    text-align: center;
  }
`;

const MovieGrid = styled.div`
  grid-column: 1 / -1;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(12rem, 12rem));
  grid-gap: 4rem 2rem;
`;
