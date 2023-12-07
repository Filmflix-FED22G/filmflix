import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import App from '../src/App';

//Header tests
test('renders the header with FilmFlix text', () => {
  render(
    <Router>
      <App />
    </Router>,
  );
  const headerElement = screen.getByText(/FilmFlix/i);
  expect(headerElement).toBeInTheDocument();
});

test('renders navigation links for desktop', () => {
  render(
    <Router>
      <App />
    </Router>,
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
    <Router>
      <App />
    </Router>,
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

test('renders search bar input and button for desktop', () => {
  render(
    <Router>
      <App />
    </Router>,
  );

  // Get all elements with the placeholder text "Search for a movie"
  const inputFields = screen.getAllByPlaceholderText(/search for a movie/i);

  expect(inputFields[0]).toBeInTheDocument();

  // Get the submit button with the alt text of the SVG image
  const submitButton = screen.getByRole('button', { name: /magnifyingglass/i });
  expect(submitButton).toBeInTheDocument();
});

test('renders search bar input and button for mobile', () => {
  render(
    <Router>
      <App />
    </Router>,
  );

  // Get all elements with the placeholder text "Search for a movie"
  const inputFields = screen.getAllByPlaceholderText(/search for a movie/i);

  expect(inputFields[1]).toBeInTheDocument();

  // Get the submit button with the alt text of the SVG image
  const submitButton = screen.getByRole('button', { name: /magnifyingglass/i });
  expect(submitButton).toBeInTheDocument();
});

test('renders hamburger button', () => {
  render(
    <Router>
      <App />
    </Router>,
  );

  const hamburgerButton = screen.getByAltText(/hamburger menu/i);
  expect(hamburgerButton).toBeInTheDocument();
});

test('renders close button', () => {
  render(
    <Router>
      <App />
    </Router>,
  );

  const closeButton = screen.getByAltText(/close button/i);
  expect(closeButton).toBeInTheDocument();
});

//Footer tests

test('renders the footer with FilmFlix text', () => {
  render(
    <Router>
      <App />
    </Router>,
  );
  const footerElement = screen.getByAltText(/FilmFlix/i);
  expect(footerElement).toBeInTheDocument();
});
