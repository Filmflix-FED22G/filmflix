import CategoryPage from '../src/pages/CategoryPage';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { vi } from 'vitest';

test('renders Category Page with dropdown', () => {
  render(
    <MemoryRouter>
      <CategoryPage />
    </MemoryRouter>,
  );
  const dropdownButton = screen.getByText(/categories/i);
  expect(dropdownButton).toBeInTheDocument();
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

test('navigates to correct category when clicked', async () => {
  render(
    <MemoryRouter>
      <CategoryPage />
    </MemoryRouter>,
  );
});