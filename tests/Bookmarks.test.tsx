import { render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import BookmarkPage from '../src/pages/BookmarkPage';

//Bookmark Page tests
describe('BookmarkPage Component', () => {
  test('renders the BookmarkPage component and page title', () => {
    render(
      <Router>
        <BookmarkPage />
      </Router>,
    );
    expect(document.title).toBe('Bookmarks');
  });
});
