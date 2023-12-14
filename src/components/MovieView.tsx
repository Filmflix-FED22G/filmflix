import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import styled from 'styled-components';
import { Movie } from '../../types/movieTypes';
import { useMovies } from '../contexts/MovieContext';
import slugify from '../utils/slugify';
import bookmarkSelected from '/icons/bookmark-selected.svg';
import bookmarkUnselected from '/icons/bookmark-unselected.svg';

// Renders the movie details when a user clicks on a movie thumbnail on the website
function MovieView() {
  const { title } = useParams();
  const { movies, toggleBookmark } = useMovies();
  const movie = movies.find((m: Movie) => slugify(m.title) === title);
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1); // This will take the user back to the previous page
  };

  useEffect(() => {
    if (movie) {
      document.title = `${movie.title}`;
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!movie) {
    return <div>Movie not found</div>;
  }

  return (
    <MovieViewContainer>
      <MovieImage src={movie.thumbnail} alt={movie.title + ' poster'} />
      <MovieTextContainer>
        <MovieHeadlineBookmarkContainer>
          <h4>{movie.title}</h4>
          <BookmarkButton
            aria-label="Bookmark button"
            role="button"
            onClick={() => toggleBookmark(movie)}
          >
            <BookmarkIcon
              src={movie.isBookmarked ? bookmarkSelected : bookmarkUnselected}
              alt="Bookmark icon"
            ></BookmarkIcon>
          </BookmarkButton>
        </MovieHeadlineBookmarkContainer>
        <MovieYearRatingGenreContainer>
          <MovieYearRatingGenreText>{movie.year}</MovieYearRatingGenreText>
          <RatingBadge>
            <span>{movie.rating}</span>
          </RatingBadge>
          <MovieYearRatingGenreText>{movie.genre}</MovieYearRatingGenreText>
        </MovieYearRatingGenreContainer>
        <p>{movie.synopsis}</p>
        <MovieCastContainer>
          <h5>Cast:</h5>
          <MovieCastList>
            {movie.actors.map((actor: string, index: number) => (
              <MovieCastListItem key={index}>{actor}</MovieCastListItem>
            ))}
          </MovieCastList>
        </MovieCastContainer>
        <BackButton onClick={goBack}>Go back</BackButton>
      </MovieTextContainer>
    </MovieViewContainer>
  );
}

export default MovieView;

const MovieViewContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4rem;
  padding: var(--default-padding-top-bottom) var(--default-padding-left-right);

  @media (max-width: 912px) {
    flex-direction: column;
    gap: 2rem;
  }
`;

const MovieImage = styled.img`
  width: 30%;

  @media (max-width: 912px) {
    width: 100%;
  }
`;

const MovieTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  width: 25%;

  @media (max-width: 1920px) {
    flex-direction: column;
    width: 30%;
  }

  @media (max-width: 1440px) {
    flex-direction: column;
    width: 38%;
  }

  @media (max-width: 912px) {
    flex-direction: column;
    width: 100%;
  }
`;

const MovieHeadlineBookmarkContainer = styled.div`
  display: flex;
  max-width: 100%;

  @media (max-width: 912px) {
    max-width: 100%;
  }
`;

const MovieYearRatingGenreContainer = styled.div`
  display: flex;
  gap: 1rem;
`;

const MovieYearRatingGenreText = styled.p`
  font-family: 'Oswald', sans-serif;
  display: flex;
  align-items: center;
`;

const RatingBadge = styled.div`
  user-select: none;
  height: 2rem;
  background-color: var(--color-grey);
  border-radius: 0.3rem;
  padding: 0.1rem 0.3rem 0.1rem 0.3rem;
  display: flex;
  justify-content: center;
  align-items: center;

  span {
    font-family: 'Oswald', sans-serif;
    color: var(--color-light);
  }
`;

const MovieCastContainer = styled.div`
  display: flex;
  gap: 0.5rem;

  @media (max-width: 540px) {
    flex-direction: column;
  }
`;

const MovieCastList = styled.ul`
  display: flex;
  list-style-type: none;
  flex-wrap: nowrap;
  margin: 0;
  padding: 0;
  gap: 0.5rem;

  @media (max-width: 540px) {
    flex-direction: column;
  }
`;

const MovieCastListItem = styled.li`
  list-style-type: none;
  font-size: var(--font-size-s);
  padding-left: 0;
  &:not(:last-child):after {
    content: ', ';
  }
`;

const BookmarkButton = styled.div`
  width: 1.7rem;
  height: 1.7rem;
  margin: 0 0 0 auto;
  display: flex;
  user-select: none;
`;

const BookmarkIcon = styled.img`
  transition: 0.1s ease-in-out;

  &:hover {
    cursor: pointer;
    opacity: 0.6;
  }
  &:active {
    transform: scale(0.9);
  }
`;

const BackButton = styled.button`
  background-color: var(--color-dark-grey);
  color: var(--color-light);
  padding: 0.8rem 1.2rem 0.5rem 1.2rem;
  transition: background-color 0.3s;
  border: none;
  max-width: fit-content;

  &:hover {
    background-color: var(--color-grey); // Slightly darker on hover
  }
`;
