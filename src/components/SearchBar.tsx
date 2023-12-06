import styled from 'styled-components';

interface SearchBarContainerProps {
  showInMobile?: boolean;
}

//Styling for the SearchBar on desktop
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
    flex-basis: 1rem;
    border: none;
    background-color: black;
    color: white;
    padding: 0.5rem 1rem;
    cursor: pointer;
    outline: none;
  }

  @media (max-width: 768px) {
    display: ${({ showInMobile }) => (showInMobile ? 'flex' : 'none')};
    // Apply mobile-specific styles here
    width: 90%;
    margin: auto;
  }
`;

interface SearchBarProps {
  showInMobile?: boolean;
}

function SearchBar({ showInMobile = false }: SearchBarProps) {
  return (
    <form>
    <SearchBarContainer showInMobile={showInMobile}>
        <input type="text" placeholder="Search for a movie" />
        <button type="submit">Se</button>
    </SearchBarContainer>
    </form>
  );
}

export default SearchBar;
