import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import styled from 'styled-components';
import facebookwhite from '/icons/facebookwhite.svg';
import filmFlix from '/icons/filmflix-logo.svg';
import instagramwhite from '/icons/instagramwhite.svg';
import youtubewhite from '/icons/youtubewhite.svg';

const Footer: React.FC = () => {
  return (
    <FooterContainer>
      <div style={{ flex: 1 }}>
        <StyledLogo to="/">
          <LogoImage src={filmFlix} alt="filmFlix Logo" />
        </StyledLogo>
      </div>
      <div style={{ flex: 1 }}>
        <FooterHeading>Info</FooterHeading>
        <FooterList>
          <FooterListItem>Customer Service</FooterListItem>
          <FooterListItem>Terms & Conditions</FooterListItem>
          <FooterListItem>Privacy Policy</FooterListItem>
          <FooterListItem>Cookie Settings</FooterListItem>
        </FooterList>
      </div>
      <div style={{ flex: 1 }}>
        <FooterHeading>About Us</FooterHeading>
        <FooterList>
          <FooterListItem>Press</FooterListItem>
          <FooterListItem>News</FooterListItem>
          <FooterListItem>Career</FooterListItem>
        </FooterList>
      </div>
      <div style={{ flex: 1 }}>
        <FooterHeading>Subscribe</FooterHeading>
        <FooterSubscribeText>
          Enter your email to get the info about the latest FilmFlix news and
          events
        </FooterSubscribeText>
        <FooterForm>
          {' '}
          <FooterSubscribeInput
            type="email"
            id="email"
            name="email"
            placeholder="name@example.com"
          />
          <FooterSubscribeButton type="submit">Ok</FooterSubscribeButton>
        </FooterForm>
      </div>
      <div style={{ flex: 1 }}>
        <ImageContainer>
          <FooterSoMe src={facebookwhite} alt="Facebook logo" />
          <FooterSoMe src={youtubewhite} alt="YouTube logo" />
          <FooterSoMe src={instagramwhite} alt="Instagram logo" />
        </ImageContainer>
      </div>
    </FooterContainer>
  );
};

export default Footer;

const FooterContainer = styled.footer`
  display: flex;
  justify-content: space-between;
  background-color: var(--color-header-footer-background);
  color: var(--color-light);
  padding: var(--default-padding-top-bottom) var(--default-padding-left-right);
  @media screen and (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    text-align: center;
    height: auto;
    gap: 2rem;
  }
`;
const LogoImage = styled.img`
  width: 100px;
  height: auto;
`;

const StyledLogo = styled(RouterLink)`
  text-decoration: none;
  cursor: pointer;

  &:hover {
    text-decoration: none;
  }
`;

const FooterHeading = styled.h4`
  margin-top: 0;
  margin-bottom: 1rem;
  text-transform: uppercase;

  @media screen and (max-width: 768px) {
    margin-top: 1rem;
    margin-bottom: 0;
  }
`;
const FooterList = styled.ul`
  list-style: none;
  padding: 0;
  font-family: 'Overpass', sans-serif;
  font-weight: var(--font-weight-regular);
`;

const FooterListItem = styled.li`
  font-size: var(--font-size-s);
  padding: 0.5rem 0;
  @media screen and (max-width: 768px) {
    padding: 0.25rem 0;
  }
`;

const FooterSubscribeText = styled.p`
  padding-top: 0.5rem;

  @media screen and (max-width: 768px) {
    max-width: 20rem;
    margin: 0 auto;
    padding-top: 0.25rem;
  }

  @media screen and (max-width: 540px) {
    max-width: 16rem;
  }
`;
const FooterForm = styled.form`
  display: flex;
  margin-top: 2rem;

  @media screen and (max-width: 768px) {
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
  }
`;

const ImageContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 2rem;
  @media screen and (max-width: 768px) {
    margin-top: 2rem;
  }
`;
const FooterSoMe = styled.img`
  height: 1.5rem;
`;

const FooterSubscribeInput = styled.input`
  font-family: 'Overpass', sans-serif;
  font-size: var(--font-size-s);
  padding: 0.4rem 0.7rem 0.3rem 0.7rem;
  min-height: 2.5rem;
`;

const FooterSubscribeButton = styled.button`
  border-radius: 0;
  border: 0.2rem solid var(--color-light);
  padding: 0.4rem 0.4rem 0.3rem 0.4rem;
  transition: 0.25s;
  background-color: var(--color-accent);
  color: var(--color-light);
  min-height: 2.5rem;

  &:hover {
    background-color: var(--color-dark-grey);
  }
`;
