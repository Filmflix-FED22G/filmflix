import { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { Movie } from '../../types/movieTypes';
import { useMovies } from '../contexts/MovieContext';
import Thumbnail from './Thumbnail';
import magnifyingGlass from '/icons/magnifying-glass.svg';

interface SearchBarContainerProps {
  $showInMobile?: boolean;
}

interface SearchBarProps {
  $showInMobile?: boolean;
}

// This component renders the search bar
// It also renders the search results dropdown
function SearchBar({ $showInMobile = false }: SearchBarProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredMovies, setFilteredMovies] = useState<Movie[]>([]);
  const [showDropdown, setShowDropdown] = useState(false);
  const { movies } = useMovies();
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
        .filter((movie: Movie) =>
          movie.title.toLowerCase().includes(query.toLowerCase()),
        )
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
    const filtered = movies.filter((movie: Movie) =>
      movie.title.toLowerCase().includes(searchQuery.toLowerCase()),
    );
    setFilteredMovies(filtered);
  };

  //Handle click outside to close the dropdown
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        searchBarRef.current &&
        !searchBarRef.current.contains(event.target as Node)
      ) {
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
          <input
            type="text"
            placeholder="Search for a movie"
            value={searchQuery}
            onChange={handleInputChange}
          />
          {/* <SearchIcon src={magnifyingGlass} alt="Search icon" /> */}
          <SearchButton type="submit" aria-label="Search">
            <SearchIcon src={magnifyingGlass} alt="Search" />
          </SearchButton>
        </SearchBarContainer>
      </form>
      {showDropdown && filteredMovies.length > 0 && (
        <SearchResultsDropdown>
          {filteredMovies.map((movie) => (
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

//Styling for the SearchBar component
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
  width: 100%;
  background: var(--color-light);
  align-items: center;

  input {
    flex-grow: 1;
    border: none;
    padding: 0.6rem 0.7rem 0.5rem 0.7rem;
    outline: none;
    color: var(--color-dark);
    background-color: var(--color-light);
  }
`;

const SearchIcon = styled.img`
  width: 1.5rem;
  height: 1.5rem;
  cursor: pointer;
`;

const SearchButton = styled.button`
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0.4rem 0.7rem;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background: var(--color-light-hover);
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
