import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import movies from '../data/movies.json';
import Hero from '../src/components/Hero';

describe('Hero', () => {
  const mockMovie = movies[30];

  test('should render the correct movie title', () => {
    render(
      <Router>
        <Hero movie={mockMovie} />
      </Router>,
    );
    expect(screen.getByText(mockMovie.title)).toBeInTheDocument();
  });

  test('should render the correct movie quote', () => {
    render(
      <Router>
        <Hero movie={mockMovie} />
      </Router>,
    );

    expect(
      screen.getByText(
        "We're not meant to save the world. We're meant to leave it.",
      ),
    ).toBeInTheDocument();
  });
});
