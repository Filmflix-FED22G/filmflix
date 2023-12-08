import { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import bookmarkSelected from '/icons/bookmark-selected.svg';
import bookmarkUnselected from '/icons/bookmark-unselected.svg';
import slugify from '../utils/slugify';
import { Movie } from '../../types/movieTypes';

export default function Thumbnail({ movie }: { movie: Movie }) {
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [imageStatus, setImageStatus] = useState<
    'loading' | 'loaded' | 'error'
  >('loading');

  const movieSlug = slugify(movie.title);

  function handleMovieClick() {
    // TODO: set state for movie to render in details page
  }

  function handleBookmarkClick() {
    setIsBookmarked(!isBookmarked);
  }

  return (
    <ThumbnailContainer>
      {imageStatus === 'loading' && (
        <PlaceholderImage aria-label="Loading placeholder">
          <h5>Loading...</h5>
        </PlaceholderImage>
      )}
      {imageStatus === 'error' && (
        <PlaceholderImage
          aria-label={`Error placeholder for failing to fetch the ${movie.title} poster`}
        >
          <h2>Poster not found</h2>
        </PlaceholderImage>
      )}
      <Link to={`/details/${movieSlug}`}>
        <MovieThumbnail
          onLoad={() => setImageStatus('loaded')}
          onError={() => setImageStatus('error')}
          onClick={handleMovieClick}
          src={movie.thumbnail}
          alt={movie.title + ' poster'}
          style={{
            display: imageStatus === 'loaded' ? 'block' : 'none',
          }}
        />
      </Link>
      <SecondaryInfoContainer>
        <p>{movie.year}</p>
        <RatingBadge>
          <span>{movie.rating}</span>
        </RatingBadge>
        <BookmarkButton aria-label="Bookmark button" role="button" onClick={handleBookmarkClick}>
          <BookmarkIcon
            src={isBookmarked ? bookmarkSelected : bookmarkUnselected}
            alt="Bookmark icon"
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
  margin: 1rem;
`;

const MovieThumbnail = styled.img`
  height: 24rem;
  width: 100%;
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
  text-align: center;
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
