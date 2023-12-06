import React from 'react';
import styled from 'styled-components';
import FilmFlix from '../../assets/FilmFlix.svg';

const FooterContainer = styled.footer`
  display: flex;
  justify-content: center;
  background-color: #000;
  color: #fff;
  height: 12rem;
  padding: 3rem;
`;
const LogoImage = styled.img`
  width: 100px; // Adjust the width as needed
  height: auto;
`;

const FooterHeading = styled.h4`
  margin-top: 0;
`;
const FooterList = styled.ul`
  list-style: none;
  padding: 0;
`;

const FooterListItem = styled.li`
  padding: 0.5rem 0;
`;
const FooterForm = styled.form`
  display: flex;
`;

const Footer: React.FC = () => {
  return (
    <FooterContainer>
      <div style={{ flex: 1 }}>
        <LogoImage src={FilmFlix} alt="FilmFlix Logo" />
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
      <div style={{ flex: 1 }}>Div 5</div>
    </FooterContainer>
  );
};

export default Footer;
