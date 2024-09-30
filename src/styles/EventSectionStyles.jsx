// src/styles/EventSectionStyles.js
import styled from 'styled-components';

export const EventContainer = styled.div`
  background-color: #f8f8f8;
  padding: 50px 20px;
  text-align: center;
  border-top: 3px solid #e0e0e0;
`;

export const EventHeading = styled.h2`
  font-size: 2.5rem;
  font-weight: bold;
  color: #000;
  margin-bottom: 20px;
`;

export const EventDescription = styled.p`
  font-size: 1.2rem;
  color: #333;
  margin-bottom: 30px;
  max-width: 900px;
  margin-left: auto;
  margin-right: auto;
`;

export const PlaceholderText = styled.p`
  font-size: 1.4rem;
  font-weight: bold;
  color: #ff6600;
  margin-bottom: 20px;
`;

export const ExploreButton = styled.a`
  display: inline-block;
  background-color: #000;
  color: #fff;
  padding: 15px 30px;
  border-radius: 50px;
  font-size: 1.2rem;
  text-decoration: none;
  text-transform: uppercase;
  transition: all 0.3s ease-in-out;

  &:hover {
    background-color: #ff4500;
    transform: scale(1.05);
  }
`;
