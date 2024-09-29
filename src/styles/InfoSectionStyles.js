// src/styles/InfoSectionStyles.js
import styled from 'styled-components';

// Container for the info section
export const SectionContainer = styled.div`
  text-align: center;
  padding: 60px 20px;
  background-color: #E8E6E6; /* Light grey background */
`;

// Title styling with line breaks
export const InfoTitle = styled.h1`
  font-size: 2.5rem;
  font-weight: bold;
  color: #000;
  margin-bottom: 1.5rem;
  line-height: 1.3;
  white-space: pre-wrap; /* To handle line breaks correctly */
  @media (max-width: 768px) {
    font-size: 2rem;
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
`;



// // src/styles/InfoStyles.js
// import styled from 'styled-components';

// // Container for the info section
// export const InfoContainer = styled.div`
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   align-items: center;
//   background-color: #f0f0f0;
//   padding: 50px;
//   text-align: center;
// `;

// // Heading of the section
// export const Heading = styled.h1`
//   font-size: 2.5rem;
//   color: #000;
//   margin-bottom: 20px;
//   font-weight: bold;
//   emoji: 🎃;
// `;

// // Main text content
// export const Text = styled.p`
//   font-size: 1.2rem;
//   color: #333;
//   margin-bottom: 30px;
// `;

// // Button to add address to map
// export const AddButton = styled.button`
//   background-color: #000;
//   color: white;
//   border: none;
//   border-radius: 50px;
//   padding: 15px 30px;
//   font-size: 1.2rem;
//   cursor: pointer;
//   text-transform: uppercase;
//   transition: all 0.3s ease-in-out;

//   &:hover {
//     background-color: #ff4500;
//     transform: scale(1.05);
//   }
// `;
