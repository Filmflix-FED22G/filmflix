import { useEffect } from 'react';
import styled from 'styled-components';
import movies from '../../data/movies.json';
import { Movie } from '../../types/movieTypes';
import Thumbnail from '../components/Thumbnail';

function BookmarkPage() {
  useEffect(() => {
    document.title = 'Bookmarks';
  }, []);
  return (
    <Container>
      <Title>Bookmarks</Title>
      <MovieGrid>
        {movies.map((movie: Movie) => (
          <Thumbnail key={movie.title} movie={movie} />
        ))}
      </MovieGrid>
    </Container>
  );
}

export default BookmarkPage;

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
  grid-gap: 2rem;
`;
