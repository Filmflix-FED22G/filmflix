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

const CarouselWrapper = styled.div`
  background-color: var(--color-dark-grey);
  width: 100%;
  display: flex;
  padding: 1rem;
  margin: 2rem 0;
  display: flex;
  align-items: center;
  overflow-x: scroll;
`;

const Heading = styled.h4`
  font-family: 'Oswald', sans-serif;
`;

const Carousel: React.FC<CarouselProps> = ({ data, heading }) => {
  return (
    <CarouselWrapper>
      {heading && <Heading>{heading}</Heading>}
      {data.map((movie) => (
        <Thumbnail movie={movie} />
      ))}
    </CarouselWrapper>
  );
};

export default Carousel;
