import React from 'react';
import styled from 'styled-components';

const Header = () => {
  return (
    <HeaderContainer>
      <Logo src="https://static.wixstatic.com/media/84f0f7_27410259e7b7409397d38cb47f0a31cc~mv2.png/v1/fill/w_300,h_78,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/84f0f7_27410259e7b7409397d38cb47f0a31cc~mv2.png" alt="TinyTix Logo" />
      <EmailButton href="mailto:support@tinytix.com.au">
        <GhostIcon>👻</GhostIcon> Email Us
      </EmailButton>
    </HeaderContainer>
  );
};

export default Header;

// Styled Components
const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  background-color: white;
  box-shadow: 0 4px 2px -2px gray;
`;

const Logo = styled.img`
  width: 150px;
`;

const EmailButton = styled.a`
  padding: 10px 20px;
  font-size: 16px;
  font-weight: bold;
  color: black;
  border: 2px solid black;
  border-radius: 30px;
  display: flex;
  align-items: center;
  text-decoration: none;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: black;
    color: white;
  }
`;

const GhostIcon = styled.span`
  margin-right: 8px;
`;
