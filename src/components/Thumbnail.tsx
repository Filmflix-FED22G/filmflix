import styled from 'styled-components';
import magnifyingGlass from '../../public/icons/bookmark-selected.svg';

export default function Thumbnail({ movie }: { movie: any }) {
  return (
    <ThumbnailContainer>
      <MovieThumbnail src={movie.thumbnail} alt={movie.title + ' poster'} />
      <SecondaryInfoContainer>
        <p>{movie.year}</p>
        <RatingBadge>
          <span>{movie.rating}</span>
        </RatingBadge>
        <BookmarkIcon src={magnifyingGlass}></BookmarkIcon>
      </SecondaryInfoContainer>
      <TitleContainer>
        <Title>{movie.title}</Title>
      </TitleContainer>
    </ThumbnailContainer>
  );
}

const ThumbnailContainer = styled.div`
  width: 16rem;
  margin: 1rem;
  display: flex;
  margin: 0.4rem;
  flex-direction: column;
`;

const MovieThumbnail = styled.img`
  object-fit: cover;
  margin-bottom: 0.5rem;

  &:hover {
    cursor: pointer;
    opacity: 0.7;
  }
`;

const SecondaryInfoContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;

  p {
    padding-top: 3px;
  }
`;

const RatingBadge = styled.div`
  height: 1rem;
  background-color: #434343;
  border-radius: 0.3rem;
  margin-left: 0.5rem;
  padding: 0.2rem 0.3rem 0.1rem 0.3rem;
  display: flex;
  justify-content: center;
  align-items: center;

  span {
    font-size: 0.6rem;
    color: white;
    line-height: 1;
  }
`;

const TitleContainer = styled.div`
  padding: 0rem 0rem 0.2rem 0rem;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
`;

const Title = styled.h3`
  font-size: 1.2rem;
  color: white;
`;

const BookmarkIcon = styled.img`
  width: 1.3rem;
  height: 1.3rem;
  margin: 0 0 0 auto;
  &:hover {
    cursor: pointer;
    opacity: 0.7;
  }
`;
