import { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import styled from 'styled-components';
import SearchBar from './SearchBar';
import close from '/icons/close.svg';
import goldburger from '/icons/goldburger.svg';
import goldclose from '/icons/goldclose.svg';
import hamburger from '/icons/hamburger.svg';

// Styling for the header
const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  background-color: var(--color-header-footer-background);
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
const MobileMenu = styled.div<{ $isOpen: boolean }>`
  display: ${({ $isOpen }) => ($isOpen ? 'block' : 'none')};
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background-color: var(--color-header-footer-background);
  padding: 1rem;
  z-index: 10;
  height: 100vh;
  overflow: auto;
  transform: ${({ $isOpen }) =>
    $isOpen ? 'translateX(0)' : 'translateX(-100%)'};
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

const StyledSVG = styled.img`
  width: 1rem;
  height: 1rem;
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
  const [isHamburgerHovering, setIsHamburgerHovering] = useState(false);
  const [isCloseHovering, setIsCloseHovering] = useState(false);

  //Closes the hamburger menu when a link is clicked
  const handleLinkClick = () => {
    onClose();
  };

  return (
    <div className="grid-container">
      <StyledHeader>
        <h3>FilmFlix</h3>
        <NavLinks>
          <RouterLink to="/">Home</RouterLink>
          <RouterLink to="/categories">Categories</RouterLink>
          <RouterLink to="/bookmarks">Bookmarks</RouterLink>
        </NavLinks>
        <SearchBar $showInMobile={false} />
        <HamburgerIcon
          onClick={onOpen}
          onMouseEnter={() => setIsHamburgerHovering(true)}
          onMouseLeave={() => setIsHamburgerHovering(false)}
        >
          <StyledSVG
            src={isHamburgerHovering ? goldburger : hamburger}
            alt="hamburger menu"
          />
        </HamburgerIcon>
        <MobileMenu $isOpen={isOpen}>
          <CloseButton
            onClick={onClose}
            onMouseEnter={() => setIsCloseHovering(true)}
            onMouseLeave={() => setIsCloseHovering(false)}
          >
            <StyledSVG
              src={isCloseHovering ? goldclose : close}
              alt="close button"
            />
          </CloseButton>
          <MenuItemsContainer>
            <SearchBar $showInMobile={true} />
            <RouterLink to="/" onClick={handleLinkClick}>
              Home
            </RouterLink>
            <RouterLink to="/categories" onClick={handleLinkClick}>
              Categories
            </RouterLink>
            <RouterLink to="/bookmarks" onClick={handleLinkClick}>
              Bookmarks
            </RouterLink>
          </MenuItemsContainer>
        </MobileMenu>
      </StyledHeader>
    </div>
  );
}

export default Header;
