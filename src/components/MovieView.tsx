import { useState } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import movies from '../../data/movies.json';
import slugify from '../utils/slugify';
import bookmarkSelected from '/icons/bookmark-selected.svg';
import bookmarkUnselected from '/icons/bookmark-unselected.svg';

function MovieView() {
  const [isBookmarked, setIsBookmarked] = useState(false);
  const { title } = useParams();
  const movie = movies.find((m) => slugify(m.title) === title);

  if (!movie) {
    return <div>Movie not found</div>;
  }

  function handleBookmarkClick() {
    setIsBookmarked(!isBookmarked);
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
            onClick={handleBookmarkClick}
          >
            <BookmarkIcon
              src={isBookmarked ? bookmarkSelected : bookmarkUnselected}
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
            {movie.actors.map((actor, index) => (
              <MovieCastListItem key={index}>{actor}</MovieCastListItem>
            ))}
          </MovieCastList>
        </MovieCastContainer>
      </MovieTextContainer>
    </MovieViewContainer>
  );
}

const MovieViewContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4rem;
  padding: 2rem 2rem;

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
    width: 48%;
  }

  @media (max-width: 912px) {
    flex-direction: column;
    width: 100%;
  }
`;

const MovieHeadlineBookmarkContainer = styled.div`
  display: flex;
  max-width: 98%;

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
  background-color: #434343;
  border-radius: 0.3rem;
  padding: 0.1rem 0.3rem 0.1rem 0.3rem;
  display: flex;
  justify-content: center;
  align-items: center;

  span {
    font-family: 'Oswald', sans-serif;
    color: white;
  }
`;

const MovieCastContainer = styled.div`
  display: flex;
  gap: 0.5rem;
`;

const MovieCastList = styled.ul`
  display: flex;
  list-style-type: none;
  flex-wrap: nowrap;
  margin: 0;
  padding: 0;
  gap: 0.5rem;
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

export default MovieView;
