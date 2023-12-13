import '@testing-library/jest-dom';
import { fireEvent, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter as Router } from 'react-router-dom';
import SearchBar from '../src/components/SearchBar';
import { MovieProvider } from '../src/contexts/MovieContext';

//SearchBar tests
describe('SearchBar Component', () => {
  it('renders the search bar correctly', () => {
    render(
      <MovieProvider>
        <Router>
          <SearchBar $showInMobile={false} />
        </Router>
      </MovieProvider>,
    );
    expect(
      screen.getByPlaceholderText('Search for a movie'),
    ).toBeInTheDocument();
  });

  it('updates input value on change', () => {
    render(
      <MovieProvider>
        <Router>
          <SearchBar $showInMobile={false} />
        </Router>
      </MovieProvider>,
    );

    const input = screen.getByPlaceholderText(
      'Search for a movie',
    ) as HTMLInputElement;
    fireEvent.change(input, { target: { value: 'Inception' } });
    expect(input.value).toBe('Inception');
  });

  it('performs search on button click', async () => {
    render(
      <MovieProvider>
        <Router>
          <SearchBar $showInMobile={false} />
        </Router>
      </MovieProvider>,
    );

    const input = screen.getByPlaceholderText('Search for a movie');
    const searchButton = screen.getByRole('button', { name: /search/i });

    // Simulate typing a search query
    await userEvent.type(input, 'Inception');

    // Simulate clicking the search button
    await userEvent.click(searchButton);

    // You should replace the below expectation with what should actually happen after a search
    // For example, checking if the search results are displayed or if there's a navigation to a search results page
    const dropdownItem = screen.queryByText('Inception');
    expect(dropdownItem).toBeInTheDocument();
  });

  it('shows dropdown on input change', () => {
    render(
      <MovieProvider>
        <Router>
          <SearchBar $showInMobile={false} />
        </Router>
      </MovieProvider>,
    );

    const input = screen.getByPlaceholderText(
      'Search for a movie',
    ) as HTMLInputElement;
    fireEvent.change(input, { target: { value: 'Inception' } });

    // Assuming the dropdown contains items with text 'Inception' when it's visible
    const dropdownItem = screen.queryByText('Inception');
    expect(dropdownItem).toBeInTheDocument();
  });

  it('hides dropdown when clicking outside', () => {
    render(
      <MovieProvider>
        <Router>
          <SearchBar $showInMobile={false} />
        </Router>
      </MovieProvider>,
    );

    const input = screen.getByPlaceholderText(
      'Search for a movie',
    ) as HTMLInputElement;
    fireEvent.change(input, { target: { value: 'Inception' } });

    let dropdownItem = screen.queryByText('Inception');
    expect(dropdownItem).toBeInTheDocument();

    fireEvent.mouseDown(document);

    dropdownItem = screen.queryByText('Inception');
    expect(dropdownItem).not.toBeInTheDocument();
  });
});
