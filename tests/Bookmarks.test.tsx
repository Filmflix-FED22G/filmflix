import { render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { MovieProvider } from '../src/contexts/MovieContext';
import BookmarkPage from '../src/pages/BookmarkPage';

//Bookmark Page tests
describe('BookmarkPage Component', () => {
  test('renders the BookmarkPage component and page title', () => {
    render(
      <MovieProvider>
        <Router>
          <BookmarkPage />
        </Router>
      </MovieProvider>,
    );
    expect(document.title).toBe('Bookmarks');
  });
});
