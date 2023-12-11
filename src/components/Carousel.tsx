import React from 'react';
import styled from 'styled-components';
import Thumbnail from './Thumbnail';

interface CarouselProps {
  data: Movie[];
  heading?: string;
}

interface Movie {
  title: string;
  year: number;
  rating: string;
  actors: string[];
  genre: string;
  synopsis: string;
  thumbnail: string;
  isTrending?: boolean;
}

const Carousel: React.FC<CarouselProps> = ({ data, heading }) => {
  return (
    <CarouselWrapper>
      <CarouselHeading>
        {heading && <Heading>{heading}</Heading>}
      </CarouselHeading>
      <MoviesWrapper data-testid="movies-wrapper">
        {data.map((movie) => (
          <Thumbnail movie={movie} />
        ))}
      </MoviesWrapper>
    </CarouselWrapper>
  );
};

const CarouselWrapper = styled.div`
  background-color: var(--color-dark-grey);
  width: 100%;
  display: flex;
  padding: 1rem;
  margin: 2rem 0;
  display: flex;
`;

const CarouselHeading = styled.div`
  display: flex;
  min-width: 15rem;

  @media screen and (max-width: 760px) {
    display: none;
  }
`;

const MoviesWrapper = styled.div`
  display: flex;
  overflow-x: scroll;
  padding-left: 0;
`;

const Heading = styled.h4`
  font-family: 'Oswald', sans-serif;
  padding: 2rem;
  display: flex;
  align-items: center;
`;

export default Carousel;
