import React from 'react';
import styled from 'styled-components';

interface CarouselProps {
  data: Movie[];
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
  padding: 2rem;
`;
const CarouselHeading = styled.h3`
  margin-top: 0;
  margin-bottom: 1rem;
  font-family: 'Oswald', sans-serif;
`;
const CarouselImage = styled.img`
  height: 15rem;
  padding: 0.5rem;
`;

const Carousel: React.FC<CarouselProps> = ({ data }) => {
  return (
    <CarouselWrapper>
      {data.map((movie, index) => (
        // Render each movie item in the carousel
        <div key={index}>
          <CarouselImage src={movie.thumbnail} alt={movie.title} />
          <p>{movie.title}</p>
          <p>{movie.year}</p>
          <p>{movie.rating}</p>
        </div>
      ))}
    </CarouselWrapper>
  );
};

export default Carousel;
