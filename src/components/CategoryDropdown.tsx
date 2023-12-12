import styled from 'styled-components';
import { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import movies from '../../data/movies.json';
import chevrondown from '/icons/chevrondown.svg';
import chevronup from '/icons/chevronup.svg';

interface DropdownContentProps {
  $isOpen: boolean;
}

//This component renders the dropdown menu for the categories
function CategoryDropdown() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const dropdownRef = useRef<HTMLDivElement>(null);

  //Gets all the categories from the movies.json file
  //Splits them into separate categories
  const categories = Array.from(
    new Set(
      movies.flatMap((movie) =>
        movie.genre.split(',').map((category) => category.trim()),
      ),
    ),
  );

  //Handles the click on a category
  //Navigates to the category page and sets the document title
  const handleCategoryClick = (category: string) => {
    setIsOpen(false);
    navigate(`/categories/${category.toLowerCase()}`);
    document.title = `${category}`;
  };

  //Closes the dropdown menu when the user clicks outside of it
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Node;

      if (dropdownRef.current && !dropdownRef.current.contains(target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <DropdownWrapper>
      <DropdownContainer ref={dropdownRef}>
        <DropdownButton onClick={() => setIsOpen(!isOpen)}>
          <FlexContainer>
            <h4>Categories</h4>
            <StyledSVG
              src={isOpen ? chevronup : chevrondown}
              alt={isOpen ? 'arrow up' : 'arrow down'}
            />
          </FlexContainer>
        </DropdownButton>
        <DropdownContent $isOpen={isOpen}>
          {categories.map((category) => (
            <a
              href="#"
              key={category}
              onClick={() => handleCategoryClick(category)}
            >
              {category}
            </a>
          ))}
        </DropdownContent>
      </DropdownContainer>
    </DropdownWrapper>
  );
}

export default CategoryDropdown;

//Styling for the CategoryDropdown component
const DropdownWrapper = styled.div`
  background-color: var(--color-header-footer-background);
  display: inline-block;
  margin: 2rem;
  position: relative;
  text-align: left;

  @media (max-width: 768px) {
    display: block;
    margin: 2rem auto;
    text-align: center;
  }
`;

const DropdownContainer = styled.div`
  position: relative;
  display: inline-block;

  @media (max-width: 768px) {
    display: block;
    text-align: center;
  }
`;

const DropdownButton = styled.button`
  text-transform: uppercase;
  border: none;
  cursor: pointer;
  padding: 1rem 2rem 1rem 1rem;
  background-color: var(--color-header-footer-background);
  color: white;

  &:hover {
    color: var(--color-accent);
    background-color: var(--color-header-footer-background);
  }
`;

const DropdownContent = styled.div<DropdownContentProps>`
  display: ${({ $isOpen }) => ($isOpen ? 'grid' : 'none')};
  position: absolute;
  grid-template-columns: repeat(2, 1fr);
  gap: 0.5rem;
  background-color: var(--color-header-footer-background);
  padding: 0.5rem;
  z-index: 1;
  top: 100%;
  left: 0;
  right: 0;
  width: auto;

  a {
    color: white;
    text-decoration: none;
    padding: 0.5rem;
    text-align: left;

    &:hover {
      color: var(--color-accent);
    }
  }
`;

const StyledSVG = styled.img`
  width: 1rem;
  height: 1rem;
  color: white;
  margin-left: 1rem;
`;

const FlexContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;
