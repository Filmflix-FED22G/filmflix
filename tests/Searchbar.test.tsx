import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import SearchBar from '../src/components/SearchBar';
import { MemoryRouter as Router } from 'react-router-dom';

//Find the SearchBar component
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

  // Test for input changes
  it('updates input value on change', () => {
    render(
      <Router>
        <SearchBar $showInMobile={false} />
      </Router>,
    );

    const input = screen.getByPlaceholderText(
      'Search for a movie',
    ) as HTMLInputElement;
    fireEvent.change(input, { target: { value: 'Inception' } });
    expect(input.value).toBe('Inception');
  });

  // Test for form submission
  it('submits the form and shows results', async () => {
    render(
      <Router>
        <SearchBar $showInMobile={false} />
      </Router>,
    );
    const input = screen.getByPlaceholderText('Search for a movie');
    const button = screen.getByAltText('magnifyingglass');
    fireEvent.change(input, { target: { value: 'Inception' } });
    fireEvent.click(button);

    // This is a placeholder check
    expect(await screen.findByText('Inception')).toBeInTheDocument();
  });

  // Test for input changes and dropdown visibility
  it('shows dropdown on input change', () => {
    render(
      <Router>
        <SearchBar $showInMobile={false} />
      </Router>,
    );

    // Find input and change its value
    const input = screen.getByPlaceholderText(
      'Search for a movie',
    ) as HTMLInputElement;
    fireEvent.change(input, { target: { value: 'Inception' } });

    const dropdownItem = screen.queryByText('Inception');
    expect(dropdownItem).toBeInTheDocument();
  });

  // Test for clicking outside
  it('hides dropdown when clicking outside', () => {
    render(
      <Router>
        <SearchBar $showInMobile={false} />
      </Router>,
    );

    // Find input and change its value to display the dropdown
    const input = screen.getByPlaceholderText(
      'Search for a movie',
    ) as HTMLInputElement;
    fireEvent.change(input, { target: { value: 'Inception' } });

    // Assuming the dropdown contains items with text 'Inception' when it's visible
    let dropdownItem = screen.queryByText('Inception');
    // Check if dropdown is initially visible
    expect(dropdownItem).toBeInTheDocument();

    // Simulate a click outside the dropdown
    fireEvent.mouseDown(document);

    // Check if dropdown is no longer visible
    dropdownItem = screen.queryByText('Inception');
    expect(dropdownItem).not.toBeInTheDocument();
  });
});
