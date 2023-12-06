import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  display: flex;
  justify-content: center;
  background-color: #000;
  color: #fff;
  height: 12rem;
  padding: 3rem;
`;
const FooterList = styled.ul`
  list-style: none;
  padding: 0;
`;

const FooterListItem = styled.li`
  padding: 0.5rem 0;
`;

const Footer: React.FC = () => {
  return (
    <FooterContainer>
      <div style={{ flex: 1 }}>Div 1</div>
      <div style={{ flex: 1 }}>
        <h3>INFO</h3>
        <FooterList>
          <FooterListItem>Customer Service</FooterListItem>
          <FooterListItem>Terms & Conditions</FooterListItem>
          <FooterListItem>Privacy Policy</FooterListItem>
          <FooterListItem>Cookie Settings</FooterListItem>
        </FooterList>
      </div>
      <div style={{ flex: 1 }}>
        <h3>ABOUT US</h3>
        <FooterList>
          <FooterListItem>Press</FooterListItem>
          <FooterListItem>News</FooterListItem>
          <FooterListItem>Career</FooterListItem>
        </FooterList>
      </div>
      <div style={{ flex: 1 }}>
        <h3>SUBSCRIBE</h3>
      </div>
      <div style={{ flex: 1 }}>Div 5</div>
    </FooterContainer>
  );
};

export default Footer;
