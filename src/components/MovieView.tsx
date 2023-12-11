import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import movies from '../../data/movies.json';
import slugify from '../utils/slugify';

function MovieView() {
  const { title } = useParams();
  const movie = movies.find((m) => slugify(m.title) === title);

  if (!movie) {
    return <div>Movie not found</div>;
  }

  return (
    <MovieViewContainer>
      <MovieViewThumbnail src={movie.thumbnail} alt={movie.title + ' poster'} />
      <MovieViewTextContainer>
        <h4>{movie.title}</h4>
        <MovieViewYearRatingGenreContainer>
          <MovieYearRatingGenreText>{movie.year}</MovieYearRatingGenreText>
          <MovieYearRatingGenreText>{movie.rating}</MovieYearRatingGenreText>
          <MovieYearRatingGenreText>{movie.genre}</MovieYearRatingGenreText>
        </MovieViewYearRatingGenreContainer>
        <p>{movie.synopsis}</p>
        <MovieViewCastContainer>
          <h5>Cast:</h5>
          <MovieViewCastList>
            {movie.actors.map((actor, index) => (
              <MovieViewCastListItem key={index}>{actor}</MovieViewCastListItem>
            ))}
          </MovieViewCastList>
        </MovieViewCastContainer>
      </MovieViewTextContainer>
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

const MovieViewThumbnail = styled.img`
  width: 30%;

  @media (max-width: 912px) {
    width: 100%;
  }
`;

const MovieViewTextContainer = styled.div`
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

const MovieViewYearRatingGenreContainer = styled.div`
  display: flex;
  gap: 1rem;
`;

const MovieYearRatingGenreText = styled.p`
  font-family: 'Oswald', sans-serif;
`;

const MovieViewCastContainer = styled.div`
  display: flex;
  gap: 0.5rem;
`;

const MovieViewCastList = styled.ul`
  display: flex;
  list-style-type: none;
  flex-wrap: nowrap;
  margin: 0;
  padding: 0;
  gap: 0.5rem;
`;

const MovieViewCastListItem = styled.li`
  list-style-type: none;
  font-size: var(--font-size-s);
  padding-left: 0;
  &:not(:last-child):after {
    content: ', ';
  }
`;

export default MovieView;
