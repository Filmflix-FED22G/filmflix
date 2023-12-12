import { useMovies } from '../contexts/MovieContext';
import { useParams } from 'react-router-dom';
import Thumbnail from './Thumbnail';
import { Movie } from '../../types/movieTypes';
import styled from 'styled-components';

function CategoryContent() {
  const { category } = useParams();
  const { movies } = useMovies();

  const capitalizeFirstLetter = (str: string) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };

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
