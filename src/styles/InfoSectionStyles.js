// src/styles/InfoSectionStyles.js
import styled from 'styled-components';

// Container for the info section
export const SectionContainer = styled.div`
  text-align: center;
  padding: 60px 20px;
  background-color: #E8E6E6; /* Light grey background */

  @media (max-width: 768px) {
    padding: 40px 20px;
  }

  @media (max-width: 480px) {
    padding: 30px 15px; /* Reduce padding for smaller screens */
  }
`;

// Title styling with line breaks
export const InfoTitle = styled.h1`
  font-size: 2.5rem;
  font-weight: bold;
  color: #000;
  margin-bottom: 1rem;
  line-height: 1.3;
  white-space: pre-wrap; /* To handle line breaks correctly */

  @media (max-width: 768px) {
    font-size: 2rem;
    margin-bottom: 1.2rem;
  }

  @media (max-width: 480px) {
    font-size: 1.2rem; /* Further reduced font size for mobile */
    line-height: 1.2; /* Adjusted line-height to prevent breakage */
    margin-bottom: 1rem;
    word-wrap: break-word; /* Ensure long words break properly */
  }
`;

// Info text styling
export const InfoText = styled.p`
  font-size: 1.2rem;
  line-height: 1.6;
  color: #333;
  margin-bottom: 2rem;

  @media (max-width: 768px) {
    font-size: 1rem;
    margin-bottom: 1.5rem;
  }

  @media (max-width: 480px) {
    font-size: 0.9rem; /* Smaller font size for mobile */
    line-height: 1.4;
    margin-bottom: 1.2rem; /* Adjust spacing for mobile */
  }
`;

// Button to add address to map (using your previous styling)
export const MapButton = styled.button`
  background-color: #000;
  color: white;
  border: none;
  border-radius: 50px;
  padding: 15px 30px;
  font-size: 1.2rem;
  cursor: pointer;
  text-transform: uppercase;
  transition: all 0.3s ease-in-out;

  &:hover {
    background-color: #ff4500;
    transform: scale(1.05);
  }

  @media (max-width: 768px) {
    font-size: 1rem;
    padding: 12px 24px;
  }

  @media (max-width: 480px) {
    font-size: 0.9rem; /* Smaller font for mobile */
    padding: 10px 20px; /* Adjust padding for mobile */
  }
`;
