import { fireEvent, render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { vi } from 'vitest';
import { MovieProvider } from '../src/contexts/MovieContext';
import CategoryPage from '../src/pages/CategoryPage';

//Category tests
test('renders Category Page with dropdown and document title', () => {
  render(
    <MovieProvider>
      <MemoryRouter>
        <CategoryPage />
      </MemoryRouter>
    </MovieProvider>,
  );
  const dropdownButton = screen.getByText(/categories/i);
  expect(dropdownButton).toBeInTheDocument();
  expect(document.title).toBe('Categories');
});

//Navigation test with mock useNavigate
type ReactRouterDomModule = {
  useNavigate: () => void;
};

vi.mock('react-router-dom', async () => {
  const originalModule: ReactRouterDomModule =
    await vi.importActual('react-router-dom');
  const mockUseNavigate = vi.fn();

  return {
    ...originalModule,
    useNavigate: () => mockUseNavigate,
  };
});

test('navigates to correct category and sets a new document title', async () => {
  render(
    <MovieProvider>
      <MemoryRouter>
        <CategoryPage />
      </MemoryRouter>
    </MovieProvider>,
  );

  const categoryNames = ['Action', 'Adventure', 'Biography'];

  for (const categoryName of categoryNames) {
    const categoryLinks = screen.getAllByText(new RegExp(categoryName, 'i'));

    const categoryLink = categoryLinks[0];

    fireEvent.click(categoryLink);

    expect(document.title).toBe(categoryName);
  }
});
