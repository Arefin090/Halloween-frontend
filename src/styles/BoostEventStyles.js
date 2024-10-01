// src/styles/BoostEventStyles.js
import styled from 'styled-components';

export const BoostEventContainer = styled.div`
  background-color: #000; /* Black background */
  color: #fff; /* White text */
  text-align: center; /* Center align the text */
  padding: 40px 20px;

  @media (max-width: 480px) {
    padding: 30px 10px; /* Adjust padding for mobile view */
  }
`;

export const BoostHeading = styled.h1`
  font-size: 2rem; /* Main heading size */
  font-weight: bold;
  margin-bottom: 15px;
  line-height: 1.5;

  @media (max-width: 480px) {
    font-size: 1.5rem; /* Smaller font size for mobile */
  }
`;

export const BoostSubheading = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 20px;
  font-weight: bold;

  @media (max-width: 480px) {
    font-size: 1.8rem; /* Adjust for mobile */
  }
`;

export const BoostEmailButton = styled.a`
  display: inline-block;
  background-color: #fff;
  color: #000;
  border-radius: 50px;
  padding: 15px 30px;
  font-size: 1.2rem;
  text-decoration: none;
  margin-top: 20px;
  transition: all 0.3s ease-in-out;

  &:hover {
    background-color: #ff4500;
    color: #fff;
    transform: scale(1.05);
  }

  @media (max-width: 480px) {
    font-size: 1rem; /* Adjust font size for mobile */
    padding: 12px 25px; /* Adjust padding for mobile */
  }
`;
