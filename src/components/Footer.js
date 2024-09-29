// src/components/Footer.js
import React from 'react';
import { FooterContainer, SocialLinks, BoostButton, SocialIcon } from '../styles/FooterStyles';

const Footer = () => {
  return (
    <FooterContainer>
      <h1>🎃 Reach families looking for spooky fun. <br /> Promote with Tinytix today!</h1>
      <h2>Add your Halloween Event</h2>

      <BoostButton href="mailto:hello@tinytix.com.au">
        👻 Boost Your Event Now!
      </BoostButton>

      <SocialLinks>
        <a href="https://www.facebook.com/tinytix" target="_blank" rel="noopener noreferrer">
          <SocialIcon src="https://static.wixstatic.com/media/11062b_f4e3e7f537ff4762a1914aa14e3e36b9~mv2.png/v1/fill/w_78,h_78,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/11062b_f4e3e7f537ff4762a1914aa14e3e36b9~mv2.png" alt="Facebook" />
        </a>
        <a href="https://www.instagram.com/freekidseventsinaustralia/" target="_blank" rel="noopener noreferrer">
          <SocialIcon src="https://static.wixstatic.com/media/11062b_603340b7bcb14e7785c7b65b233cd9f9~mv2.png/v1/fill/w_78,h_78,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/11062b_603340b7bcb14e7785c7b65b233cd9f9~mv2.png" alt="Instagram" />
        </a>
        <a href="https://www.tiktok.com/@tinytix.com.au" target="_blank" rel="noopener noreferrer">
          <SocialIcon src="https://static.wixstatic.com/media/11062b_7edd292d29b34c309100535a26dc5033~mv2.png/v1/fill/w_78,h_78,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/11062b_7edd292d29b34c309100535a26dc5033~mv2.png" alt="TikTok" />
        </a>
        <a href="https://www.threads.net/@freekidseventsinaustralia" target="_blank" rel="noopener noreferrer">
          <SocialIcon src="https://static.wixstatic.com/media/11062b_de6ea2753cd641be9085a85b55be7882~mv2.png/v1/fill/w_78,h_78,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/11062b_de6ea2753cd641be9085a85b55be7882~mv2.png" alt="Threads" />
        </a>
      </SocialLinks>
    </FooterContainer>
  );
};

export default Footer;
