import { useEffect, useState } from 'react';
import styled from 'styled-components';
import data from '../../data/movies.json';
import { Movie } from '../../types/movieTypes';

const Carousel = () => {
  const trendingMovies = data.filter((movie) => movie.isTrending === true);
  console.log('trendingMovies: ', trendingMovies);
  const [movies, setMovies] = useState<Movie[]>(trendingMovies);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    setMovies(trendingMovies);
  }, [data]);

  const handleNext = () => {
    if (currentIndex > movies.length) {
      return setCurrentIndex(0);
    }
    setCurrentIndex((prevIndex) => (prevIndex + 3) % movies.length);
  };

  const handlePrev = () => {
    if (currentIndex === 0) return;
    setCurrentIndex((prevIndex) => (prevIndex - 3) % movies.length);
  };
  const itemsPerPage = 3;

  return (
    <CarouselContainer>
      <CarouselWrapper>
        <CarouselHeading>TRENDING</CarouselHeading>
        <CarouselItemsWrapper>
          <NavButton onClick={handlePrev}>Previous</NavButton>
          {movies
            .slice(currentIndex, currentIndex + itemsPerPage)
            .map((m, index: number) => (
              <CarouselItem key={index}>
                <img
                  style={{
                    zIndex: '10',
                    height: '17rem',
                    width: '100%',
                  }}
                  src={m.thumbnail}
                  alt=""
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src =
                      'https://static.vecteezy.com/system/resources/thumbnails/022/059/000/small/no-image-available-icon-vector.jpg';
                  }}
                />
                <CarouselFilmTitle>{m.title}</CarouselFilmTitle>
              </CarouselItem>
            ))}
          <NavButton onClick={handleNext}>Next</NavButton>
        </CarouselItemsWrapper>
      </CarouselWrapper>
    </CarouselContainer>
  );
};

const CarouselContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  background-color: var(--color-dark-grey);
  overflow: hidden;
`;

const CarouselWrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 2rem;
  transition: transform 0.5s ease-in-out;
  width: 100%;
`;

const CarouselItemsWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  gap: 2rem;
  width: 100%;
`;

const CarouselItem = styled.div`
  width: 10rem;
  box-sizing: border-box;
`;
const CarouselHeading = styled.h3`
  margin-top: 0;
  margin-bottom: 1rem;
  font-family: 'Oswald', sans-serif;
`;
const CarouselFilmTitle = styled.p`
  margin: 0;
  font-size: 0.75rem;
`;

const NavButton = styled.button`
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
