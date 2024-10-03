import styled from 'styled-components';

// Container for the event section with black background
export const SectionContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  background-color: black; /* Set background to black */
  padding: 20px 0;
`;

// Image for the event section
export const EventImage = styled.img`
  width: 980px;
  height: 449px;
  object-fit: cover; /* Ensures the image covers the container without distortion */
  object-position: 50% 50%; /* Centers the image */
  
  @media (max-width: 768px) {
    width: 90%; /* Adjusts width for smaller screens */
    height: auto; /* Maintains aspect ratio */
  }

  @media (max-width: 480px) {
    width: 100%; /* Full width for mobile devices */
    height: auto;
  }
`;

// The button for Halloween Events below the image
export const EventButton = styled.button`
  margin-top: 15px; /* Adds space between the image and the button */
  background-color: white; /* Initially white */
  color: black; /* Black text for the white button */
  border: none;
  border-radius: 50px;
  padding: 15px 25px;
  font-size: 1rem;
  cursor: pointer;
  text-transform: uppercase;
  transition: all 0.3s ease-in-out;
  text-align: center;

  &:hover {
    background-color: #ff6600; /* Pumpkin color on hover */
    color: white; /* Text color changes to white on hover */
    transform: scale(1.05); /* Slightly increase size on hover */
  }

  @media (max-width: 768px) {
    font-size: 0.9rem;
    padding: 10px 20px;
  }

  @media (max-width: 480px) {
    font-size: 0.8rem;
    padding: 8px 18px;
  }
`;
