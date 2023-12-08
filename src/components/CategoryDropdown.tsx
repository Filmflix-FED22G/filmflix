import styled from 'styled-components';
import { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

interface DropdownContentProps {
  $isOpen: boolean;
}

const DropdownWrapper = styled.div`
  background-color: var(--color-dark-grey);
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
  background-color: var(--color-dark-grey);
  color: white;

  &:hover {
    color: var(--color-accent);
  }
`;

const DropdownContent = styled.div<DropdownContentProps>`
  display: ${({ $isOpen }) => ($isOpen ? 'grid' : 'none')};
  position: absolute;
  grid-template-columns: repeat(2, 1fr);
  gap: 0.5rem;
  background-color: var(--color-dark-grey);
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

function CategoryDropdown() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const dropdownRef = useRef<HTMLDivElement>(null);
  const categories = [
    'Action',
    'Adventure',
    'Biography',
    'Crime',
    'Drama',
    'Fantasy',
    'History',
    'Horror',
    'Music',
    'Mystery',
    'Romance',
    'Sci-Fi',
    'Thriller',
    'War',
    'Western',
  ];

  const handleCategoryClick = (category: string) => {
    setIsOpen(false);
    navigate(`/categories/${category.toLowerCase()}`);
  };

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
          <h4>Categories</h4>
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
