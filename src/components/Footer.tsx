import React from 'react';
import styled from 'styled-components';
import facebookwhite from '/icons/facebookwhite.svg';
import filmFlix from '/icons/filmflix.svg';
import instagramwhite from '/icons/instagramwhite.svg';
import youtubewhite from '/icons/youtubewhite.svg';

const Footer: React.FC = () => {
  return (
    <FooterContainer>
      <div style={{ flex: 1 }}>
        <a href="/">
          <LogoImage src={filmFlix} alt="filmFlix Logo" />
        </a>
      </div>
      <div style={{ flex: 1 }}>
        <FooterHeading>INFO</FooterHeading>
        <FooterList>
          <FooterListItem>Customer Service</FooterListItem>
          <FooterListItem>Terms & Conditions</FooterListItem>
          <FooterListItem>Privacy Policy</FooterListItem>
          <FooterListItem>Cookie Settings</FooterListItem>
        </FooterList>
      </div>
      <div style={{ flex: 1 }}>
        <FooterHeading>ABOUT US</FooterHeading>
        <FooterList>
          <FooterListItem>Press</FooterListItem>
          <FooterListItem>News</FooterListItem>
          <FooterListItem>Career</FooterListItem>
        </FooterList>
      </div>
      <div style={{ flex: 1 }}>
        <FooterHeading>SUBSCRIBE</FooterHeading>
        <FooterSubscribeText>
          Enter your email to get the info about the latest FilmFlix news and
          events
        </FooterSubscribeText>
        <FooterForm>
          {' '}
          <input
            type="email"
            id="email"
            name="email"
            placeholder="name@example.com"
          />
          <button type="submit">OK</button>
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
  justify-content: center;
  background-color: var(--color-header-footer-background);
  color: #fff;
  padding: 2rem;
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

const FooterHeading = styled.h4`
  margin-top: 0;
  margin-bottom: 1rem;
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
  padding: 0.5rem 0;
  @media screen and (max-width: 768px) {
    padding: 0.25rem 0;
  }
`;

const FooterSubscribeText = styled.p`
  @media screen and (max-width: 768px) {
    max-width: 20rem;
    margin: 0 auto;
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
  justify-content: center;
  gap: 2rem;
  @media screen and (max-width: 768px) {
    margin-top: 2rem;
  }
`;
const FooterSoMe = styled.img`
  height: 1.5rem;
`;
