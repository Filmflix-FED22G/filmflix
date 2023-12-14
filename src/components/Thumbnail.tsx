import { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Movie } from '../../types/movieTypes';
import { useMovies } from '../contexts/MovieContext';
import slugify from '../utils/slugify';
import bookmarkSelected from '/icons/bookmark-selected.svg';
import bookmarkUnselected from '/icons/bookmark-unselected.svg';
import brokenImage from '/img/broken-image.png';

export default function Thumbnail({ movie }: { movie: Movie }) {
  const [imageStatus, setImageStatus] = useState<
    'loading' | 'loaded' | 'error'
  >('loading');

  const { toggleBookmark } = useMovies();

  const movieSlug = slugify(movie.title);

  return (
    <ThumbnailContainer>
      <Link to={`/details/${movieSlug}`}>
        {imageStatus === 'loading' && (
          <PlaceholderImage aria-label="Loading placeholder">
            <h5>Loading...</h5>
          </PlaceholderImage>
        )}
        {imageStatus === 'error' && (
          <MovieThumbnail
            src={brokenImage}
            alt={movie.title + ' poster'}
            style={{ display: 'block' }}
          />
        )}
        <MovieThumbnail
          onLoad={() => setImageStatus('loaded')}
          onError={() => setImageStatus('error')}
          src={movie.thumbnail}
          alt={movie.title + ' poster'}
          style={{ display: imageStatus === 'loaded' ? 'block' : 'none' }}
        />
      </Link>
      <SecondaryInfoContainer>
        <p>{movie.year}</p>
        <RatingBadge>
          <span>{movie.rating}</span>
        </RatingBadge>
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
      </SecondaryInfoContainer>
      <h5>{movie.title}</h5>
    </ThumbnailContainer>
  );
}

const ThumbnailContainer = styled.div`
  width: 12rem;
  max-width: 12rem;
  display: flex;
  flex-direction: column;
`;

const MovieThumbnail = styled.img`
  height: 17rem;
  min-height: 17rem;
  width: 12rem;
  max-width: 12rem;
  object-fit: cover;
  margin-bottom: 0.5rem;
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
  width: 12rem;
  height: 17rem;
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
  margin: 0 0 0.1rem 0;

  p {
    margin: 0.2rem 0.5rem 0 0;
    font-size: 0.7rem;
  }
`;

const RatingBadge = styled.div`
  user-select: none;
  height: 1rem;
  background-color: #434343;
  border-radius: 0.3rem;
  padding: 0.2rem 0.3rem 0 0.3rem;
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
