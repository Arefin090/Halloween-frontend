// src/styles/FooterStyles.js
import styled from 'styled-components';

export const FooterContainer = styled.footer`
  background-color: #000;
  color: #fff;
  text-align: center;
  padding: 40px 0;

  @media (max-width: 480px) {
    padding: 30px 0; /* Reduce padding for mobile screens */
  }
`;

export const SocialLinks = styled.div`
  margin-top: 30px;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;

  a {
    margin: 0 15px;

    @media (max-width: 480px) {
      margin: 10px; /* Adjust margin for smaller screens */
    }
  }
`;

export const SocialIcon = styled.img`
  width: 50px;
  height: 50px;
  transition: all 0.3s ease-in-out;

  &:hover {
    transform: scale(1.1);
  }

  @media (max-width: 480px) {
    width: 40px; /* Reduce icon size for mobile */
    height: 40px;
  }
`;
