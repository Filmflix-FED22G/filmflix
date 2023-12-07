import styled from 'styled-components';
import { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const DropdownContainer = styled.div`
  position: relative;
  display: inline-block;
  margin: 2rem;

  @media (max-width: 768px) {
    display: block;
    text-align: center;
  }
`;

const DropdownButton = styled.button`
  text-transform: uppercase;
  border-radius: 0;
  border: none;
  cursor: pointer;
  padding: 0.5rem 1rem;
  background-color: var(--color-dark-grey);
  color: white;

  &:hover {
    color: var(--color-accent);
  }

  @media (max-width: 768px) {
    display: inline-block; // Keeps the button inline but centered
  }
`;

const DropdownContent = styled.div`
  display: ${(props) => (props.isOpen ? 'block' : 'none')};
  position: absolute;
  background-color: #f9f9f9;
  min-width: 160px;
  z-index: 1;
  margin-top: 1rem;

  a {
    color: white;
    background-color: black;
    text-decoration: none;
    display: block;

    &:hover {
      color: var(--color-accent);
    }
  }

  @media (max-width: 768px) {
    position: static;
    transform: none;
  }
`;

function CategoryDropdown() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const dropdownRef = useRef<HTMLDivElement>(null);
  const categories = [
    'Drama',
    'Crime',
    'Action',
    'Biography',
    'History',
    'Adventure',
    'Western',
    'Romance',
    'Sci-Fi',
    'Fantasy',
    'Thriller',
    'War',
    'Mystery',
    'Music',
    'Horror',
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
    <DropdownContainer ref={dropdownRef}>
      <DropdownButton onClick={() => setIsOpen(!isOpen)}>
        <h4>Categories</h4>
      </DropdownButton>
      <DropdownContent isOpen={isOpen}>
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
  );
}

export default CategoryDropdown;
