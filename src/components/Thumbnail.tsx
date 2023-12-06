import styled from 'styled-components';

export default function Thumbnail({ movie }: { movie: any }) {
  return (
    <ThumbnailContainer>
      <MovieThumbnail src={movie.thumbnail} alt={movie.title + ' poster'} />
      <TitleContainer>
        <Title>{movie.title}</Title>
        <BookmarkIcon></BookmarkIcon>
      </TitleContainer>
    </ThumbnailContainer>
  );
}

const ThumbnailContainer = styled.div`
  width: 16rem;
  margin: 1rem;
  display: flex;
  flex-direction: column;
`;

const MovieThumbnail = styled.img`
  object-fit: cover;

  &:hover {
    cursor: pointer;
    opacity: 0.7;
  }
`;

const TitleContainer = styled.div`
  padding: 1rem 0.5rem 1rem 0.5rem;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  background-color: #1c1c1c;
`;

const Title = styled.h3`
  font-size: 1.2rem;
  color: white;
`;

const BookmarkIcon = styled.div`
  width: 1.5rem;
  height: 1.5rem;
  aspect-ratio: 1/1;
  background-color: white;
  border-radius: 50%;
  margin-left: 2.5rem;
`;