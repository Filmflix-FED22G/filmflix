import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NotFound from '../src/components/NotFound';

//NotFound tests
describe('NotFound Component', () => {
  it('renders the NotFound component', () => {
    render(
      <Router>
        <NotFound />
      </Router>,
    );
    expect(screen.getByText('404 Not Found :(')).toBeInTheDocument();
  });

  it('displays NotFound component and page title for an unknown route', () => {
    render(
      <Router>
        <Routes>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>,
    );

    expect(screen.getByText('404 Not Found :(')).toBeInTheDocument();
    expect(document.title).toBe('404 Not Found');
  });
});
