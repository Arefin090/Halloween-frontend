// src/styles/EventSectionStyles.js
import styled from 'styled-components';

export const EventContainer = styled.div`
  background-color: #f8f8f8;
  padding: 50px 20px;
  text-align: center;
  border-top: 3px solid #e0e0e0;

  @media (max-width: 768px) {
    padding: 40px 15px; /* Adjust padding for tablets */
  }

  @media (max-width: 480px) {
    padding: 30px 10px; /* Further reduce padding for mobile */
  }
`;

export const EventHeading = styled.h2`
  font-size: 2.5rem;
  font-weight: bold;
  color: #000;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    font-size: 2rem; /* Adjust heading size for tablets */
  }

  @media (max-width: 480px) {
    font-size: 1.8rem; /* Reduce heading size for smaller mobile screens */
    margin-bottom: 15px; /* Adjust margin for mobile */
  }
`;

export const EventDescription = styled.p`
  font-size: 1.2rem;
  color: #333;
  margin-bottom: 30px;
  max-width: 900px;
  margin-left: auto;
  margin-right: auto;

  @media (max-width: 768px) {
    font-size: 1.1rem; /* Adjust font size for tablets */
    margin-bottom: 25px;
  }

  @media (max-width: 480px) {
    font-size: 1rem; /* Further reduce font size for mobile */
    margin-bottom: 20px; /* Adjust margin for mobile */
  }
`;

export const PlaceholderText = styled.p`
  font-size: 1.4rem;
  font-weight: bold;
  color: #ff6600;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    font-size: 1.3rem; /* Adjust font size for tablets */
  }

  @media (max-width: 480px) {
    font-size: 1.2rem; /* Further reduce font size for mobile */
    margin-bottom: 15px; /* Adjust margin for mobile */
  }
`;

export const ExploreButton = styled.a`
  display: inline-block;
  background-color: #fff; /* Ensure the background is white */
  color: #000; /* Ensure the text is black */
  padding: 10px 20px;
  border-radius: 30px;
  font-size: 1rem;
  text-decoration: none;
  text-transform: uppercase;
  border: 2px solid black; /* Add the black border */
  transition: all 0.3s ease-in-out;

  &:hover {
    background-color: #ff6600; /* Change to pumpkin color on hover */
    color: white; /* Change text to white on hover */
    transform: scale(1.05);
  }

  @media (max-width: 768px) {
    font-size: 0.9rem;
    padding: 8px 18px;
  }

  @media (max-width: 480px) {
    font-size: 0.8rem;
    padding: 6px 16px;
  }
`;

