// src/styles/MapInfoStyles.js
import styled from 'styled-components';

export const MapInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #f8f8f8;
  padding: 60px;
  text-align: center;
`;

// Main heading, bold and large
export const Heading = styled.h1`
  font-size: 3rem; /* Adjusted for bigger text */
  font-weight: bold;
  color: #000;
  margin-bottom: 20px;
`;

// Second line of text, slightly smaller and slightly bold
export const SubText = styled.p`
  font-size: 1.5rem; /* Slightly smaller than the heading */
  font-weight: 600; /* Slightly bold */
  color: #333;
  margin-bottom: 20px;
`;

// Regular paragraph, standard font size
export const Text = styled.p`
  font-size: 1.2rem;
  color: #333;
  margin-bottom: 30px;
`;

export const MapImage = styled.img`
  width: 100%;
  max-width: 600px;
  height: auto;
  margin-bottom: 30px;
`;

export const AddButton = styled.button`
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
`;
