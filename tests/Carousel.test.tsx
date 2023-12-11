import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import Carousel from '../src/components/Carousel';

describe('Carousel Component', () => {
  const mockData = [
    {
      title: 'Movie 1',
      year: 2021,
      rating: 'PG-13',
      actors: ['Actor 1', 'Actor 2'],
      genre: 'Adventure',
      synopsis: 'Synopsis 1',
      thumbnail: 'thumbnail1.jpg',
      isTrending: true,
    },
  ];

  it('renders correctly with data', () => {
    render(
      <Router>
        <Carousel data={mockData} />
      </Router>,
    );
    const thumbnails = screen.getAllByRole('img');
    expect(thumbnails).toHaveLength(mockData.length);
  });
});
