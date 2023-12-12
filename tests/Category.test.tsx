import { fireEvent, render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { vi } from 'vitest';
import CategoryPage from '../src/pages/CategoryPage';

test('renders Category Page with dropdown and document title', () => {
  render(
    <MemoryRouter>
      <CategoryPage />
    </MemoryRouter>,
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
    <MemoryRouter>
      <CategoryPage />
    </MemoryRouter>,
  );

  const categoryNames = ['Action', 'Adventure', 'Biography'];

  for (const categoryName of categoryNames) {
    const categoryLinks = screen.getAllByText(new RegExp(categoryName, 'i'));

    const categoryLink = categoryLinks[0];

    fireEvent.click(categoryLink);

    expect(document.title).toBe(categoryName);
  }
});
