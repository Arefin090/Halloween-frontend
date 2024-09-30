// src/styles/FooterStyles.js
import styled from 'styled-components';

export const FooterContainer = styled.footer`
  background-color: #000;
  color: #fff;
  text-align: center;
  padding: 40px 0;

  h1 {
    font-size: 1.8rem;
    margin-bottom: 15px;
    line-height: 1.5;
    font-weight: 600;
  }

  h2 {
    font-size: 3.5rem;
    margin-bottom: 20px;
    font-weight: bold;
  }

  p {
    font-size: 1rem;
    margin-top: 30px;
    color: #fff;
  }
`;

export const BoostButton = styled.a`
  display: inline-block;
  background-color: #fff;
  color: #000;
  border-radius: 50px;
  padding: 15px 30px;
  font-size: 1.2rem;
  text-decoration: none;
  margin-bottom: 20px;
  transition: all 0.3s ease-in-out;

  &:hover {
    background-color: #ff4500;
    color: #fff;
    transform: scale(1.05);
  }
`;

export const SocialLinks = styled.div`
  margin-top: 30px;

  a {
    margin: 0 10px;
  }
`;

export const SocialIcon = styled.img`
  width: 50px;
  height: 50px;
  transition: all 0.3s ease-in-out;

  &:hover {
    transform: scale(1.1);
  }
`;
