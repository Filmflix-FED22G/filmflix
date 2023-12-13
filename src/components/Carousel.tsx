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
  padding: var(--default-padding-left-right);
  margin: var(--default-margin-top-bottom) 0;
  display: flex;
  flex-direction: column;

  @media (min-width: 913px) {
    padding: var(--default-padding-left-right-tablet);
    flex-direction: row;
    justify-content: left;
  }

  @media (max-width: 420px) {
    padding: var(--default-padding-left-right-mobile);
  }
`;

const CarouselHeading = styled.div`
  display: flex;
  min-width: 15rem;

  @media screen and (max-width: 912px) {
    display: none;
  }
`;

const CarouselHeadingMobile = styled.div`
  display: none;

  @media screen and (max-width: 912px) {
    display: flex;
    width: 100%;
    justify-content: center;
    align-items: center;
  }
`;
const MoviesWrapper = styled.div`
  display: flex;
  gap: 2rem;
  overflow-x: auto;
  padding: 2rem 0;
  scrollbar-gutter: stable;
`;

const Heading = styled.h3`
  display: flex;
  align-items: center;
  font-family: 'Oswald', sans-serif;
`;

export default Carousel;
