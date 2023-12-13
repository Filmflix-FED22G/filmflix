import { fireEvent, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { BrowserRouter as Router } from 'react-router-dom';
import { MovieContext, MovieProvider } from '../src/contexts/MovieContext';
import BookmarkPage from '../src/pages/BookmarkPage';
import mockMovies from './mocks/mockMovies.json';

//Bookmark Page tests
describe('BookmarkPage Component', () => {
  it('renders the BookmarkPage component with no bookmarks', () => {
    render(
      <MovieContext.Provider
        value={{
          movies: mockMovies,
          toggleBookmark: () => {},
        }}
      >
        <Router>
          <BookmarkPage />
        </Router>
      </MovieContext.Provider>,
    );
    expect(document.title).toBe('Bookmarks');
    expect(screen.getByText('No bookmarks found!')).toBeInTheDocument();
  });

  it('renders only the bookmarked movies', () => {
    render(
      <MovieProvider>
        <Router>
          <BookmarkPage />
        </Router>
      </MovieProvider>,
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

  it('bookmarked movie is removed from bookmark page when unbookmarked', async () => {
    render(
      <MovieProvider>
        <Router>
          <BookmarkPage />
        </Router>
      </MovieProvider>,
    );

    const user = userEvent.setup();
    const posters = screen.getAllByAltText(/poster/);
    posters.map((poster) => fireEvent.load(poster));
    expect(screen.getByText('Whiplash')).toBeInTheDocument();

    // Unbookmark Whiplash
    const bookmarkButtons = screen.getAllByRole('button', {
      name: 'Bookmark button',
    });
    await user.click(bookmarkButtons[5]);

    // Check that Whiplash is removed from bookmark page
    expect(screen.queryByText('Whiplash')).not.toBeInTheDocument();
  });
});
