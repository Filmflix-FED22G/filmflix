import CategoryPage from '../src/pages/CategoryPage';
import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { vi } from 'vitest';

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

  const categoryLink = screen.getByText(/Action/i);
  fireEvent.click(categoryLink);

  expect(document.title).toBe('Action');
});
