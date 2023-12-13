import { render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { MovieProvider } from '../src/contexts/MovieContext';
import HomePage from '../src/pages/HomePage';

//Home Page tests
describe('BookmarkPage Component', () => {
  test('renders the HomePage component and page title', () => {
    render(
      <MovieProvider>
        <Router>
          <HomePage />
        </Router>
      </MovieProvider>,
    );
    expect(document.title).toBe('FilmFlix');
  });
});
