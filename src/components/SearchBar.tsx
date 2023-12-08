import styled from 'styled-components';
import searchicon from '/icons/searchicon.svg';
import movies from '../../data/movies.json';
import { useState } from 'react';
import Thumbnail from './Thumbnail';

type Movie = {
  title: string;
  year: number;
  rating: string;
  actors: string[];
  genre: string;
  synopsis: string;
  thumbnail: string;
};

interface SearchBarContainerProps {
  $showInMobile?: boolean;
}

interface SearchBarProps {
  $showInMobile?: boolean;
}

const SearchBarContainer = styled.div<SearchBarContainerProps>`
  display: flex;
  border: 0.3rem solid #fff;

  input {
    flex-grow: 1;
    border: none;
    padding: 0.5rem;
    outline: none;
    color: black;
    background-color: white;
  }

  button {
    flex-shrink: 0;
    flex-basis: 2rem;
    width: 2rem;
    height: 2rem;
    border: none;
    background-color: black;
    color: white;
    padding: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    outline: none;

    &:hover {
      background-color: #aa8c21;
    }
  }

  @media (max-width: 768px) {
    display: ${({ $showInMobile }) => ($showInMobile ? 'flex' : 'none')};
    width: 90%;
    margin: auto;
  }
`;

const StyledSVG = styled.img`
  width: 1rem;
  height: 1rem;
`;

function SearchBar({ $showInMobile = false }: SearchBarProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredMovies, setFilteredMovies] = useState<Movie[]>([]);

  // Handle search input changes
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };

  // Handle form submission
  const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const filtered = movies.filter(movie => 
      movie.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredMovies(filtered); // Update state with filtered movies
  };

  return (
    <>
    <form onSubmit={handleFormSubmit}>
      <SearchBarContainer $showInMobile={$showInMobile}>
        <input type="text" placeholder="Search for a movie" value={searchQuery} onChange={handleInputChange} />
        <button>
          <StyledSVG src={searchicon} alt="magnifyingglass" />{' '}
        </button>
      </SearchBarContainer>
    </form>
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1rem' }}>
    {filteredMovies.map(movie => (
      <Thumbnail key={movie.title} movie={movie} />
    ))}
  </div>
  </>
  );
}

export default SearchBar;
