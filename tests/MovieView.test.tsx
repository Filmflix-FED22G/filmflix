import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import MovieView from '../src/components/MovieView';

describe('MovieView Component with URL Parameter', () => {
  test('renders movie details from URL parameter', () => {
    const movieSlug = 'portrait-of-a-lady-on-fire';

    render(
      <MemoryRouter initialEntries={[`/details/${movieSlug}`]}>
        <Routes>
          <Route path="/details/:title" element={<MovieView />} />
        </Routes>
      </MemoryRouter>,
    );

    expect(screen.getByText('Portrait of a Lady on Fire')).toBeInTheDocument();
    expect(
      screen.getByText(
        'On an isolated island in Brittany at the end of the eighteenth century, a female painter is obliged to paint a wedding portrait of a young woman.',
      ),
    ).toBeInTheDocument();
    expect(screen.getByText('2019')).toBeInTheDocument();
  });
});
