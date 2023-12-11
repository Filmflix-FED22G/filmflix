import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import App from '../src/App';
import userEvent from '@testing-library/user-event';

//Header tests
test('renders the header with FilmFlix text', () => {
  render(
    <Router>
      <App />
    </Router>,
  );

  const headerElement = screen.getByRole('banner');
  expect(headerElement).toHaveTextContent(/FilmFlix/i);
});

test('navigates to home page on clicking the logo', async () => {
  render(
    <Router>
      <App />
    </Router>,
  );

  const logoText = screen.getByText('FilmFlix');
  const logoLink = logoText.closest('a');

  if (logoLink) {
    userEvent.click(logoLink);
    expect(window.location.pathname).toBe('/');
  } else {
    throw new Error('Logo link not found');
  }
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

test('renders search bar and input in two places, desktop and mobile', () => {
  render(
    <Router>
      <App />
    </Router>,
  );

  const inputFields = screen.queryAllByPlaceholderText(/search for a movie/i);
  expect(inputFields.length).toBe(2);
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
