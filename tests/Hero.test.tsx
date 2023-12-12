import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import {
  MemoryRouter,
  Route,
  BrowserRouter as Router,
  Routes,
} from 'react-router-dom';
import movies from '../data/movies.json';
import Hero from '../src/components/Hero';
import MovieView from '../src/components/MovieView';

describe('Hero', () => {
  const mockMovie = movies[30]; // Using movie Interstellar as mockMovie since it's featured in the Hero

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

  test('should navigate to the correct movie details page on link click', async () => {
    const user = userEvent.setup();

    render(
      <MemoryRouter initialEntries={['/']}>
        <Routes>
          <Route path="/" element={<Hero movie={mockMovie} />} />
          <Route path="/details/:title" element={<MovieView />} />
        </Routes>
      </MemoryRouter>,
    );

    const viewMoreLink = screen.getByRole('link', { name: /view more/i });
    await user.click(viewMoreLink);

    // Check if the component for movie details is rendered
    expect(screen.getByText('Interstellar')).toBeInTheDocument();
    expect(screen.getByText('2014')).toBeInTheDocument();
    expect(
      screen.getByText(
        'When Earth becomes uninhabitable in the future, a farmer and ex-NASA pilot, Joseph Cooper, is tasked to pilot a spacecraft, along with a team of researchers, to find a new planet for humans.',
      ),
    ).toBeInTheDocument();
  });
});
