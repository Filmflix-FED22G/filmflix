import { useEffect, useState } from 'react';
import styled from 'styled-components';
import data from '../../data/movies.json';
import { Movie } from '../../types/movieTypes';

console.log(data);
const Carousel = () => {
  const [movies, setMovies] = useState<Movie[]>(data);

  useEffect(() => {
    setMovies(data);
  }, [data]);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % movies.length);
  };

  const handlePrev = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + movies.length) % data.length,
    );
  };

  return (
    <CarouselContainer>
      <CarouselWrapper>
        <CarouselItemsWrapper
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          <h3>Trending</h3>
          {movies.map((m, index: number) => (
            <>
              <CarouselItem key={index}>{m.title}</CarouselItem>
              <img
                style={{
                  zIndex: '10',
                  width: '20rem',
                  height: '20rem',
                  objectFit: 'cover',
                }}
                src={m.thumbnail}
                alt=""
              />
            </>
          ))}
        </CarouselItemsWrapper>
      </CarouselWrapper>
      <NavButton onClick={handlePrev}>Previous</NavButton>
      <NavButton onClick={handleNext}>Next</NavButton>
    </CarouselContainer>
  );
};

const CarouselContainer = styled.div`
  width: 100%;

  background-color: var(--color-dark-grey);
  overflow: hidden;
`;

const CarouselWrapper = styled.div`
  display: flex;
  transition: transform 0.5s ease-in-out;
`;

const CarouselItemsWrapper = styled.div`
  display: flex;
`;

const CarouselItem = styled.div`
  flex: 0 0 100%;
  box-sizing: border-box;
`;

const NavButton = styled.button`
  position: absolute;

  transform: translateY(-50%);
  background: transparent;
  border: none;
  padding: 10px;
  font-size: 16px;
  cursor: pointer;

  &:first-child {
    left: 0;
  }

  &:last-child {
    right: 0;
  }
`;

export default Carousel;
