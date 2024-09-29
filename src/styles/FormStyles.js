// src/styles/FormStyles.js
import styled from "styled-components";

// Spooky Background
export const PageContainer = styled.div`
  background-color: black;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 4rem 2rem;
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
`;

export const Heading = styled.h1`
  font-size: 2.2rem;
  color: white;
  font-weight: bold;
  margin-bottom: 1.5rem;
  text-align: center;
`;

export const Paragraph = styled.p`
  color: white;
  font-size: 1rem;
  line-height: 1.6;
  text-align: center;
  margin-bottom: 20px;
`;

export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1.5rem;
`;

export const Label = styled.label`
  font-weight: 600;
  margin-bottom: 0.5rem;
  font-size: 1.1rem;
  color: white;
`;

export const Input = styled.input`
  padding: 1rem;
  font-size: 1rem;
  border: 1px solid #fff;  /* Default border color set to white */
  border-radius: 8px;
  outline: none;
  background: #333;
  color: white;
  transition: border-color 0.2s ease-in-out;

  &::placeholder {
    color: #aaa;
  }

  &:focus {
    border-color: #ff6600; /* Bright orange focus */
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
  }
`;

// Button with Pumpkin Color on Hover
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
  margin-bottom: 2rem;  // Added margin for spacing

  &:hover {
    background-color: #ff6600;  /* Pumpkin orange when hovered */
    color: white;
  }

  &:focus {
    background-color: #ff6600;  /* Pumpkin orange when clicked */
  }
`;

// Error Text Styling
export const ErrorText = styled.span`
  color: red;
  font-size: 0.9rem;
  margin-top: 5px;
`;
