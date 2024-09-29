import styled from 'styled-components';

// Container for the event section
export const SectionContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 600px; /* Set height according to the image */
  width: 100%;
  background-image: url('https://static.wixstatic.com/media/84f0f7_567bd2a54fa24ee0b7981ae43de40aea~mv2.jpg/v1/fill/w_1755,h_804,al_c,q_85,enc_auto/84f0f7_567bd2a54fa24ee0b7981ae43de40aea~mv2.jpg');
  background-size: cover;
  background-position: center;
  position: relative;

  /* Media query for smaller screens */
  @media (max-width: 768px) {
    height: 400px; /* Adjust height for smaller screens */
    background-size: contain; /* Ensure the background is fully visible */
  }

  @media (max-width: 480px) {
    height: 300px; /* Further adjustment for mobile phones */
    background-size: cover;
  }
`;

// The button for Halloween Events
export const EventButton = styled.button`
  position: absolute;
  bottom: 40px; /* Position at the bottom of the image */
  background-color: white; /* Initially white */
  color: black; /* Black text for the white button */
  border: 2px solid #ff6600; /* Add border for a pumpkin color outline */
  border-radius: 50px;
  padding: 12px 25px; /* Reduced padding to make the button smaller */
  font-size: 1rem; /* Slightly smaller font */
  cursor: pointer;
  text-transform: uppercase;
  transition: all 0.3s ease-in-out;
  text-align: center;

  &:hover {
    background-color: #ff6600; /* Pumpkin color on hover */
    color: white; /* Text color changes to white on hover */
    transform: scale(1.05); /* Slightly increase size on hover */
  }

  /* Media query for smaller screens */
  @media (max-width: 768px) {
    font-size: 0.9rem; /* Make the font smaller for tablets */
    padding: 10px 20px; /* Reduce padding for smaller devices */
    bottom: 30px; /* Adjust button position for smaller screens */
  }

  @media (max-width: 480px) {
    font-size: 0.8rem; /* Make the font smaller for phones */
    padding: 8px 18px; /* Adjust padding for phones */
    bottom: 20px; /* Further adjust the button position */
  }
`;
