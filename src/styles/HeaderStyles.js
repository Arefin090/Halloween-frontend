import styled from 'styled-components';

// Header container with responsiveness
export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  background-color: white;
  box-shadow: 0 4px 2px -2px gray;

  @media (max-width: 768px) {
    flex-direction: row;  /* Keep row direction in mobile */
    justify-content: space-between; /* Make sure button stays on the right */
  }

  @media (max-width: 480px) {
    padding: 10px;
  }
`;

// Logo styling with responsiveness
export const Logo = styled.img`
  width: 150px;

  @media (max-width: 768px) {
    width: 120px;
  }

  @media (max-width: 480px) {
    width: 100px;
  }
`;

// Email button styling, including pumpkin hover color without border
export const EmailButton = styled.a`
  padding: 10px 20px;
  font-size: 16px;
  font-weight: bold;
  color: black;
  border: 2px solid black;
  border-radius: 30px;
  display: flex;
  align-items: center;
  text-decoration: none;
  transition: background-color 0.3s ease, border-color 0.3s ease;

  &:hover {
    background-color: #ff6600;  /* Pumpkin color on hover */
    color: white;
    border-color: #ff6600;  /* Remove black border */
  }

  @media (max-width: 768px) {
    padding: 8px 18px;
    font-size: 14px;
  }

  @media (max-width: 480px) {
    padding: 6px 15px;
    font-size: 12px;
  }
`;

// Icon for the ghost emoji inside the button
export const GhostIcon = styled.span`
  margin-right: 8px;
`;
