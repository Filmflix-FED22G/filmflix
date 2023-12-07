import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Hero from '../src/components/Hero';

describe('Hero', () => {
  test('should render the correct movie title', () => {
    const mockTitle = 'Interstellar';
    render(<Hero title={mockTitle} heroImageUrl="" quote="" />);

    expect(screen.getByText(mockTitle)).toBeInTheDocument();
  });

  test('should render the quote when provided', () => {
    const mockTitle = 'Interstellar';
    const mockImage = 'img/hero-interstellar.png';
    const mockQuote =
      "We're not meant to save the world. We're meant to leave it.";
    render(
      <Hero title={mockTitle} heroImageUrl={mockImage} quote={mockQuote} />,
    );

    expect(screen.getByText(mockQuote)).toBeInTheDocument();
  });
});
