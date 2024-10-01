import React from 'react';
import { HeaderContainer, Logo, EmailButton, GhostIcon } from '../styles/HeaderStyles';

const Header = () => {
  return (
    <HeaderContainer>
      <Logo
        src="https://static.wixstatic.com/media/84f0f7_27410259e7b7409397d38cb47f0a31cc~mv2.png/v1/fill/w_300,h_78,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/84f0f7_27410259e7b7409397d38cb47f0a31cc~mv2.png"
        alt="TinyTix Logo"
      />
      <EmailButton href="mailto:hello@tinytix.com.au?subject=Advertise%20a%20Halloween%20Event">
        <GhostIcon>👻</GhostIcon> Email Us
      </EmailButton>
    </HeaderContainer>
  );
};

export default Header;
