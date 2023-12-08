import styled from 'styled-components';
import searchicon from '/icons/searchicon.svg';
import movies from '../../data/movies.json';
import { useState, useEffect, useRef } from 'react';
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

function SearchBar({ $showInMobile = false }: SearchBarProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredMovies, setFilteredMovies] = useState<Movie[]>([]);
  const [showDropdown, setShowDropdown] = useState(false);
  const searchBarRef = useRef<HTMLDivElement>(null);
  const clearSearch = () => {
    setSearchQuery('');
    setShowDropdown(false);
  };

  // Handle search input changes
const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  const query = event.target.value;
  setSearchQuery(query);

  if (query.length > 0) {
    const filtered = movies
      .filter(movie => movie.title.toLowerCase().includes(query.toLowerCase()))
      .slice(0, 5);

    setFilteredMovies(filtered);
    setShowDropdown(true);
  } else {
    setShowDropdown(false);
  }
};

  // Handle form submission
  const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const filtered = movies.filter(movie => 
      movie.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredMovies(filtered);
  };

  //Handle click outside to close the dropdown
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchBarRef.current && !searchBarRef.current.contains(event.target as Node)) {
        clearSearch();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <SearchContainer ref={searchBarRef} $showInMobile={$showInMobile}>
      <form onSubmit={handleFormSubmit}>
        <SearchBarContainer $showInMobile={$showInMobile}>
          <input type="text" placeholder="Search for a movie" value={searchQuery} onChange={handleInputChange} />
          <button type="submit">
            <StyledSVG src={searchicon} alt="magnifyingglass" />
          </button>
        </SearchBarContainer>
      </form>

      {showDropdown && filteredMovies.length > 0 && (
        <SearchResultsDropdown>
          {filteredMovies.map(movie => (
            <ThumbnailContainer key={movie.title}>
              <Thumbnail movie={movie} />
            </ThumbnailContainer>
          ))}
        </SearchResultsDropdown>
      )}
    </SearchContainer>
  );
}

export default SearchBar;

const SearchContainer = styled.div<SearchBarProps>`
  position: relative;
  width: 100%;
  max-width: 20rem;
  display: block;

  @media (max-width: 768px) { 
    width: 100%;
    margin: 1rem auto;
    max-width: 40rem;
    display: ${({ $showInMobile }) => ($showInMobile ? 'block' : 'none')};
  }

  @media (min-width: 769px) and (max-width: 1024px) {
    width: 100%;
    margin: 1rem auto;
    display: block; 
    max-width: 40rem;
  }
`;

const SearchBarContainer = styled.div<SearchBarContainerProps>`
  display: flex;
  border: 0.3rem solid #fff;
  width: 100%;

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
`;

const SearchResultsDropdown = styled.div`
  position: absolute;
  width: 100%;
  max-height: 500px;
  overflow-y: auto;
  background-color: var(--color-dark);
  z-index: 10;
`;

const ThumbnailContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const StyledSVG = styled.img`
  width: 1rem;
  height: 1rem;
`;