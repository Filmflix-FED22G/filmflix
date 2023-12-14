import { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import styled from 'styled-components';
import SearchBar from './SearchBar';
import close from '/icons/close.svg';
import filmFlix from '/icons/filmflix-logo.svg';
import goldburger from '/icons/goldburger.svg';
import goldclose from '/icons/goldclose.svg';
import hamburger from '/icons/hamburger.svg';

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
    <StyledHeader>
      <StyledLogo to="/">
        <LogoImage src={filmFlix} alt="filmFlix Logo" />
      </StyledLogo>
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
          <StyledLink>
            <RouterLink to="/" onClick={handleLinkClick} id="customRouterLink">
              Home
            </RouterLink>
            <RouterLink
              to="/categories"
              onClick={handleLinkClick}
              id="customRouterLink"
            >
              Categories
            </RouterLink>
            <RouterLink
              to="/bookmarks"
              onClick={handleLinkClick}
              id="customRouterLink"
            >
              Bookmarks
            </RouterLink>
          </StyledLink>
        </MenuItemsContainer>
      </MobileMenu>
    </StyledHeader>
  );
}

export default Header;

// Styling for the header
const StyledLink = styled.div`
  #customRouterLink {
    color: var(--color-light);
    text-decoration: none;
    text-transform: uppercase;
    margin: 2rem 0;

    &:hover {
      color: var(--color-hover);
    }
  }
`;

const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: var(--color-header-footer-background);
  color: var(--color-light);
  padding: 1.5rem var(--default-padding-left-right);

  @media (max-width: 912px) {
    padding: 1.4rem var(--default-padding-left-right-tablet);
  }

  @media (max-width: 420px) {
    padding: 1.3rem var(--default-padding-left-right-mobile);
  }
`;

const LogoImage = styled.img`
  width: 7.5rem;
  height: auto;

  @media (max-width: 912px) {
    width: 6.25rem;
  }

  @media (max-width: 420px) {
    width: 5.625rem;
  }
`;

// Styling for navigation links
const NavLinks = styled.nav`
  a {
    color: var(--color-light);
    text-decoration: none;
    text-transform: uppercase;
    margin: 2rem;

    &:hover {
      color: var(--color-hover);
    }
  }
  @media (max-width: 912px) {
    display: none;
  }
`;

// Styling for hamburger menu icon
const HamburgerIcon = styled.div`
  display: none;

  @media (max-width: 912px) {
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
  z-index: 100;
  height: 100vh;
  overflow: auto;
  transform: ${({ $isOpen }) =>
    $isOpen ? 'translateX(0)' : 'translateX(-100%)'};
  transition: transform 0.3s ease-in-out;
  padding: 0 var(--default-padding-left-right-tablet);

  @media (max-width: 420px) {
    padding: 0 var(--default-padding-left-right-mobile);
  }

  a {
    color: white;
    text-decoration: none;
    text-transform: uppercase;
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

const StyledLogo = styled(RouterLink)`
  text-decoration: none;
  cursor: pointer;
  line-height: 0;

  &:hover {
    text-decoration: none;
  }
`;
