import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import SearchBar from '../src/components/SearchBar';
import { MemoryRouter as Router } from 'react-router-dom';

describe('SearchBar Component', () => {
  it('renders the search bar correctly', () => {
    render(
      <Router>
        <SearchBar $showInMobile={false} />
      </Router>,
    );
    expect(
      screen.getByPlaceholderText('Search for a movie'),
    ).toBeInTheDocument();
  });

  it('updates input value on change', () => {
    render(
      <Router>
        <SearchBar $showInMobile={false} />
      </Router>,
    );

    const input = screen.getByPlaceholderText('Search for a movie') as HTMLInputElement;
    fireEvent.change(input, { target: { value: 'Inception' } });
    expect(input.value).toBe('Inception');
  });

  it('shows dropdown on input change', () => {
    render(
      <Router>
        <SearchBar $showInMobile={false} />
      </Router>,
    );

    const input = screen.getByPlaceholderText('Search for a movie') as HTMLInputElement;
    fireEvent.change(input, { target: { value: 'Inception' } });

    // Assuming the dropdown contains items with text 'Inception' when it's visible
    const dropdownItem = screen.queryByText('Inception');
    expect(dropdownItem).toBeInTheDocument();
  });

  it('hides dropdown when clicking outside', () => {
    render(
      <Router>
        <SearchBar $showInMobile={false} />
      </Router>,
    );

    const input = screen.getByPlaceholderText('Search for a movie') as HTMLInputElement;
    fireEvent.change(input, { target: { value: 'Inception' } });

    let dropdownItem = screen.queryByText('Inception');
    expect(dropdownItem).toBeInTheDocument();

    fireEvent.mouseDown(document);

    dropdownItem = screen.queryByText('Inception');
    expect(dropdownItem).not.toBeInTheDocument();
  });
});
