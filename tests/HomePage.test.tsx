import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import HomePage from '../src/pages/HomePage';

describe('Hero', () => {
  test('should render the correct film title in hero', () => {
    render(
      <Router>
        <HomePage />
      </Router>,
    );
    expect(screen.getByText('Interstellar')).toBeInTheDocument();
  });
});
