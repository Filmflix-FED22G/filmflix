import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { BrowserRouter as Router } from 'react-router-dom';
import Thumbnail from '../src/components/Thumbnail';
import { MovieProvider } from '../src/contexts/MovieContext';
import HomePage from '../src/pages/HomePage';
import { Movie } from '../types/movieTypes';
import mockMovies from './mocks/mockMovies.json';

describe('Thumbnail Component', () => {
  const mockMovie: Movie = mockMovies[0];

  it('renders everything correctly', () => {
    render(
      <MovieProvider>
        <Router>
          <Thumbnail movie={mockMovie} />
        </Router>
      </MovieProvider>,
    );

    const poster = screen.getByAltText('The Shawshank Redemption poster');
    expect(
      screen.getByAltText('Loading placeholder image'),
    ).toBeInTheDocument();
    fireEvent.load(poster);
    expect(
      screen.queryByAltText('Loading placeholder image'),
    ).not.toBeInTheDocument();
    expect(poster).toBeInTheDocument();

    expect(screen.getByText('The Shawshank Redemption')).toBeInTheDocument();
    expect(screen.getByText('1994')).toBeInTheDocument();
    expect(screen.getByText('R')).toBeInTheDocument();
    expect(screen.getByAltText('Bookmark icon')).toBeInTheDocument();
  });

  it('renders error placeholder when image fails to load', () => {
    render(
      <MovieProvider>
        <Router>
          <Thumbnail movie={mockMovie} />
        </Router>
      </MovieProvider>,
    );

    const poster = screen.getByAltText('The Shawshank Redemption poster');
    expect(
      screen.getByAltText('Loading placeholder image'),
    ).toBeInTheDocument();
    fireEvent.error(poster);
    expect(
      screen.queryByAltText('Loading placeholder image'),
    ).not.toBeInTheDocument();
    expect(
      screen.getByAltText('Error fetching the The Shawshank Redemption poster'),
    ).toBeInTheDocument();
    expect(poster.style.display).toBe('none');

    expect(screen.getByText('The Shawshank Redemption')).toBeInTheDocument();
    expect(screen.getByText('1994')).toBeInTheDocument();
    expect(screen.getByText('R')).toBeInTheDocument();
    expect(screen.getByAltText('Bookmark icon')).toBeInTheDocument();
  });

  it('switches between unselected and selected bookmark icon on click', async () => {
    render(
      <MovieProvider>
        <Router>
          <HomePage />
        </Router>
      </MovieProvider>,
    );

    const user = userEvent.setup();
    const bookmarkIcon = screen.getAllByAltText('Bookmark icon');
    const bookmarkButtons = screen.getAllByRole('button', {
      name: 'Bookmark button',
    });

    expect(bookmarkIcon[0]).toHaveAttribute(
      'src',
      '/icons/bookmark-unselected.svg',
    );

    await user.click(bookmarkButtons[0]);
    await waitFor(() =>
      expect(bookmarkIcon[0]).toHaveAttribute(
        'src',
        '/icons/bookmark-selected.svg',
      ),
    );

    await user.click(bookmarkButtons[0]);
    await waitFor(() =>
      expect(bookmarkIcon[0]).toHaveAttribute(
        'src',
        '/icons/bookmark-unselected.svg',
      ),
    );
  });

  it('navigates to details page when clicked', async () => {
    render(
      <MovieProvider>
        <Router>
          <Thumbnail movie={mockMovie} />
        </Router>
      </MovieProvider>,
    );

    const user = userEvent.setup();
    const thumbnail = screen.getByRole('link');

    await user.click(thumbnail);

    expect(window.location.pathname).toBe('/details/the-shawshank-redemption');
  });
});
