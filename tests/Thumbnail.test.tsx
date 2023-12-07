import { fireEvent, render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import movies from '../data/movies.json';
import Thumbnail from '../src/components/Thumbnail';
import { Movie } from '../types/movieTypes';
import userEvent from "@testing-library/user-event";

describe('Thumbnail Component', () => {
  const mockMovie: Movie = movies[0];

  it('renders everything correctly', () => {
    render(
      <Router>
        <Thumbnail movie={mockMovie} />
      </Router>,
    );

    const poster = screen.getByAltText('The Shawshank Redemption poster');
    expect(screen.getByText('Loading...')).toBeInTheDocument();
    fireEvent.load(poster)
    expect(screen.queryByText('Loading...')).not.toBeInTheDocument();
    expect(poster).toBeInTheDocument();

    expect(screen.getByText('The Shawshank Redemption')).toBeInTheDocument();
    expect(screen.getByText('1994')).toBeInTheDocument();
    expect(screen.getByText('R')).toBeInTheDocument();
    expect(screen.getByAltText('Bookmark icon')).toBeInTheDocument();
  });

  it('renders error placeholder when image fails to load', () => {
    render(
      <Router>
        <Thumbnail movie={mockMovie} />
      </Router>,
    );

    const poster = screen.getByAltText('The Shawshank Redemption poster');
    expect(screen.getByText('Loading...')).toBeInTheDocument();
    fireEvent.error(poster)
    expect(screen.queryByText('Loading...')).not.toBeInTheDocument();
    expect(screen.getByText('Image not found')).toBeInTheDocument();
    expect(poster.style.display).toBe('none');

    expect(screen.getByText('The Shawshank Redemption')).toBeInTheDocument();
    expect(screen.getByText('1994')).toBeInTheDocument();
    expect(screen.getByText('R')).toBeInTheDocument();
    expect(screen.getByAltText('Bookmark icon')).toBeInTheDocument();
  });

  it('switches between unselected and selected bookmark icon on click', async () => {
    render(
      <Router>
        <Thumbnail movie={mockMovie} />
      </Router>,
    );

    const user = userEvent.setup();
    const bookmarkIcon = screen.getByAltText('Bookmark icon');
    const bookmarkButton = screen.getByRole('button', { name: 'Bookmark button' });

    expect(bookmarkIcon).toHaveAttribute('src', '/public/icons/bookmark-unselected.svg');
    await user.click(bookmarkButton);
    expect(bookmarkIcon).toHaveAttribute('src', '/public/icons/bookmark-selected.svg');
    await user.click(bookmarkButton);
    expect(bookmarkIcon).toHaveAttribute('src', '/public/icons/bookmark-unselected.svg');
  });
});