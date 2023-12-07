import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import movies from '../data/movies.json';
import Thumbnail from '../src/components/Thumbnail';
import { Movie } from '../types/movieTypes';

describe('Thumbnail Component', () => {
  const mockMovie: Movie = movies[0];

  it('renders correctly', () => {
    render(
      <Router>
        <Thumbnail movie={mockMovie} />
      </Router>,
    );
    expect(screen.getByText('The Shawshank Redemption')).toBeInTheDocument();
    expect(screen.getByText('1994')).toBeInTheDocument();
    expect(screen.getByText('R')).toBeInTheDocument();
  });
});
