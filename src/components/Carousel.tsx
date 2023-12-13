import React from 'react';
import styled from 'styled-components';
import { Movie } from '../../types/movieTypes';
import Thumbnail from './Thumbnail';

interface CarouselProps {
  data: Movie[];
  heading?: string;
}

const Carousel: React.FC<CarouselProps> = ({ data, heading }) => {
  return (
    <CarouselWrapper>
      <CarouselHeading>
        {heading && <Heading>{heading}</Heading>}
      </CarouselHeading>
      <CarouselHeadingMobile>
        {heading && <Heading>{heading}</Heading>}
      </CarouselHeadingMobile>
      <MoviesWrapper data-testid="movies-wrapper">
        {data.map((movie, index) => (
          <Thumbnail key={index} movie={movie} />
        ))}
      </MoviesWrapper>
    </CarouselWrapper>
  );
};

const CarouselWrapper = styled.div`
  background-color: var(--color-dark-grey);
  width: 100%;
  padding: var(--default-padding-top-bottom) var(--default-padding-left-right);
  margin: var(--default-margin-top-bottom) 0;
  display: flex;
  flex-direction: column;
  gap: 2rem;

  @media screen and (min-width: 760px) {
    flex-direction: row;
    justify-content: left;
  }
`;

const CarouselHeading = styled.div`
  display: flex;
  min-width: 14rem;

  @media screen and (max-width: 760px) {
    display: none;
  }
`;

const CarouselHeadingMobile = styled.div`
  display: none;

  @media screen and (max-width: 760px) {
    display: flex;
    width: 100%;
    justify-content: center;
    align-items: center;
  }
`;
const MoviesWrapper = styled.div`
  display: flex;
  overflow-x: scroll;
  padding-left: 0;
  gap: 2rem;
`;

const Heading = styled.h3`
  font-family: 'Oswald', sans-serif;
  display: flex;
  align-items: center;
`;

export default Carousel;
