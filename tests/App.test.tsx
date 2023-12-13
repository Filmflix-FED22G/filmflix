import { render, screen, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter, BrowserRouter as Router } from 'react-router-dom';
import App from '../src/App';
import { MovieProvider } from '../src/contexts/MovieContext';

//Header tests
test('should render the header with the FilmFlix logo', () => {
  render(
    <MovieProvider>
      <Router>
        <App />
      </Router>
    </MovieProvider>,
  );

  const headerElement = screen.getByRole('banner');
  const logoImage = within(headerElement).getByAltText('filmFlix Logo');
  expect(logoImage).toBeInTheDocument();
});

test('should navigate to home page when clicking the logo in the header', async () => {
  render(
    <MovieProvider>
      <MemoryRouter>
        <App />
      </MemoryRouter>
    </MovieProvider>,
  );

  const user = userEvent.setup();
  const headerElement = screen.getByRole('banner');
  const logoImage = within(headerElement).getByAltText('filmFlix Logo');

  await user.click(logoImage);
  expect(window.location.pathname).toBe('/');
});

test('renders navigation links for desktop', () => {
  render(
    <MovieProvider>
      <Router>
        <App />
      </Router>
    </MovieProvider>,
  );

  const homeLinks = screen.getAllByText(/home/i);
  expect(homeLinks[0]).toBeInTheDocument();
  expect(homeLinks[0]).toHaveAttribute('href', '/');

  const categoriesLinks = screen.getAllByText(/categories/i);
  expect(categoriesLinks[0]).toBeInTheDocument();
  expect(categoriesLinks[0]).toHaveAttribute('href', '/categories');

  const bookmarksLinks = screen.getAllByText(/bookmarks/i);
  expect(bookmarksLinks[0]).toBeInTheDocument();
  expect(bookmarksLinks[0]).toHaveAttribute('href', '/bookmarks');
});

test('renders navigation links for mobile', () => {
  render(
    <MovieProvider>
      <Router>
        <App />
      </Router>
    </MovieProvider>,
  );

  const homeLinks = screen.getAllByText(/home/i);
  expect(homeLinks[1]).toBeInTheDocument();
  expect(homeLinks[1]).toHaveAttribute('href', '/');

  const categoriesLinks = screen.getAllByText(/categories/i);
  expect(categoriesLinks[1]).toBeInTheDocument();
  expect(categoriesLinks[1]).toHaveAttribute('href', '/categories');

  const bookmarksLinks = screen.getAllByText(/bookmarks/i);
  expect(bookmarksLinks[1]).toBeInTheDocument();
  expect(bookmarksLinks[1]).toHaveAttribute('href', '/bookmarks');
});

test('renders search bar and input in two places, desktop and mobile', () => {
  render(
    <MovieProvider>
      <Router>
        <App />
      </Router>
    </MovieProvider>,
  );

  const inputFields = screen.queryAllByPlaceholderText(/search for a movie/i);
  expect(inputFields.length).toBe(2);
});

test('renders hamburger button', () => {
  render(
    <MovieProvider>
      <Router>
        <App />
      </Router>
    </MovieProvider>,
  );

  const hamburgerButton = screen.getByAltText(/hamburger menu/i);
  expect(hamburgerButton).toBeInTheDocument();
});

test('renders close button', () => {
  render(
    <MovieProvider>
      <Router>
        <App />
      </Router>
    </MovieProvider>,
  );

  const closeButton = screen.getByAltText(/close button/i);
  expect(closeButton).toBeInTheDocument();
});

//Footer tests
test('should render the footer with the FilmFlix logo', () => {
  render(
    <MovieProvider>
      <Router>
        <App />
      </Router>
    </MovieProvider>,
  );

  const footerElement = screen.getByRole('contentinfo');
  const logoImage = within(footerElement).getByAltText('filmFlix Logo');
  expect(logoImage).toBeInTheDocument();
});
