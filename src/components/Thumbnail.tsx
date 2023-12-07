import { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import bookmarkSelected from '../../public/icons/bookmark-selected.svg';
import bookmarkUnselected from '../../public/icons/bookmark-unselected.svg';
import slugify from '../utils/slugify';

export default function Thumbnail({ movie }: { movie: any }) {
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [isLoading, setLoading] = useState(true);
  const [isError, setError] = useState(false);

  const movieSlug = slugify(movie.title);

  function handleMovieClick() {
    // TODO: set state for movie to render in details page
  }

  function handleBookmarkClick() {
    setIsBookmarked(!isBookmarked);
  }

  function handleImageError() {
    setLoading(false);
    setError(true);
  }

  return (
    <ThumbnailContainer>
      {isLoading && (
        <PlaceholderImage>
          <h3>Loading...</h3>
        </PlaceholderImage>
      )}
      {isError && (
        <PlaceholderImage>
          <h3>Image not found</h3>
        </PlaceholderImage>
      )}
      <Link to={`/details/${movieSlug}`}>
        <MovieThumbnail
          onLoad={() => setLoading(false)}
          onError={handleImageError}
          onClick={handleMovieClick}
          src={movie.thumbnail}
          alt={movie.title + ' poster'}
          style={{ display: isLoading || isError ? 'none' : 'block' }}
        />
      </Link>
      <SecondaryInfoContainer>
        <p>{movie.year}</p>
        <RatingBadge>
          <span>{movie.rating}</span>
        </RatingBadge>
        <BookmarkButton aria-role="button" onClick={handleBookmarkClick}>
          <BookmarkIcon
            src={isBookmarked ? bookmarkSelected : bookmarkUnselected}
            alt="Bookmark button"
          ></BookmarkIcon>
        </BookmarkButton>
      </SecondaryInfoContainer>
      <h4>{movie.title}</h4>
    </ThumbnailContainer>
  );
}

const ThumbnailContainer = styled.div`
  width: 16rem;
  display: flex;
  flex-direction: column;
  margin: 0 2rem 3rem 0;
`;

const MovieThumbnail = styled.img`
  height: 24rem;
  object-fit: cover;
  margin-bottom: 0.5rem;
  transition: 0.2s ease-in-out;
  user-select: none;

  &:hover {
    cursor: pointer;
    opacity: 0.6;
  }

  &:active {
    transform: scale(0.98);
  }
`;

const PlaceholderImage = styled.div`
  width: 100%;
  height: 24rem;
  background-color: #434343;
  margin-bottom: 0.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  user-select: none;
`;

const SecondaryInfoContainer = styled.div`
  display: flex;
  align-items: center;

  p {
    margin: 0.2rem 0.5rem 0 0;
  }
`;

const RatingBadge = styled.div`
  user-select: none;
  height: 1rem;
  background-color: #434343;
  border-radius: 0.3rem;
  padding: 0.2rem 0.3rem 0.1rem 0.3rem;
  display: flex;
  justify-content: center;
  align-items: center;

  span {
    font-size: 0.6rem;
    color: white;
  }
`;

const BookmarkButton = styled.div`
  width: 1.3rem;
  height: 1.3rem;
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
