import { render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import HomePage from '../src/pages/HomePage';

//Home Page tests
describe('BookmarkPage Component', () => {
  test('renders the HomePage component and page title', () => {
    render(
      <Router>
        <HomePage />
      </Router>,
    );
    expect(document.title).toBe('FilmFlix');
  });
});
