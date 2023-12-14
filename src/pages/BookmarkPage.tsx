import { useEffect } from 'react';
import styled from 'styled-components';
import { Movie } from '../../types/movieTypes';
import Thumbnail from '../components/Thumbnail';
import { useMovies } from '../contexts/MovieContext';

function BookmarkPage() {
  const { movies } = useMovies();

  useEffect(() => {
    document.title = 'Bookmarks';
  }, []);

  // Filter bookmarked movies
  const bookmarkedMovies = movies.filter((movie: Movie) => movie.isBookmarked);

  return (
    <>
      {bookmarkedMovies.length > 0 ? (
        <Container>
          <Title>Bookmarks</Title>
          <MovieGrid>
            {bookmarkedMovies.map((movie: Movie) => (
              <Thumbnail key={movie.title} movie={movie} />
            ))}
          </MovieGrid>
        </Container>
      ) : (
        <NoBookmarksContainer>No bookmarks found!</NoBookmarksContainer>
      )}
    </>
  );
}

export default BookmarkPage;

const Container = styled.div`
  margin: var(--default-margin-top-bottom) var(--default-margin-left-right);
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(12rem, 12rem));
  grid-gap: 2rem;
  justify-content: center;
`;

const Title = styled.h2`
  grid-column: 1 / -1;
  text-align: left;
  padding: 0;
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

const NoBookmarksContainer = styled.h2`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 30rem;
`;
