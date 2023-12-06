import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  display: flex;
  justify-content: center;

  background-color: #000;
  color: #fff;
  height: 200px;
  padding: 50px;
`;

const Footer: React.FC = () => {
  return (
    <FooterContainer>
      <div style={{ flex: 1 }}>Div 1</div>
      <div style={{ flex: 1 }}>Div 2</div>
      <div style={{ flex: 1 }}>Div 3</div>
      <div style={{ flex: 1 }}>Div 4</div>
      <div style={{ flex: 1 }}>Div 5</div>
    </FooterContainer>
  );
};

export default Footer;
