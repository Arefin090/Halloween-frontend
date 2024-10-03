import styled from "styled-components";

// Spooky Background
export const PageContainer = styled.div`
  background-color: black;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 4rem 2rem;

  @media (max-width: 768px) {
    padding: 3rem 1.5rem;  /* Reduce padding for tablets */
  }

  @media (max-width: 480px) {
    padding: 2rem 1rem;  /* Further reduce padding for mobile */
  }
`;

// Form Styling with Halloween Theme
export const FormContainer = styled.div`
  width: 100%;
  max-width: 700px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 16px;
  padding: 2rem;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.7);
  text-align: left;
  position: relative;

  @media (max-width: 768px) {
    padding: 1.5rem;  /* Adjust padding for tablets */
  }

  @media (max-width: 480px) {
    padding: 1rem;  /* Further reduce padding for mobile */
  }
`;

export const Heading = styled.h1`
  font-size: 2.2rem;
  color: white;
  font-weight: bold;
  margin-bottom: 1.5rem;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 2rem;  /* Reduce heading size for tablets */
  }

  @media (max-width: 480px) {
    font-size: 1.8rem;  /* Further reduce heading size for mobile */
  }
`;

export const Paragraph = styled.p`
  color: white;
  font-size: 1rem;
  line-height: 1.6;
  text-align: center;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    font-size: 0.9rem;  /* Adjust font size for tablets */
    line-height: 1.4;  /* Adjust line height */
  }

  @media (max-width: 480px) {
    font-size: 0.8rem;  /* Adjust font size for mobile */
    line-height: 1.3;  /* Adjust line height */
  }
`;

export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1.5rem;

  @media (max-width: 768px) {
    margin-bottom: 1rem;  /* Adjust spacing for tablets */
  }

  @media (max-width: 480px) {
    margin-bottom: 0.8rem;  /* Adjust spacing for mobile */
  }
`;

export const Label = styled.label`
  font-weight: 600;
  margin-bottom: 0.5rem;
  font-size: 1.1rem;
  color: white;

  @media (max-width: 768px) {
    font-size: 1rem;  /* Adjust label size for tablets */
  }

  @media (max-width: 480px) {
    font-size: 0.9rem;  /* Adjust label size for mobile */
  }
`;

export const Input = styled.input`
  padding: 1rem;
  font-size: 1rem;
  border: 1px solid #fff;
  border-radius: 8px;
  outline: none;
  background: #333;
  color: white;
  transition: border-color 0.2s ease-in-out;

  &::placeholder {
    color: #aaa;
  }

  &:focus {
    border-color: #ff6600;
  }

  @media (max-width: 768px) {
    padding: 0.9rem;  /* Adjust padding for tablets */
    font-size: 0.9rem;  /* Adjust font size for tablets */
  }

  @media (max-width: 480px) {
    padding: 0.8rem;  /* Adjust padding for mobile */
    font-size: 0.85rem;  /* Adjust font size for mobile */
  }
`;

export const CheckboxContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1.5rem;

  input {
    margin-right: 10px;
  }

  label {
    font-size: 1rem;
    color: white;

    @media (max-width: 768px) {
      font-size: 0.9rem;  /* Adjust label size for tablets */
    }

    @media (max-width: 480px) {
      font-size: 0.85rem;  /* Adjust label size for mobile */
    }
  }
`;

export const Button = styled.button`
  padding: 1rem 2rem;
  background-color: transparent;
  color: white;
  font-size: 1.2rem;
  border: 2px solid white;
  border-radius: 50px;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  text-shadow: 2px 2px 4px #000;
  margin-bottom: 2rem;

  &:hover {
    background-color: #ff6600;
    color: white;
  }

  &:focus {
    background-color: #ff6600;
  }

  @media (max-width: 768px) {
    padding: 0.9rem 1.8rem;
    font-size: 1.1rem;
  }

  @media (max-width: 480px) {
    padding: 0.8rem 1.6rem;
    font-size: 1rem;
  }
`;

export const ErrorText = styled.span`
  color: red;
  font-size: 0.9rem;
  margin-top: 5px;

  @media (max-width: 768px) {
    font-size: 0.85rem;
  }

  @media (max-width: 480px) {
    font-size: 0.8rem;
  }
`;
export const TermsLink = styled.span`
  color: #ff6600;  /* Pumpkin color */
  font-weight: bold;
  cursor: pointer;
  text-decoration: underline;

  &:hover {
    color: white;  /* Change color on hover */
  }
`;
