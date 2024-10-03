import styled from 'styled-components';

export const MapInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #f8f8f8;
  padding: 60px;
  text-align: center;

  @media (max-width: 768px) {
    padding: 40px;  /* Adjust padding for tablets */
  }

  @media (max-width: 480px) {
    padding: 20px;  /* Reduce padding for mobile phones */
  }
`;

// Main heading, bold and large
export const Heading = styled.h1`
  font-size: 3rem; /* Adjusted for bigger text */
  font-weight: bold;
  color: #000;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    font-size: 2.5rem;  /* Reduce font size for tablets */
  }

  @media (max-width: 480px) {
    font-size: 1.4rem; /* Further reduced font size for mobile */
    line-height: 1.2; /* Adjusted line-height to prevent breakage */
    margin-bottom: 1rem;
    word-wrap: break-word; /* Ensure long words break properly
  }
`;

// Second line of text, slightly smaller and slightly bold
export const SubText = styled.p`
  font-size: 1.5rem; /* Slightly smaller than the heading */
  font-weight: 600; /* Slightly bold */
  color: #333;
  margin-bottom: 15px; /* Reduce margin between paragraphs on mobile */

  @media (max-width: 768px) {
    font-size: 1.3rem;  /* Adjust font size for tablets */
    margin-bottom: 12px; /* Reduce margin between paragraphs */
  }

  @media (max-width: 480px) {
    font-size: 1.1rem;  /* Adjust font size for mobile phones */
    margin-bottom: 10px; /* Reduce margin for mobile */
  }
`;

// Regular paragraph, standard font size
export const Text = styled.p`
  font-size: 1.2rem;
  color: #333;
  margin-bottom: 30px; /* Reduce margin for mobile */

  @media (max-width: 768px) {
    font-size: 1rem;  /* Adjust font size for tablets */
    margin-bottom: 25px; /* Adjust margin for tablets */
  }

  @media (max-width: 480px) {
    font-size: 0.9rem;  /* Adjust font size for mobile phones */
    margin-bottom: 20px; /* Reduce margin between paragraphs for mobile */
  }
`;

export const MapImage = styled.img`
  width: 100%;
  max-width: 600px;
  height: auto;
  margin-bottom: 30px;

  @media (max-width: 768px) {
    max-width: 500px;  /* Adjust image size for tablets */
  }

  @media (max-width: 480px) {
    max-width: 100%;  /* Full width for mobile phones */
  }
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

  @media (max-width: 768px) {
    font-size: 1rem;  /* Adjust button size for tablets */
    padding: 12px 25px;  /* Adjust padding */
  }

  @media (max-width: 480px) {
    font-size: 0.9rem;  /* Adjust button size for mobile phones */
    padding: 10px 20px;  /* Adjust padding */
  }
`;
