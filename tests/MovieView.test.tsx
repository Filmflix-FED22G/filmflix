import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import MovieView from '../src/components/MovieView';

describe('MovieView Component with URL Parameter', () => {
  // Mocked movie URL
  const movieSlug = 'portrait-of-a-lady-on-fire';

  beforeEach(() => {
    render(
      <MemoryRouter initialEntries={[`/details/${movieSlug}`]}>
        <Routes>
          <Route path="/details/:title" element={<MovieView />} />
        </Routes>
      </MemoryRouter>,
    );
  });

  test('renders the movie title and synopsis', () => {
    expect(screen.getByText('Portrait of a Lady on Fire')).toBeInTheDocument();
    expect(
      screen.getByText(
        'On an isolated island in Brittany at the end of the eighteenth century, a female painter is obliged to paint a wedding portrait of a young woman.',
      ),
    ).toBeInTheDocument();
  });

  test('renders the movie year', () => {
    expect(screen.getByText('2019')).toBeInTheDocument();
  });

  test('renders the cast list', () => {
    expect(screen.getByText('Cast:')).toBeInTheDocument();
    const castMembers = screen.getAllByRole('listitem');
    expect(castMembers).toHaveLength(3);
    expect(castMembers[0]).toHaveTextContent('Noémie Merlant');
    expect(castMembers[1]).toHaveTextContent('Adèle Haenel');
    expect(castMembers[2]).toHaveTextContent('Luàna Bajrami');
  });

  test('renders the movie poster with correct attributes', () => {
    const moviePoster = screen.getByAltText(
      'Portrait of a Lady on Fire poster',
    );
    expect(moviePoster).toBeInTheDocument();
    expect(moviePoster).toHaveAttribute(
      'src',
      '/img/portrait-of-a-lady-on-fire.png',
    );
  });

  test('switches between unselected and selected bookmark icon on click', async () => {
    const user = userEvent.setup();
    const bookmarkIcon = screen.getByAltText('Bookmark icon');
    const bookmarkButton = screen.getByRole('button', {
      name: 'Bookmark button',
    });

    expect(bookmarkIcon).toHaveAttribute(
      'src',
      '/icons/bookmark-unselected.svg',
    );
    await user.click(bookmarkButton);
    expect(bookmarkIcon).toHaveAttribute('src', '/icons/bookmark-selected.svg');
    await user.click(bookmarkButton);
    expect(bookmarkIcon).toHaveAttribute(
      'src',
      '/icons/bookmark-unselected.svg',
    );
  });
});
