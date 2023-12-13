import { fireEvent, render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import movies from '../data/movies.json';
import Carousel from '../src/components/Carousel';
import { MovieProvider } from '../src/contexts/MovieContext';

describe('Carousel Component', () => {
  it('renders correctly with mock data', () => {
    render(
      <MovieProvider>
        <Router>
          <Carousel data={movies} />
        </Router>
      </MovieProvider>,
    );
    const thumbnails = screen.getAllByRole('img');
    expect(thumbnails).toHaveLength(movies.length);
  });

  it('triggers scroll event on user interaction', () => {
    render(
      <MovieProvider>
        <Router>
          <Carousel data={movies} />
        </Router>
      </MovieProvider>,
    );

    const moviesWrapper = screen.getByTestId('movies-wrapper');

    // Mock the scroll event
    fireEvent.scroll(moviesWrapper, { target: { scrollLeft: 100 } });

    // Check if the scroll event has been triggered
    expect(moviesWrapper.scrollLeft).toBe(100);
  });
});
