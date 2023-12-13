import { render, screen } from '@testing-library/react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import NotFound from '../src/components/NotFound';
import { MovieProvider } from '../src/contexts/MovieContext';

//NotFound tests
describe('NotFound Component', () => {
  it('renders the NotFound component', () => {
    render(
      <MovieProvider>
        <Router>
          <NotFound />
        </Router>
      </MovieProvider>,
    );
    expect(screen.getByText('404 Not Found :(')).toBeInTheDocument();
  });

  it('displays NotFound component and page title for an unknown route', () => {
    render(
      <MovieProvider>
        <Router>
          <Routes>
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Router>
      </MovieProvider>,
    );

    expect(screen.getByText('404 Not Found :(')).toBeInTheDocument();
    expect(document.title).toBe('404 Not Found');
  });
});
