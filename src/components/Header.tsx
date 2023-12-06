import { useState } from 'react';
import styled from 'styled-components';
import { Link as RouterLink } from 'react-router-dom';
import SearchBar from './SearchBar';

// Styling for the header
const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  background-color: black;
  color: white;
`;

// Styling for navigation links
const NavLinks = styled.nav`
  a {
    color: white;
    text-decoration: none;
    text-transform: uppercase;
    margin: 2rem;

    &:hover {
      text-decoration: underline;
    }
  }
  @media (max-width: 768px) {
    display: none;
  }
`;

// Styling for hamburger menu icon
const HamburgerIcon = styled.div`
  display: none;

  @media (max-width: 768px) {
    display: block;
    cursor: pointer;
  }
`;

// Styling for mobile menu
const MobileMenu = styled.div<{ isOpen: boolean }>`
  display: ${({ isOpen }) => (isOpen ? 'block' : 'none')};
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background-color: #333;
  padding: 1rem;
  z-index: 10;
  height: 100vh;
  overflow: auto;
  transform: ${({ isOpen }) =>
    isOpen ? 'translateX(0)' : 'translateX(-100%)'};
  transition: transform 0.3s ease-in-out;

  a {
    color: white;
    text-decoration: none;
    text-transform: uppercase;
    margin: 2rem;
    display: flex;

    &:hover {
      text-decoration: underline;
    }
  }
`;

//Styling for the close button on mobile
const CloseButton = styled.button`
  position: absolute;
  top: 1rem;
  right: 1rem;
  border: none;
  background-color: transparent;
  color: white;
  padding: 0.5rem 1rem;
  cursor: pointer;
  outline: none;
`;

const MenuItemsContainer = styled.div`
  padding-top: 3rem;
`;

//Toggles the hamburger menu
const useDisclosure = () => {
  const [isOpen, setIsOpen] = useState(false);
  const onOpen = () => setIsOpen(true);
  const onClose = () => setIsOpen(false);

  return { isOpen, onOpen, onClose };
};

function Header() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  //Closes the hamburger menu when a link is clicked
  const handleLinkClick = () => {
    onClose();
  }

  return (
    <StyledHeader>
      <div>FilmFlix</div>
      <NavLinks>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/categories">Categories</RouterLink>
        <RouterLink to="/bookmarks">Bookmarks</RouterLink>
      </NavLinks>
    <SearchBar showInMobile={false} />
      <HamburgerIcon onClick={onOpen}>☰</HamburgerIcon>
      <MobileMenu isOpen={isOpen}>
      <CloseButton onClick={onClose}>X</CloseButton>
      <MenuItemsContainer>
        <SearchBar showInMobile={true} />
        <RouterLink to="/" onClick={handleLinkClick}>Home</RouterLink>
        <RouterLink to="/categories" onClick={handleLinkClick}>Categories</RouterLink>
        <RouterLink to="/bookmarks" onClick={handleLinkClick}>Bookmarks</RouterLink>
        </MenuItemsContainer>
      </MobileMenu>
    </StyledHeader>
  );
}

export default Header;
