import styled from 'styled-components';
import searchicon from '/icons/searchicon.svg';

interface SearchBarContainerProps {
  $showInMobile?: boolean;
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
    // Apply mobile-specific styles here
    width: 90%;
    margin: auto;
  }
`;

const StyledSVG = styled.img`
  width: 1rem;
  height: 1rem;
`;

interface SearchBarProps {
  $showInMobile?: boolean;
}

function SearchBar({ $showInMobile = false }: SearchBarProps) {
  return (
    <form>
      <SearchBarContainer $showInMobile={$showInMobile}>
        <input type="text" placeholder="Search for a movie" />
        <button>
          <StyledSVG src={searchicon} alt="magnifyingglass" />{' '}
        </button>
      </SearchBarContainer>
    </form>
  );
}

export default SearchBar;
