import styled from 'styled-components';

export default function Thumbnail({ movie }: { movie: any }) {
  return (
    <>
      <MovieThumbnail src={movie.thumbnail} alt={movie.title} />
      <div>{movie.title}</div>
    </>
  );
}

const MovieThumbnail = styled.img`
  width: 10rem;
  object-fit: cover;
`;
