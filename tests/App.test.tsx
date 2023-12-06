import { render, screen } from '@testing-library/react';
import App from '../src/App';

test('renders FILMFLIX!!', () => {
  render(<App />);
  const linkElement = screen.getByText(/FILMFLIX!!/i);
  expect(linkElement).toBeInTheDocument();
});
