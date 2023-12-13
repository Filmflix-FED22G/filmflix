import { fireEvent, render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { MovieContext, MovieProvider } from '../src/contexts/MovieContext';
import BookmarkPage from '../src/pages/BookmarkPage';
import mockMovies from './mocks/mockMovies.json';

//Bookmark Page tests
describe('BookmarkPage Component', () => {
  it('renders the BookmarkPage component with no bookmarks', () => {
    render(
      <MovieProvider>
        <Router>
          <BookmarkPage />
        </Router>
      </MovieProvider>,
    );
    expect(document.title).toBe('Bookmarks');
    expect(screen.getByText('No bookmarks found!')).toBeInTheDocument();
  });

  it('renders only the bookmarked movies', () => {
    render(
      <MovieContext.Provider
        value={{
          movies: mockMovies,
        }}
      >
        <Router>
          <BookmarkPage />
        </Router>
      </MovieContext.Provider>,
    );

    let loadingTexts = screen.getAllByText('Loading...');
    const posters = screen.getAllByAltText(/poster/);

    // Check that only bookmarked movies are rendered
    expect(loadingTexts.length).toBe(6);
    posters.map((poster) => fireEvent.load(poster));
    loadingTexts = screen.queryAllByText('Loading...');
    expect(loadingTexts.length).toBe(0);
    expect(screen.getByText('Whiplash')).toBeInTheDocument();
    expect(
      screen.queryByText('The Shawshank Redemption'),
    ).not.toBeInTheDocument();
  });
});
