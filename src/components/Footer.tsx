import React from 'react';
import styled from 'styled-components';
import facebook from '/icons/facebook.svg';
import filmFlix from '/icons/filmFlix.svg';
import instagram from '/icons/instagram.svg';
import youtube from '/icons/youtube.svg';

const FooterContainer = styled.footer`
  display: flex;
  justify-content: center;
  background-color: #000;
  color: #fff;
  height: 12rem;
  padding: 3rem;
`;
const LogoImage = styled.img`
  width: 100px;
  height: auto;
`;

const FooterHeading = styled.h4`
  margin-top: 0;
  margin-bottom: 1rem;
`;
const FooterList = styled.ul`
  list-style: none;
  padding: 0;
  font-family: 'Overpass', sans-serif;
  font-weight: var(--font-weight-regular);
`;

const FooterListItem = styled.li`
  padding: 0.5rem 0;
`;
const FooterForm = styled.form`
  display: flex;
  margin-top: 2rem;
`;

const ImageContainer = styled.div`
  display: flex;
  justify-content: space-around;
`;
const FooterSoMe = styled.img`
  width: 1.5rem;
  height: auto;
`;
const Footer: React.FC = () => {
  return (
    <FooterContainer>
      <div style={{ flex: 1 }}>
        <LogoImage src={filmFlix} alt="FilmFlix Logo" />
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
        <p>
          Enter your email to get the info about the latest FilmFlix news and
          events
        </p>
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
          <FooterSoMe src={facebook} alt="Image 1" />
          <FooterSoMe src={youtube} alt="Image 3" />
          <FooterSoMe src={instagram} alt="Image 2" />
        </ImageContainer>
      </div>
    </FooterContainer>
  );
};

export default Footer;
